// Função auxiliar para formatar preços
function formatPrice(price) {
    if (price === 0 || !price) {
        return 'Consultar preço';
    }
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função auxiliar para buscar produto por ID
function getProductById(id) {
    if (typeof products !== 'undefined' && Array.isArray(products)) {
        return products.find(product => product.id == id);
    }
    return null;
}

// Gerenciamento do carrinho de compras
class ShoppingCart {
    constructor() {
        this.items = this.loadFromStorage();
        this.updateCartDisplay();
    }

    // Adicionar item ao carrinho
    addItem(product, quantity = 1) {
        // Se recebeu um ID, buscar o produto
        if (typeof product === 'number' || typeof product === 'string') {
            const productObj = getProductById(parseInt(product));
            if (!productObj) {
                console.error('Produto não encontrado:', product);
                return;
            }
            product = productObj;
        }

        // Verificar se é um objeto produto válido
        if (!product || !product.id || !product.name || typeof product.price !== 'number') {
            console.error('Produto inválido:', product);
            return;
        }

        const existingItem = this.items.find(item => item.id == product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image || '📦',
                quantity: quantity
            });
        }

        this.saveToStorage();
        this.updateCartDisplay();
        this.showAddToCartAnimation();
    }

    // Remover item do carrinho
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
        this.updateCartDisplay();
    }

    // Atualizar quantidade
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveToStorage();
                this.updateCartDisplay();
            }
        }
    }

    // Limpar carrinho
    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateCartDisplay();
    }

    // Obter total de itens
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Obter total do valor
    getTotalValue() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Obter itens do carrinho (compatibilidade API)
    getItems() {
        return this.items;
    }

    // Obter total (compatibilidade API)
    getTotal() {
        return this.getTotalValue();
    }

    // Salvar no localStorage
    saveToStorage() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.items));
    }

    // Carregar do localStorage
    loadFromStorage() {
        const saved = localStorage.getItem('shoppingCart');
        return saved ? JSON.parse(saved) : [];
    }

    // Atualizar display do carrinho
    updateCartDisplay() {
        this.updateCartCount();
        this.updateCartItems();
        this.updateCartTotal();
    }

    // Atualizar contador do carrinho
    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.getTotalItems();
        }
    }

    // Atualizar itens do carrinho
    updateCartItems() {
        const cartItems = document.getElementById('cartItems');
        if (!cartItems) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Seu carrinho está vazio</p>
                </div>
            `;
            return;
        }

        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.image}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-item" onclick="cart.removeItem(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Atualizar total do carrinho
    updateCartTotal() {
        const cartTotal = document.getElementById('cartTotal');
        if (cartTotal) {
            cartTotal.textContent = this.getTotalValue().toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
    }

    // Animação de adicionar ao carrinho
    showAddToCartAnimation() {
        const cartBtn = document.querySelector('.cart-btn');
        if (cartBtn) {
            cartBtn.style.transform = 'scale(1.1)';
            cartBtn.style.background = 'rgba(40, 167, 69, 0.3)';
            
            setTimeout(() => {
                cartBtn.style.transform = '';
                cartBtn.style.background = '';
            }, 200);
        }
    }

    // Gerar mensagem para WhatsApp
    generateWhatsAppMessage() {
        if (this.items.length === 0) {
            alert('Seu carrinho está vazio!');
            return '';
        }

        let message = "🛒 *NOVO PEDIDO DA LOJA ONLINE*\n\n";
        message += "📋 *ITENS DO PEDIDO:*\n";
        
        this.items.forEach((item, index) => {
            message += `${index + 1}. ${item.name}\n`;
            message += `   💰 Valor unitário: ${formatPrice(item.price)}\n`;
            message += `   📦 Quantidade: ${item.quantity}\n`;
            message += `   💵 Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
        });

        message += `💰 *VALOR TOTAL: ${formatPrice(this.getTotalValue())}*\n\n`;
        message += "📞 Gostaria de finalizar este pedido!\n";
        message += "🚚 Por favor, me informe sobre entrega e formas de pagamento.";

        return encodeURIComponent(message);
    }

    // Toggle do modal do carrinho
    toggle() {
        const cartModal = document.getElementById('cartModal');
        const overlay = document.getElementById('overlay');
        
        if (!cartModal || !overlay) {
            console.error('❌ Elementos do modal do carrinho não encontrados');
            return;
        }
        
        const isActive = cartModal.classList.contains('active');
        
        if (isActive) {
            // Fechar carrinho
            cartModal.classList.remove('active');
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            // Abrir carrinho
            this.updateCartDisplay(); // Atualizar dados antes de mostrar
            cartModal.classList.add('active');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Abrir carrinho
    open() {
        const cartModal = document.getElementById('cartModal');
        const overlay = document.getElementById('overlay');
        
        if (cartModal && overlay) {
            this.updateCartDisplay();
            cartModal.classList.add('active');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Fechar carrinho
    close() {
        const cartModal = document.getElementById('cartModal');
        const overlay = document.getElementById('overlay');
        
        if (cartModal && overlay) {
            cartModal.classList.remove('active');
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

// Instância global do carrinho
const cart = new ShoppingCart();
