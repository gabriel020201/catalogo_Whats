// Configurações da loja
const STORE_CONFIG = {
    whatsappNumber: '556630245409', // Formato: código país + DDD + número
    storeName: 'Sebalde Life Ferramentas',
    welcomeMessage: 'Olá! Seja bem-vindo(a) à Sebalde Life Ferramentas!',
    companyName: 'H. JUNIOR GARCIA SEBALDELI E CIA LTDA',
    cnpj: '61.701.342/0001-23',
    email: 'atendimento@sebaldeliferramentas.com.br',
    phone: '(66) 3024-5409',
    whatsappFormatted: '(66) 3024-5409'
};

// Aguardar carregamento completo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Inicializando aplicação...');
    
    // Verificar dependências
    if (typeof cart === 'undefined') {
        console.error('❌ Carrinho não inicializado!');
        return;
    }
    
    if (typeof products === 'undefined' || !Array.isArray(products)) {
        console.error('❌ Produtos não carregados!');
        return;
    }
    
    console.log(`✅ ${products.length} produtos carregados`);
    console.log('✅ Carrinho inicializado');
    
    // Inicializar aplicação
    loadProducts('all');
    setupEventListeners();
    updateCartCount();
    
    console.log('✅ Aplicação iniciada com sucesso!');
});

// FUNÇÃO PRINCIPAL: Carregar produtos na página
function loadProducts(category = 'all') {
    console.log('🚀 Carregando produtos - categoria:', category);
    
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) {
        console.error('❌ Elemento productsGrid não encontrado!');
        return;
    }
    
    // Filtrar produtos
    let filteredProducts = [];
    if (category === 'all') {
        filteredProducts = products || [];
    } else {
        filteredProducts = (products || []).filter(product => product.category === category);
    }
    
    console.log(`📦 ${filteredProducts.length} produtos encontrados`);
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666; font-size: 1.1rem;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; display: block; color: #ddd;"></i>
                Nenhum produto encontrado para esta categoria.
            </div>
        `;
        return;
    }
    
    // Gerar HTML dos produtos
    const productsHTML = filteredProducts.map(product => {
        const productName = String(product.name || '').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
        const productCodBarras = String(product.codBarras || '').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
        const productNcm = String(product.ncm || '').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
        const productCategory = String(product.category || 'outros');
        const productPrice = Number(product.price) || 0;
        const productId = Number(product.id) || 0;
        const productImage = String(product.image || 'imagens_produtos/placeholder.png');
        
        const categoryName = getCategoryDisplayName(productCategory);
        const formattedPrice = formatProductPrice(productPrice);
        
        return `
            <div class="product-card" data-category="${productCategory}" data-id="${productId}">
                <div class="product-image">
                    <img src="${productImage}" 
                         alt="${productName}" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiNEMkQ2REMiLz4KPHRleHQgeD0iNTAlIiB5PSI2NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5QTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VtPC90ZXh0Pgo8L3N2Zz4='; this.onerror=null;">
                </div>
                <div class="product-info">
                    <div class="product-category">${categoryName}</div>
                    <h3 class="product-name">${productName}</h3>
                    <p class="product-description">Cód: ${productCodBarras}</p>
                    ${productNcm ? `<p class="product-ncm">NCM: ${productNcm}</p>` : ''}
                    <div class="product-price">${formattedPrice}</div>
                    <button class="add-to-cart-btn" onclick="addProductToCart(${productId})">
                        <i class="fas fa-cart-plus"></i>
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    // Inserir HTML no DOM
    productsGrid.innerHTML = productsHTML;
    console.log(`✅ ${filteredProducts.length} produtos inseridos no DOM`);
    
    // Verificar inserção
    setTimeout(() => {
        const insertedCards = productsGrid.querySelectorAll('.product-card');
        console.log(`📊 Verificação: ${insertedCards.length} cards no DOM`);
        
        if (insertedCards.length > 0) {
            console.log('✅ Produtos carregados com sucesso!');
            animateProductCards();
        } else {
            console.error('❌ Erro: produtos não apareceram no DOM');
        }
    }, 100);
}

