// Base de dados dos produtos
const products = [
    // Eletrônicos
    {
        id: 1,
        name: "Smartphone Galaxy",
        category: "eletronicos",
        price: 899.99,
        image: "📱",
        description: "Smartphone com 128GB, câmera tripla e tela de 6.1 polegadas"
    },
    {
        id: 2,
        name: "Notebook Gamer",
        category: "eletronicos", 
        price: 2499.99,
        image: "💻",
        description: "Notebook gamer com placa de vídeo dedicada, 16GB RAM e SSD 512GB"
    },
    {
        id: 3,
        name: "Fone Bluetooth",
        category: "eletronicos",
        price: 199.99,
        image: "🎧",
        description: "Fone sem fio com cancelamento de ruído e bateria de 30h"
    },
    {
        id: 4,
        name: "Smart TV 55\"",
        category: "eletronicos",
        price: 1899.99,
        image: "📺",
        description: "Smart TV 4K HDR com Android TV e controle por voz"
    },
    {
        id: 5,
        name: "Console Gamer",
        category: "eletronicos",
        price: 2799.99,
        image: "🎮",
        description: "Console de última geração com 1TB de armazenamento"
    },

    // Roupas
    {
        id: 6,
        name: "Camiseta Premium",
        category: "roupas",
        price: 79.99,
        image: "👕",
        description: "Camiseta 100% algodão com estampa exclusiva, disponível em várias cores"
    },
    {
        id: 7,
        name: "Jeans Skinny",
        category: "roupas",
        price: 159.99,
        image: "👖",
        description: "Calça jeans skinny com elastano, corte moderno e confortável"
    },
    {
        id: 8,
        name: "Vestido Elegante",
        category: "roupas",
        price: 249.99,
        image: "👗",
        description: "Vestido midi elegante para ocasiões especiais, tecido premium"
    },
    {
        id: 9,
        name: "Tênis Esportivo",
        category: "roupas",
        price: 299.99,
        image: "👟",
        description: "Tênis esportivo com tecnologia de amortecimento e design moderno"
    },
    {
        id: 10,
        name: "Jaqueta de Couro",
        category: "roupas",
        price: 499.99,
        image: "🧥",
        description: "Jaqueta de couro legítimo, forro interno e design clássico"
    },

    // Casa
    {
        id: 11,
        name: "Sofá 3 Lugares",
        category: "casa",
        price: 1299.99,
        image: "🛋️",
        description: "Sofá confortável com 3 lugares, estofado em tecido premium"
    },
    {
        id: 12,
        name: "Mesa de Jantar",
        category: "casa",
        price: 899.99,
        image: "🪑",
        description: "Mesa de jantar para 6 pessoas em madeira maciça"
    },
    {
        id: 13,
        name: "Luminária LED",
        category: "casa",
        price: 149.99,
        image: "💡",
        description: "Luminária LED inteligente com controle por app e várias cores"
    },
    {
        id: 14,
        name: "Conjunto de Panelas",
        category: "casa",
        price: 329.99,
        image: "🍳",
        description: "Conjunto de panelas antiaderentes com 5 peças e tampas"
    },
    {
        id: 15,
        name: "Aspirador Robô",
        category: "casa",
        price: 899.99,
        image: "🤖",
        description: "Aspirador robô inteligente com mapeamento e controle por app"
    },

    // Esportes
    {
        id: 16,
        name: "Bicicleta Mountain",
        category: "esportes",
        price: 1199.99,
        image: "🚴",
        description: "Bicicleta mountain bike aro 29 com 21 marchas e suspensão"
    },
    {
        id: 17,
        name: "Kit Halteres",
        category: "esportes",
        price: 299.99,
        image: "🏋️",
        description: "Kit completo de halteres ajustáveis de 5kg a 30kg"
    },
    {
        id: 18,
        name: "Bola de Futebol",
        category: "esportes",
        price: 89.99,
        image: "⚽",
        description: "Bola oficial de futebol, tamanho padrão FIFA"
    },
    {
        id: 19,
        name: "Esteira Dobrável",
        category: "esportes",
        price: 1599.99,
        image: "🏃",
        description: "Esteira elétrica dobrável com 12 programas e monitor cardíaco"
    },
    {
        id: 20,
        name: "Prancha de Surf",
        category: "esportes",
        price: 799.99,
        image: "🏄",
        description: "Prancha de surf profissional 6'2\" para ondas médias e grandes"
    }
];

// Função para obter produtos por categoria
function getProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Função para obter produto por ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Função para formatar preço
function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
