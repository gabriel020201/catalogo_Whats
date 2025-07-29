// Configurações da aplicação
const API_CONFIG = {
    baseURL: 'http://localhost:3001/api',
    timeout: 10000
};

const STORE_CONFIG = {
    whatsappNumber: '5566981084567',
    storeName: 'Minha Loja Online',
    welcomeMessage: 'Olá! Seja bem-vindo(a) à nossa loja!'
};

// Cache de produtos
let productsCache = [];
let categoriesCache = [];

// Funções de API
class StoreAPI {
    static async request(endpoint, options = {}) {
        try {
            const response = await fetch(`${API_CONFIG.baseURL}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('❌ Erro na API:', error);
            throw error;
        }
    }

    static async getProducts() {
        try {
            const products = await this.request('/products');
            productsCache = products;
            
            // Extrair categorias únicas
            categoriesCache = [...new Set(products.map(p => p.category))];
            
            return products;
        } catch (error) {
            showNotification('Erro ao carregar produtos', 'error');
            return [];
        }
    }

    static async checkStock(items) {
        try {
            return await this.request('/products/check-stock', {
                method: 'POST',
                body: JSON.stringify({ items })
            });
        } catch (error) {
            showNotification('Erro ao verificar estoque', 'error');
            return { success: false, items: [] };
        }
    }

    static async createOrder(orderData) {
        try {
            return await this.request('/orders', {
                method: 'POST',
                body: JSON.stringify(orderData)
            });
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
            if (error.message.includes('400')) {
                const response = await fetch(`${API_CONFIG.baseURL}/orders`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderData)
                });
                const errorData = await response.json();
                throw new Error(errorData.details ? errorData.details.join(', ') : errorData.error);
            }
            throw error;
        }
    }

    static async getLowStockProducts() {
        try {
            return await this.request('/reports/low-stock');
        } catch (error) {
            console.error('Erro ao buscar produtos com estoque baixo:', error);
            return [];
        }
    }
}

// Variável global do carrinho
let cart;

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', async function() {
    showLoadingState(true);
    
    try {
        // Inicializar carrinho
        cart = new ShoppingCart();
        window.cart = cart; // Disponibilizar globalmente
        
        await loadProducts('all');
        setupEventListeners();
        await checkLowStock();
        
        console.log('✅ Aplicação carregada com sucesso');
        console.log('🛒 Carrinho inicializado:', cart);
    } catch (error) {
        console.error('❌ Erro ao inicializar aplicação:', error);
        showNotification('Erro ao carregar a loja. Verifique se o servidor está rodando.', 'error');
    } finally {
        showLoadingState(false);
    }
});

// Carregar produtos da API
async function loadProducts(category = 'all') {
    try {
        showLoadingState(true);
        
        let products = productsCache;
        if (products.length === 0) {
            products = await StoreAPI.getProducts();
        }

        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(p => p.category === category);

        displayProducts(filteredProducts);
        animateProducts();
        
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        showNotification('Erro ao carregar produtos', 'error');
    } finally {
        showLoadingState(false);
    }
}

// Exibir produtos na interface
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-box-open"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Não há produtos disponíveis nesta categoria no momento.</p>
            </div>
        `;
        return;
    }

    // Armazenar produtos globalmente para acesso pelos event listeners
    window.currentProducts = products;

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-stock">
                    <i class="fas fa-box"></i>
                    <span class="${product.stock_quantity <= product.min_stock ? 'low-stock' : ''}">
                        ${product.stock_quantity} em estoque
                    </span>
                </div>
                <button 
                    class="add-to-cart-btn" 
                    data-product-id="${product.id}"
                    ${product.stock_quantity === 0 ? 'disabled' : ''}
                >
                    <i class="fas fa-${product.stock_quantity === 0 ? 'times' : 'cart-plus'}"></i>
                    ${product.stock_quantity === 0 ? 'Sem Estoque' : 'Adicionar ao Carrinho'}
                </button>
            </div>
        </div>
    `).join('');

    // Adicionar event listeners aos botões
    setupProductEventListeners();
}

// Verificar produtos com estoque baixo
async function checkLowStock() {
    try {
        const lowStockProducts = await StoreAPI.getLowStockProducts();
        
        if (lowStockProducts.length > 0) {
            const productNames = lowStockProducts.map(p => p.name).join(', ');
            console.warn(`⚠️ Produtos com estoque baixo: ${productNames}`);
            
            // Exibir alerta discreto (opcional)
            if (lowStockProducts.length > 5) {
                showNotification(`${lowStockProducts.length} produtos com estoque baixo`, 'warning');
            }
        }
    } catch (error) {
        console.error('Erro ao verificar estoque baixo:', error);
    }
}

// Filtrar produtos por categoria
async function filterProducts(category, buttonElement = null) {
    // Atualizar botões ativos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    // Carregar produtos filtrados
    await loadProducts(category);
}

// Configurar event listeners para os botões dos produtos
function setupProductEventListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn[data-product-id]');
    
    addToCartButtons.forEach(button => {
        // Remover listener anterior se existir
        button.removeEventListener('click', handleAddToCart);
        
        // Adicionar novo listener
        button.addEventListener('click', handleAddToCart);
    });
}

// Handler para o evento de adicionar ao carrinho
async function handleAddToCart(event) {
    const button = event.currentTarget;
    const productId = parseInt(button.getAttribute('data-product-id'));
    
    if (!productId || button.disabled) return;
    
    await addToCart(productId, button);
}

// Adicionar produto ao carrinho (com verificação de estoque)
async function addToCart(productId, buttonElement = null) {
    try {
        const product = productsCache.find(p => p.id === productId);
        if (!product) {
            showNotification('Produto não encontrado', 'error');
            return;
        }

        if (product.stock_quantity === 0) {
            showNotification('Produto sem estoque', 'error');
            return;
        }

        // Verificar se já existe no carrinho
        const existingItem = cart.items.find(item => item.id === productId);
        const requestedQuantity = existingItem ? existingItem.quantity + 1 : 1;

        if (requestedQuantity > product.stock_quantity) {
            showNotification(`Máximo disponível: ${product.stock_quantity} unidades`, 'error');
            return;
        }

        // Adicionar ao carrinho usando o formato correto
        cart.addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            stock: product.stock_quantity
        });
        
        // Feedback visual no botão se fornecido
        if (buttonElement) {
            const originalText = buttonElement.innerHTML;
            
            buttonElement.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
            buttonElement.style.background = '#28a745';
            
            setTimeout(() => {
                buttonElement.innerHTML = originalText;
                buttonElement.style.background = '';
            }, 1000);
        }

        showNotification('Produto adicionado ao carrinho!', 'success');
        
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        showNotification('Erro ao adicionar produto', 'error');
    }
}

// Finalizar pedido com verificação de estoque em tempo real
async function checkout() {
    if (!cart) {
        showNotification('Erro: Sistema não inicializado corretamente', 'error');
        return;
    }
    
    if (cart.items.length === 0) {
        showNotification('Seu carrinho está vazio!', 'error');
        return;
    }

    try {
        showLoadingState(true, 'Verificando estoque...');

        // 1. Verificar estoque em tempo real
        const stockCheck = await StoreAPI.checkStock(
            cart.items.map(item => ({ id: item.id, quantity: item.quantity }))
        );

        if (!stockCheck.success) {
            const outOfStockItems = stockCheck.items
                .filter(item => !item.inStock)
                .map(item => `${item.name}: solicitado ${item.requested}, disponível ${item.available}`)
                .join('\n');

            showConfirmModal(
                `Alguns itens não estão mais disponíveis:\n\n${outOfStockItems}\n\nDeseja atualizar o carrinho automaticamente?`,
                async () => {
                    // Atualizar carrinho removendo itens sem estoque
                    cart.items = cart.items.filter(item => {
                        const stockItem = stockCheck.items.find(s => s.id === item.id);
                        return stockItem && stockItem.available > 0;
                    });

                    // Ajustar quantidades
                    cart.items.forEach(item => {
                        const stockItem = stockCheck.items.find(s => s.id === item.id);
                        if (stockItem && item.quantity > stockItem.available) {
                            item.quantity = stockItem.available;
                        }
                    });

                    cart.saveToStorage();
                    cart.updateCartDisplay();
                    
                    showNotification('Carrinho atualizado com base no estoque disponível', 'success');
                },
                'Atualizar Carrinho',
                'fas fa-sync',
                'warning'
            );
            return;
        }

        // 2. Solicitar dados do cliente
        const customerData = await showCustomerModal();
        if (!customerData) return;

        // 3. Processar pedido
        const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
        const totalValue = cart.getTotalValue();

        showConfirmModal(
            `Confirmar pedido para ${customerData.name}?\n\n${totalItems} ${totalItems === 1 ? 'item' : 'itens'} - ${formatPrice(totalValue)}`,
            async () => {
                try {
                    showLoadingState(true, 'Processando pedido...');

                    const orderData = {
                        customer_name: customerData.name,
                        customer_phone: customerData.phone,
                        items: cart.items.map(item => ({
                            id: item.id,
                            quantity: item.quantity,
                            price: item.price
                        })),
                        total_value: totalValue
                    };

                    const result = await StoreAPI.createOrder(orderData);
                    
                    if (result.success) {
                        // Gerar mensagem WhatsApp
                        const whatsappMessage = generateWhatsAppMessage(customerData, cart.items, totalValue);
                        const whatsappURL = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                        
                        // Abrir WhatsApp
                        window.open(whatsappURL, '_blank');
                        
                        showNotification('Pedido processado com sucesso!', 'success');
                        
                        // Limpar carrinho
                        setTimeout(() => {
                            showConfirmModal(
                                'Pedido enviado com sucesso! Deseja limpar o carrinho?',
                                () => {
                                    cart.clear();
                                    toggleCart();
                                    // Recarregar produtos para atualizar estoque
                                    loadProducts('all');
                                    showNotification('Carrinho limpo!', 'success');
                                },
                                'Limpar Carrinho',
                                'fas fa-trash',
                                'success'
                            );
                        }, 1500);
                    }
                } catch (error) {
                    console.error('Erro ao processar pedido:', error);
                    showNotification(`Erro: ${error.message}`, 'error');
                }
            },
            'Confirmar Pedido',
            'fas fa-check',
            'question'
        );

    } catch (error) {
        console.error('Erro no checkout:', error);
        showNotification('Erro ao processar pedido', 'error');
    } finally {
        showLoadingState(false);
    }
}

// Modal para dados do cliente
function showCustomerModal() {
    return new Promise((resolve) => {
        const modalHTML = `
            <div class="customer-modal" id="customerModal">
                <div class="customer-content">
                    <h3><i class="fas fa-user"></i> Dados para Entrega</h3>
                    <form id="customerForm">
                        <div class="form-group">
                            <label for="customerName">Nome Completo:</label>
                            <input type="text" id="customerName" required>
                        </div>
                        <div class="form-group">
                            <label for="customerPhone">WhatsApp:</label>
                            <input type="tel" id="customerPhone" placeholder="(11) 99999-9999" required>
                        </div>
                        <div class="form-actions">
                            <button type="button" onclick="closeCustomerModal(null)">Cancelar</button>
                            <button type="submit">Continuar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="customer-overlay" onclick="closeCustomerModal(null)"></div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const modal = document.getElementById('customerModal');
        const form = document.getElementById('customerForm');
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        window.closeCustomerModal = (data) => {
            modal.remove();
            document.querySelector('.customer-overlay').remove();
            document.body.style.overflow = '';
            resolve(data);
            delete window.closeCustomerModal;
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('customerName').value.trim();
            const phone = document.getElementById('customerPhone').value.trim();
            
            if (name && phone) {
                closeCustomerModal({ name, phone });
            }
        });
    });
}