// Filtrar produtos por categoria
function filterProducts(category) {
    console.log('🔍 Filtrando por categoria:', category);
    
    // Atualizar categoria atual
    window.currentCategory = category;
    
    // Carregar produtos
    loadProducts(category);
    
    // Atualizar botões de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[onclick="filterProducts('${category}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Scroll para produtos
    const catalogSection = document.querySelector('.catalog');
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Buscar produtos
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.trim().toLowerCase();
    console.log('🔍 Buscando por:', searchTerm);
    
    if (searchTerm === '') {
        loadProducts(window.currentCategory || 'all');
        return;
    }
    
    const filteredProducts = (products || []).filter(product => {
        const name = String(product.name || '').toLowerCase();
        const description = String(product.description || '').toLowerCase();
        const category = String(product.category || '').toLowerCase();
        const codBarras = String(product.codBarras || '').toLowerCase();
        const referencia = String(product.referencia || '').toLowerCase();
        const ncm = String(product.ncm || '').toLowerCase();
        
        return name.includes(searchTerm) || 
               description.includes(searchTerm) || 
               category.includes(searchTerm) ||
               codBarras.includes(searchTerm) ||
               referencia.includes(searchTerm) ||
               ncm.includes(searchTerm);
    });
    
    // Detectar tipo de busca para feedback ao usuário
    let searchType = '';
    if (filteredProducts.length > 0) {
        const firstMatch = filteredProducts[0];
        const codBarras = String(firstMatch.codBarras || '').toLowerCase();
        const referencia = String(firstMatch.referencia || '').toLowerCase();
        const ncm = String(firstMatch.ncm || '').toLowerCase();
        
        if (codBarras.includes(searchTerm)) {
            searchType = ' (busca por código de barras)';
        } else if (referencia.includes(searchTerm)) {
            searchType = ' (busca por referência)';
        } else if (ncm.includes(searchTerm)) {
            searchType = ' (busca por NCM)';
        }
    }
    
    console.log(`📦 ${filteredProducts.length} produtos encontrados na busca${searchType}`);
    
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    // Mostrar contador de resultados
    updateResultsCounter(filteredProducts.length, searchTerm, searchType);
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; display: block; color: #ddd;"></i>
                Nenhum produto encontrado para "${searchTerm}"
                <br><small style="color: #999; margin-top: 10px; display: block;">
                    Tente buscar por nome, código de barras, referência, NCM ou categoria
                </small>
            </div>
        `;
        return;
    }
    
    // Usar a mesma lógica de renderização
    const productsHTML = filteredProducts.map(product => {
        const productName = String(product.name || '').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
        const productCodBarras = String(product.codBarras || '').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
        const productNcm = String(product.ncm || '').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
        const productCategory = String(product.category || 'outros');
        const productPrice = Number(product.price) || 0;
        const productId = Number(product.id) || 0;
        const productImage = String(product.image || 'imagens_produtos/placeholder.png');
        
        return `
            <div class="product-card" data-category="${productCategory}" data-id="${productId}">
                <div class="product-image">
                    <img src="${productImage}" alt="${productName}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiNEMkQ2REMiLz4KPHRleHQgeD0iNTAlIiB5PSI2NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5QTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VtPC90ZXh0Pgo8L3N2Zz4='; this.onerror=null;">
                </div>
                <div class="product-info">
                    <div class="product-category">${getCategoryDisplayName(productCategory)}</div>
                    <h3 class="product-name">${productName}</h3>
                    <p class="product-description">Cód: ${productCodBarras}</p>
                    ${productNcm ? `<p class="product-ncm">NCM: ${productNcm}</p>` : ''}
                    <div class="product-price">${formatProductPrice(productPrice)}</div>
                    <button class="add-to-cart-btn" onclick="addProductToCart(${productId})">
                        <i class="fas fa-cart-plus"></i>
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    productsGrid.innerHTML = productsHTML;
    animateProductCards();
}

// Atualizar contador de resultados
function updateResultsCounter(count, searchTerm, searchType = '') {
    const resultsCounter = document.getElementById('resultsCounter');
    const resultsText = document.getElementById('resultsText');
    
    if (!resultsCounter || !resultsText) return;
    
    if (count > 0 && searchTerm) {
        let message = `${count} produto${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''} para "${searchTerm}"`;
        
        if (searchType) {
            message += ` ${searchType}`;
        }
        
        resultsText.textContent = message;
        resultsCounter.style.display = 'flex';
    } else {
        resultsCounter.style.display = 'none';
    }
}

// Limpar busca
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const resultsCounter = document.getElementById('resultsCounter');
    
    if (searchInput) {
        searchInput.value = '';
        loadProducts(window.currentCategory || 'all');
    }
    
    if (resultsCounter) {
        resultsCounter.style.display = 'none';
    }
}

