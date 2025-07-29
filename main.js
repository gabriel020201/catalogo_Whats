// Configurações da loja
const STORE_CONFIG = {
    whatsappNumber: '5566981084567', // Substitua pelo número real (com código do país)
    storeName: 'Minha Loja Online',
    welcomeMessage: 'Olá! Seja bem-vindo(a) à nossa loja!'
};

// Funções principais da aplicação
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('all');
    setupEventListeners();
});

// Carregar produtos na página
function loadProducts(category = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = getProductsByCategory(category);

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join('');

    // Animação de entrada dos produtos
    animateProducts();
}

// Filtrar produtos por categoria
function filterProducts(category) {
    // Atualizar botões ativos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Carregar produtos filtrados
    loadProducts(category);
}

// Adicionar produto ao carrinho
function addToCart(productId) {
    cart.addItem(productId);
    
    // Feedback visual
    const button = event.target;
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
    button.style.background = '#28a745';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 1000);
}

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

// Finalizar pedido (enviar para WhatsApp)
function checkout() {
    // Verificar se o carrinho existe
    if (!cart) {
        console.error('Carrinho não inicializado');
        showNotification('Erro: Sistema não inicializado corretamente', 'error');
        return;
    }
    
    if (cart.items.length === 0) {
        showNotification('Seu carrinho está vazio!', 'error');
        return;
    }
    
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalValue = formatPrice(cart.getTotalValue());
    
    showConfirmModal(
        `Finalizar pedido com ${totalItems} ${totalItems === 1 ? 'item' : 'itens'} no valor de ${totalValue}?`,
        () => {
            try {
                const message = cart.generateWhatsAppMessage();
                const whatsappURL = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${message}`;
                
                // Abrir WhatsApp em nova aba
                window.open(whatsappURL, '_blank');
                
                // Mostrar mensagem de sucesso
                showNotification('Pedido enviado para WhatsApp!', 'success');
                
                // Perguntar se quer limpar carrinho
                setTimeout(() => {
                    showConfirmModal(
                        'Pedido enviado com sucesso! Deseja limpar o carrinho?',
                        () => {
                            cart.clear();
                            toggleCart();
                            showNotification('Carrinho limpo!', 'success');
                        },
                        'Limpar Carrinho',
                        'fas fa-trash',
                        'success'
                    );
                }, 1500);
            } catch (error) {
                console.error('Erro ao processar pedido:', error);
                showNotification('Erro ao processar pedido. Tente novamente.', 'error');
            }
        },
        'Enviar Pedido',
        'fab fa-whatsapp',
        'question'
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
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const cartModal = document.getElementById('cartModal');
            const confirmModal = document.getElementById('confirmModal');
            const catalogModal = document.getElementById('catalogModal');
            
            if (confirmModal && confirmModal.classList.contains('active')) {
                closeConfirmModal();
            } else if (cartModal && cartModal.classList.contains('active')) {
                toggleCart();
            } else if (catalogModal && catalogModal.classList.contains('show')) {
                closeCatalogModal();
            }
        }
    });

    // Busca por produtos (opcional)
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(searchProducts, 300));
    }
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
    
    // Efeitos na navbar
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)';
            navbar.style.backdropFilter = 'blur(15px)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
    
    // Mostrar/ocultar botão voltar ao topo
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
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
        'question': '<i class="fas fa-question-circle"></i>',
        'success': '<i class="fas fa-check-circle"></i>',
        'error': '<i class="fas fa-times-circle"></i>',
        'info': '<i class="fas fa-info-circle"></i>'
    };
    return icons[type] || icons.warning;
}

function confirmAction() {
    if (confirmCallback) {
        confirmCallback();
        confirmCallback = null;
    }
    closeConfirmModal();
}

function closeConfirmModal() {
    const modal = document.getElementById('confirmModal');
    const overlay = document.getElementById('confirmOverlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    confirmCallback = null;
}

// Sistema de notificações
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${message}
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
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
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ========================================
// FUNÇÕES DO CATÁLOGO PDF
// ========================================

// Função para visualizar o catálogo
function viewCatalog() {
    const modal = document.getElementById('catalogModal');
    const overlay = document.getElementById('catalogOverlay');
    const pdfViewer = document.getElementById('pdfViewer');
    
    // Define o caminho do PDF
    pdfViewer.src = 'CATALOGO ATUALIZADO 28072025.pdf';
    
    // Mostra o modal
    modal.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Log da ação
    console.log('📖 Catálogo PDF aberto');
}

// Função para fechar o modal do catálogo
function closeCatalogModal() {
    const modal = document.getElementById('catalogModal');
    const overlay = document.getElementById('catalogOverlay');
    const pdfViewer = document.getElementById('pdfViewer');
    
    // Esconde o modal
    modal.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Limpa o src do iframe para otimizar performance
    pdfViewer.src = '';
    
    // Log da ação
    console.log('📖 Catálogo PDF fechado');
}

// Função para baixar o catálogo
function downloadCatalog() {
    const link = document.createElement('a');
    link.href = 'CATALOGO ATUALIZADO 28072025.pdf';
    link.download = 'Catalogo_Atualizado_28072025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar notificação
    showNotification('📥 Download do catálogo iniciado!', 'success');
    
    // Log da ação
    console.log('📥 Download do catálogo iniciado');
}

// Função para alternar tela cheia no PDF
function toggleFullscreen() {
    const pdfViewer = document.getElementById('pdfViewer');
    const fullscreenBtn = document.querySelector('.btn-pdf-fullscreen i');
    
    if (!document.fullscreenElement) {
        pdfViewer.requestFullscreen().then(() => {
            fullscreenBtn.className = 'fas fa-compress';
            console.log('🖥️ Catálogo em tela cheia');
        }).catch(err => {
            console.error('Erro ao entrar em tela cheia:', err);
            showNotification('❌ Erro ao ativar tela cheia', 'error');
        });
    } else {
        document.exitFullscreen().then(() => {
            fullscreenBtn.className = 'fas fa-expand';
            console.log('🖥️ Tela cheia desativada');
        });
    }
}

// Log de inicialização
console.log('🛒 Loja Online carregada com sucesso!');
console.log(`📱 WhatsApp configurado: ${STORE_CONFIG.whatsappNumber}`);
console.log('📖 Funções do catálogo carregadas');