// Gerar mensagem do WhatsApp
function generateWhatsAppMessage(customer, items, total) {
    let message = `🛒 *NOVO PEDIDO - ${STORE_CONFIG.storeName}*\n\n`;
    message += `👤 *Cliente:* ${customer.name}\n`;
    message += `📱 *WhatsApp:* ${customer.phone}\n\n`;
    message += `📦 *ITENS DO PEDIDO:*\n`;
    
    items.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Qtd: ${item.quantity}x\n`;
        message += `   Valor unitário: ${formatPrice(item.price)}\n`;
        message += `   Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `💰 *VALOR TOTAL: ${formatPrice(total)}*\n\n`;
    message += `⏰ Pedido realizado em: ${new Date().toLocaleString('pt-BR')}\n\n`;
    message += `✅ Aguardando confirmação do pagamento`;
    
    return message;
}

// Estado de carregamento
function showLoadingState(show, message = 'Carregando...') {
    let loader = document.getElementById('globalLoader');
    
    if (show) {
        if (!loader) {
            loader = document.createElement('div');
            loader.id = 'globalLoader';
            loader.innerHTML = `
                <div class="loader-content">
                    <div class="spinner"></div>
                    <p>${message}</p>
                </div>
            `;
            document.body.appendChild(loader);
        } else {
            loader.querySelector('p').textContent = message;
        }
        loader.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        if (loader) {
            loader.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
}

// Função para obter produto por ID (compatibilidade)
function getProductById(id) {
    return productsCache.find(p => p.id === id);
}

// Função para obter produtos por categoria (compatibilidade) 
function getProductsByCategory(category) {
    if (category === 'all') return productsCache;
    return productsCache.filter(p => p.category === category);
}

// Formatação de preço
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Resto das funções existentes (toggleCart, clearCart, etc.)

// Toggle do modal do carrinho
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    const overlay = document.getElementById('overlay');
    
    cartModal.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Impedir scroll do body quando modal estiver aberto
    if (cartModal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Limpar carrinho
function clearCart() {
    showConfirmModal(
        'Tem certeza que deseja limpar todo o carrinho? Esta ação não pode ser desfeita.',
        () => {
            cart.clear();
            showNotification('Carrinho limpo com sucesso!', 'success');
        },
        'Limpar Carrinho',
        'fas fa-trash',
        'warning'
    );
}

// Obter nome da categoria em português
function getCategoryName(category) {
    const categories = {
        'eletronicos': 'Eletrônicos',
        'roupas': 'Roupas & Acessórios',
        'casa': 'Casa & Decoração',
        'esportes': 'Esportes & Lazer'
    };
    return categories[category] || category;
}

// Configurar event listeners
function setupEventListeners() {
    // Botão do carrinho
    const cartButton = document.getElementById('cartButton');
    if (cartButton) {
        cartButton.addEventListener('click', toggleCart);
    }

    // Botão voltar ao topo
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
    }

    // Event listeners do carrinho
    const closeCartBtn = document.querySelector('.close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', toggleCart);
    }

    const clearCartBtn = document.querySelector('.btn-clear');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Overlay para fechar carrinho
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleCart);
    }

    // Modal de confirmação
    const confirmOverlay = document.getElementById('confirmOverlay');
    if (confirmOverlay) {
        confirmOverlay.addEventListener('click', closeConfirmModal);
    }

    const confirmBtn = document.getElementById('confirmBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', confirmAction);
    }

    const cancelBtn = document.querySelector('.btn-cancel');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeConfirmModal);
    }

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const cartModal = document.getElementById('cartModal');
            const confirmModal = document.getElementById('confirmModal');
            
            if (confirmModal && confirmModal.classList.contains('active')) {
                closeConfirmModal();
            } else if (cartModal.classList.contains('active')) {
                toggleCart();
            }
        }
    });

    // Busca por produtos (opcional)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(searchProducts, 300));
    }

    // Event listeners para filtros de categoria
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category') || 'all';
            filterProducts(category, this);
        });
    });
}