// Adicionar produto ao carrinho
function addProductToCart(productId) {
    if (typeof cart === 'undefined') {
        console.error('❌ Carrinho não disponível');
        return;
    }
    
    const product = (products || []).find(p => p.id == productId);
    if (!product) {
        console.error('❌ Produto não encontrado:', productId);
        return;
    }
    
    cart.addItem(product);
    showNotification(`✅ ${product.name} adicionado ao carrinho!`, 'success', true);
    updateCartCount();
    
    console.log('✅ Produto adicionado ao carrinho:', product.name);
}

// Funções auxiliares
function getCategoryDisplayName(category) {
    const categoryNames = {
        'acessorios_bike': 'Acessórios P/ Bike',
        'acessorios_tv': 'Acessórios P/ TV\'s',
        'adaptadores_eletricos': 'Adaptadores Elétricos',
        'ferramentas': 'Ferramentas',
        'brinquedos': 'Brinquedos',
        'higiene_pessoal': 'Higiene Pessoal',
        'papelaria': 'Papelaria',
        'pilhas_baterias': 'Pilhas & Baterias',
        'utilidades': 'Utilidades',
        'outros': 'Outros'
    };
    return categoryNames[category] || category;
}

function formatProductPrice(price) {
    if (price === 0 || !price) {
        return 'Consultar preço';
    }
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Alias para compatibilidade com cart.js
function formatPrice(price) {
    return formatProductPrice(price);
}

// Animação dos produtos
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(searchProducts, 300));
    }
    
    // Scroll suave para botão "voltar ao topo"
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
    }
}

// Funções do carrinho
function toggleCart() {
    if (typeof cart !== 'undefined' && typeof cart.toggle === 'function') {
        cart.toggle();
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement && typeof cart !== 'undefined') {
        cartCountElement.textContent = cart.getTotalItems() || 0;
    }
}

function clearCart() {
    if (typeof cart !== 'undefined' && typeof cart.clear === 'function') {
        cart.clear();
        updateCartCount();
        showNotification('🗑️ Carrinho limpo!', 'info');
    }
}

function checkout() {
    if (typeof cart === 'undefined') {
        showNotification('❌ Carrinho não disponível', 'error');
        return;
    }
    
    const items = cart.getItems();
    if (!items || items.length === 0) {
        showNotification('❌ Carrinho vazio!', 'error');
        return;
    }
    
    // Abrir modal de dados do cliente
    openCustomerModal();
}

