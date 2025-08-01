// Função corrigida para WhatsApp
function processCheckoutWithCustomerData(customerData) {
    console.log('🚀 Iniciando processamento do checkout...');
    
    if (typeof cart === 'undefined') {
        console.error('❌ Carrinho não disponível');
        showNotification('❌ Carrinho não disponível', 'error');
        return;
    }
    
    const items = cart.getItems();
    if (!items || items.length === 0) {
        console.error('❌ Carrinho vazio');
        showNotification('❌ Carrinho vazio!', 'error');
        return;
    }
    
    try {
        // Criar mensagem CURTA para garantir que funcione
        let message = `NOVO ORCAMENTO DADOS DO CLIENTE: CNPJ: ${customerData.cnpj} Empresa: ${customerData.razaoSocial} Responsavel: ${customerData.nomeResponsavel} Email: ${customerData.email} Telefone: ${customerData.telefone}`;
        
        if (customerData.nomeVendedor && customerData.nomeVendedor.trim()) {
            message += ` Vendedor: ${customerData.nomeVendedor}`;
        }
        
        message += ` PRODUTOS:`;
        
        // Adicionar apenas os primeiros 3 produtos para não ficar muito longo
        const maxItems = Math.min(items.length, 3);
        for (let i = 0; i < maxItems; i++) {
            const item = items[i];
            const quantity = Number(item.quantity) || 1;
            message += ` ${i + 1}. ${item.name} Código: ${item.codBarras || 'N/A'} Quantidade: ${quantity} Valor: Consultar`;
        }
        
        if (items.length > 3) {
            message += ` +${items.length - 3} outros produtos`;
        }
        
        message += ` Gostaria de consultar este Orçamento!`;
        
        console.log('📝 Mensagem final:', message);
        console.log('📏 Tamanho:', message.length, 'caracteres');
        
        // Usar método mais compatível
        const numero = STORE_CONFIG.whatsappNumber;
        const mensagemCodificada = encodeURIComponent(message);
        const url = `https://wa.me/${numero}?text=${mensagemCodificada}`;
        
        console.log('🌐 URL:', url);
        console.log('📏 Tamanho URL:', url.length);
        
        // Abrir WhatsApp
        window.open(url, '_blank');
        
        // Fechar modal
        closeCustomerModal();
        showNotification('✅ Redirecionando para WhatsApp...', 'success');
        
        // Perguntar se quer limpar carrinho
        setTimeout(() => {
            if (confirm('Deseja limpar o carrinho após o envio?')) {
                cart.clear();
                updateCartCount();
            }
        }, 2000);
        
    } catch (error) {
        console.error('❌ Erro:', error);
        showNotification('❌ Erro ao gerar mensagem. Tente novamente.', 'error');
        window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}`, '_blank');
    }
}