// Animação de entrada dos produtos
function animateProducts() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Buscar produtos (função opcional)
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const productDescription = card.querySelector('.product-description').textContent.toLowerCase();
        
        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Função debounce para otimizar busca
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Função para scroll suave
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Detectar scroll para efeitos visuais na navbar fixa
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (!navbar || !backToTop) return;
    
    // Efeitos na navbar
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)';
        navbar.style.backdropFilter = 'blur(15px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    // Mostrar/ocultar botão voltar ao topo
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Função para voltar ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Sistema de Modal de Confirmação Moderno
let confirmCallback = null;

function showConfirmModal(message, callback, confirmText = 'Confirmar', confirmIcon = 'fas fa-check', type = 'warning') {
    const modal = document.getElementById('confirmModal');
    const overlay = document.getElementById('confirmOverlay');
    const messageEl = document.getElementById('confirmMessage');
    const confirmBtn = document.getElementById('confirmBtn');
    const iconEl = modal.querySelector('.confirm-icon');
    
    if (!modal || !overlay || !messageEl || !confirmBtn || !iconEl) {
        console.error('Elementos do modal de confirmação não encontrados');
        return;
    }
    
    // Configurar conteúdo
    messageEl.textContent = message;
    confirmBtn.innerHTML = `<i class="${confirmIcon}"></i> ${confirmText}`;
    
    // Configurar tipo do modal
    iconEl.innerHTML = getModalIcon(type);
    iconEl.className = `confirm-icon ${type}`;
    
    // Guardar callback
    confirmCallback = callback;
    
    // Mostrar modal
    modal.classList.add('active');
    overlay.classList.add('active');
    
    // Impedir scroll do body
    document.body.style.overflow = 'hidden';
}

