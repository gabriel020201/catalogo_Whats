# 🛒 Loja Online com Banco de Dados

## 📋 Visão Geral

Sistema completo de e-commerce com:
- ✅ **Backend Node.js + SQLite**
- ✅ **Controle de estoque em tempo real**
- ✅ **API REST para gerenciamento**
- ✅ **Frontend integrado com banco**
- ✅ **Verificação de estoque antes da compra**
- ✅ **Reserva automática de produtos**

## 🚀 Instalação e Configuração

### 1. **Instalar Dependências**
```bash
cd backend
npm install
```

### 2. **Inicializar Banco de Dados**
```bash
npm run init-db
```

### 3. **Iniciar Servidor**
```bash
npm start
# ou para desenvolvimento:
npm run dev
```

### 4. **Acessar Sistema**
- **Frontend**: http://localhost:3001
- **API**: http://localhost:3001/api

## 📊 Estrutura do Banco

### **Tabela: products**
```sql
- id (INTEGER PRIMARY KEY)
- name (TEXT) - Nome do produto
- description (TEXT) - Descrição
- price (REAL) - Preço
- category (TEXT) - Categoria
- image (TEXT) - Ícone HTML
- stock_quantity (INTEGER) - Quantidade em estoque
- min_stock (INTEGER) - Estoque mínimo
- active (BOOLEAN) - Produto ativo
- created_at (DATETIME)
- updated_at (DATETIME)
```

### **Tabela: orders**
```sql
- id (INTEGER PRIMARY KEY)
- customer_name (TEXT)
- customer_phone (TEXT)
- total_value (REAL)
- status (TEXT) - pending, completed, cancelled
- created_at (DATETIME)
```

### **Tabela: order_items**
```sql
- id (INTEGER PRIMARY KEY)
- order_id (INTEGER) - FK para orders
- product_id (INTEGER) - FK para products
- quantity (INTEGER)
- unit_price (REAL)
```

## 🔗 API Endpoints

### **Produtos**
- `GET /api/products` - Listar todos produtos
- `GET /api/products/:id` - Buscar produto por ID
- `POST /api/products/check-stock` - Verificar estoque

### **Pedidos**
- `POST /api/orders` - Criar pedido (reserva estoque)
- `GET /api/orders` - Listar pedidos

### **Relatórios**
- `GET /api/reports/low-stock` - Produtos com estoque baixo
- `GET /api/reports/stats` - Estatísticas gerais

### **Admin**
- `POST /api/admin/products` - Adicionar produto
- `PUT /api/admin/products/:id/stock` - Atualizar estoque

## 🎯 Funcionalidades Principais

### **1. Controle de Estoque Real**
- ✅ Verificação em tempo real
- ✅ Reserva automática no pedido
- ✅ Alertas de estoque baixo
- ✅ Impedimento de venda sem estoque

### **2. Processo de Compra**
1. Cliente adiciona itens ao carrinho
2. Sistema verifica estoque disponível
3. Cliente informa dados de contato
4. Sistema reserva produtos no banco
5. Pedido é enviado via WhatsApp
6. Estoque é automaticamente atualizado

### **3. Segurança e Performance**
- ✅ Transações de banco de dados
- ✅ Rate limiting (100 req/15min)
- ✅ Validação de dados
- ✅ Tratamento de erros
- ✅ CORS configurado

## 📱 Como Usar

### **Frontend (Cliente)**
1. Acesse `http://localhost:3001`
2. Navegue pelos produtos (estoque real)
3. Adicione itens ao carrinho
4. Finalize o pedido com seus dados
5. Pedido é enviado via WhatsApp

### **Admin (Gerenciamento)**
Use a API para gerenciar produtos:

```javascript
// Adicionar produto
fetch('/api/admin/products', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: 'Novo Produto',
        price: 99.90,
        category: 'eletronicos',
        stock_quantity: 10
    })
});

// Atualizar estoque
fetch('/api/admin/products/1/stock', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({stock_quantity: 25})
});
```

## 🔧 Personalização

### **Configurar WhatsApp**
Edite em `main-api.js`:
```javascript
const STORE_CONFIG = {
    whatsappNumber: '5511999999999', // SEU NÚMERO
    storeName: 'Sua Loja',
    welcomeMessage: 'Bem-vindo!'
};
```

### **Adicionar Produtos**
Execute o script `init-database.js` ou use a API

### **Customizar Frontend**
- `index-api.html` - Estrutura HTML
- `styles.css` + `styles-api.css` - Estilos
- `main-api.js` - Lógica do frontend

## 📈 Monitoramento

### **Verificar Estoque Baixo**
```bash
curl http://localhost:3001/api/reports/low-stock
```

### **Ver Estatísticas**
```bash
curl http://localhost:3001/api/reports/stats
```

### **Listar Pedidos**
```bash
curl http://localhost:3001/api/orders
```

## 🐛 Troubleshooting

### **Erro de Conexão**
- Verifique se o servidor está rodando
- Confirme a porta 3001 está livre
- Verifique logs no terminal

### **Produto Não Carrega**
- Verifique se `init-database.js` foi executado
- Confirme se há produtos ativos no banco

### **Erro de Transação**
- Banco SQLite pode estar bloqueado
- Reinicie o servidor
- Verifique permissões de arquivo

## 🚀 Próximos Passos

1. **Interface Admin** - Criar painel de administração
2. **Autenticação** - Sistema de login para admin
3. **Imagens Reais** - Upload de fotos dos produtos
4. **Relatórios** - Dashboard com gráficos
5. **Notificações** - Email/SMS para pedidos
6. **Integração Pagamento** - PIX, cartão, etc.

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do servidor
2. Confirme se todas as dependências estão instaladas
3. Teste a API diretamente com curl/Postman
4. Verifique se o banco foi inicializado corretamente

---

✅ **Sistema pronto para produção com estoque real!** 🎯