// Notificações
function showNotification(message, type = 'info', clickable = false) {
    const notification = document.createElement('div');
    notification.className = `notification ${type} ${clickable ? 'clickable' : ''}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    if (clickable) {
        notification.addEventListener('click', toggleCart);
        notification.style.cursor = 'pointer';
        notification.title = 'Clique para abrir o carrinho';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Função debounce para otimizar performance
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

// Scroll para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Variáveis globais
window.currentCategory = 'all';
window.currentSearchTerm = '';

// Funções do Modal de Dados do Cliente
function openCustomerModal() {
    const modal = document.getElementById('customerModal');
    const overlay = document.getElementById('customerOverlay');
    
    if (modal && overlay) {
        modal.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Focar no primeiro campo
        setTimeout(() => {
            const firstInput = document.getElementById('cnpj');
            if (firstInput) firstInput.focus();
        }, 300);
    }
}

function closeCustomerModal() {
    const modal = document.getElementById('customerModal');
    const overlay = document.getElementById('customerOverlay');
    
    if (modal && overlay) {
        modal.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        // Limpar formulário
        const form = document.getElementById('customerForm');
        if (form) form.reset();
    }
}

function formatCNPJ(value) {
    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');
    
    // Aplica máscara do CNPJ
    if (value.length <= 14) {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }
    
    return value;
}

function formatTelefone(value) {
    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');
    
    // Aplica máscara do telefone
    if (value.length <= 11) {
        if (value.length <= 10) {
            value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
        } else {
            value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        }
    }
    
    return value;
}

function processCheckoutWithCustomerData(customerData) {
    console.log('🚀 Iniciando processamento do checkout...');
    console.log('👤 Dados do cliente:', customerData);
    
    if (typeof cart === 'undefined') {
        console.error('❌ Carrinho não disponível');
        showNotification('❌ Carrinho não disponível', 'error');
        return;
    }
    
    const items = cart.getItems();
    console.log('🛒 Itens do carrinho:', items);
    
    if (!items || items.length === 0) {
        console.error('❌ Carrinho vazio');
        showNotification('❌ Carrinho vazio!', 'error');
        return;
    }
    
    try {
        // Criar mensagem com formatação melhorada
        let message = `*NOVO ORÇAMENTO*

*DADOS DO CLIENTE:*
CNPJ: ${customerData.cnpj || 'Não informado'}
Empresa: ${customerData.razaoSocial || 'Não informado'}
Responsável: ${customerData.nomeResponsavel || 'Não informado'}
Email: ${customerData.email || 'Não informado'}
Telefone: ${customerData.telefone || 'Não informado'}`;
        
        if (customerData.nomeVendedor && customerData.nomeVendedor.trim()) {
            message += `
Vendedor: ${customerData.nomeVendedor}`;
        }
        
        message += `

*PRODUTOS:*`;
        
        // Incluir TODOS os produtos sem limitação
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const quantity = Number(item.quantity) || 1;
            message += `

${i + 1}. ${item.name}
Código: ${item.codBarras || 'N/A'}
Quantidade: ${quantity}`;
        }
        
        message += `

Gostaria de consultar este orçamento!`;
        
        console.log('� Mensagem gerada:', message);
        console.log('📏 Tamanho da mensagem:', message.length, 'caracteres');
        
        // Gerar URL do WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
        
        console.log('🔗 URL do WhatsApp:', whatsappURL);
        console.log('📏 Tamanho da URL:', whatsappURL.length, 'caracteres');
        
        // Sempre abrir com todos os produtos - sem limitações
        window.open(whatsappURL, '_blank');
        console.log('✅ WhatsApp aberto com TODOS os produtos do pedido');
        
        // Fechar modal
        closeCustomerModal();
        showNotification('✅ Redirecionando para WhatsApp...', 'success');
        
        // Perguntar se quer limpar carrinho
        setTimeout(() => {
            if (confirm('Deseja limpar o carrinho após o envio?')) {
                cart.clear();
                updateCartCount();
                console.log('🗑️ Carrinho limpo');
            }
        }, 2000);
        
    } catch (error) {
        console.error('❌ Erro ao processar checkout:', error);
        showNotification('❌ Erro ao gerar mensagem. Tente novamente.', 'error');
        
        // Fallback: abrir WhatsApp sem mensagem
        window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}`, '_blank');
    }
}

// Event Listeners para o Modal de Cliente
document.addEventListener('DOMContentLoaded', function() {
    // Máscara para CNPJ
    const cnpjInput = document.getElementById('cnpj');
    if (cnpjInput) {
        cnpjInput.addEventListener('input', function(e) {
            e.target.value = formatCNPJ(e.target.value);
        });
    }
    
    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            e.target.value = formatTelefone(e.target.value);
        });
    }
    
    // Submit do formulário
    const customerForm = document.getElementById('customerForm');
    if (customerForm) {
        console.log('✅ Formulário de cliente encontrado');
        
        customerForm.addEventListener('submit', function(e) {
            console.log('🚀 Formulário submetido!');
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = new FormData(e.target);
            const customerData = {
                cnpj: formData.get('cnpj'),
                razaoSocial: formData.get('razaoSocial'),
                nomeResponsavel: formData.get('nomeResponsavel'),
                email: formData.get('email'),
                telefone: formData.get('telefone'),
                nomeVendedor: formData.get('nomeVendedor')
            };
            
            console.log('📋 Dados coletados do formulário:', customerData);
            
            // Validar campos obrigatórios
            if (!customerData.cnpj || !customerData.razaoSocial || !customerData.nomeResponsavel || 
                !customerData.email || !customerData.telefone) {
                console.error('❌ Campos obrigatórios não preenchidos:', {
                    cnpj: !!customerData.cnpj,
                    razaoSocial: !!customerData.razaoSocial,
                    nomeResponsavel: !!customerData.nomeResponsavel,
                    email: !!customerData.email,
                    telefone: !!customerData.telefone
                });
                showNotification('❌ Por favor, preencha todos os campos obrigatórios', 'error');
                return;
            }
            
            // Validar e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(customerData.email)) {
                console.error('❌ E-mail inválido:', customerData.email);
                showNotification('❌ Por favor, insira um e-mail válido', 'error');
                return;
            }
            
            console.log('✅ Dados validados, processando checkout...');
            
            // Processar checkout
            processCheckoutWithCustomerData(customerData);
        });
    } else {
        console.error('❌ Formulário de cliente não encontrado!');
    }
});

console.log('📄 main.js carregado com sucesso!');