function getModalIcon(type) {
    const icons = {
        'warning': '<i class="fas fa-exclamation-triangle"></i>',
        'error': '<i class="fas fa-times-circle"></i>',
        'success': '<i class="fas fa-check-circle"></i>',
        'info': '<i class="fas fa-info-circle"></i>',
        'question': '<i class="fas fa-question-circle"></i>'
    };
    return icons[type] || icons['warning'];
}

function closeConfirmModal() {
    const modal = document.getElementById('confirmModal');
    const overlay = document.getElementById('confirmOverlay');
    
    if (!modal || !overlay) return;
    
    // Esconder modal
    modal.classList.remove('active');
    overlay.classList.remove('active');
    
    // Restaurar scroll do body
    document.body.style.overflow = '';
    
    // Limpar callback
    confirmCallback = null;
}

function confirmAction() {
    if (confirmCallback) {
        confirmCallback();
    }
    closeConfirmModal();
}

// Função para mostrar notificação de sucesso
function showNotification(message, type = 'success') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'exclamation-circle'}"></i>
        ${message}
    `;
    
    // Adicionar estilos
    const bgColor = type === 'success' ? '#28a745' : type === 'warning' ? '#ffc107' : '#dc3545';
    const textColor = type === 'warning' ? '#212529' : 'white';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: ${textColor};
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        transform: translateX(300px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(300px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Log de inicialização
console.log('🛒 Loja Online com API carregada!');
console.log(`📱 WhatsApp configurado: ${STORE_CONFIG.whatsappNumber}`);
console.log(`🗄️ API: ${API_CONFIG.baseURL}`);
