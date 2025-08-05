// Produtos do catálogo Sebalde Life Ferramentas
// ARQUIVO LIMPO SEM DUPLICADOS - 06/08/2025
// Total de produtos: 372
// Categorias: 12
// IMAGENS: 383 disponíveis na pasta imagens_produtos/
// PREÇOS: Placeholders (0) - adicionar manualmente

const products = [
    {
        id: 9601,
        name: "KIT DE REPAROS PARA PNEU DE BICICLETA C/ 8 PEÇAS SQ",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p2_2.png",
        referencia: "SQ-3266",
        codBarras: "7899441505099",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 192 PEÇAS"
    },

    {
        id: 141401,
        name: "LUZ DE LED PARA BICICLETA/BIKE",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p2_4.png",
        referencia: "XH-X33",
        codBarras: "7893344556677",
        ncm: "85121000"
    },

    {
        id: 144401,
        name: "TRAVA PARA BICICLETA 12MM X 800MM NAPOLES",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p2_6.png",
        referencia: "NA-8012",
        codBarras: "7896825440816",
        ncm: "83011000"
    },

    {
        id: 173201,
        name: "TRAVA PARA BICICLETA 12MM X 80CM - GADAN",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p2_8.png",
        referencia: "GD-3011",
        codBarras: "7891230003021",
        ncm: "83011000",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 115101,
        name: "TRAVA PARA BICICLETA 15MM X 800MM",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p3_2.png",
        referencia: "17009",
        codBarras: "6955108042145",
        ncm: "83011000"
    },

    {
        id: 126401,
        name: "TRAVA PARA BICICLETA 6MM X 650MM",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p3_4.png",
        referencia: "N447",
        codBarras: "7898461114472",
        ncm: "83011000"
    },

    {
        id: 173301,
        name: "TRAVA PARA BICICLETA 8MM X 650MM - GADAN",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p3_6.png",
        referencia: "GD-3013",
        codBarras: "7891230003045",
        ncm: "83011000",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 173101,
        name: "TRAVA PARA BICICLETA E MOT 15MM X 80CM - GADAN",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p3_8.png",
        referencia: "GD-3012",
        codBarras: "7891230003038",
        ncm: "83011000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 196801,
        name: "TRAVA PARA BIKE E MOTO 18MM X 80CM - GADAN",
        category: "acessorios_bike",
        price: 0,
        image: "imagens_produtos/produto_p4_2.png",
        referencia: "GD-3630",
        codBarras: "7898748661118",
        ncm: "83011000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    // ACESSÓRIOS P/ TV'S (MANTIDOS)
    {
        id: 177301,
        name: "ANTENA P/ TV DIGITAL COM BASE IMA E CABO DE 4.3M - GADAN",
        category: "acessorios_tv",
        price: 0,
        image: "imagens_produtos/produto_p5_2.png",
        referencia: "GD-3285",
        codBarras: "7898748660395",
        ncm: "85291090",
        observacoes: "CAIXA MASTER 50"
    },

    {
        id: 98201,
        name: "ANTENA P/ TV DIGITAL IMA EXBOM AN-I3540B",
        category: "acessorios_tv",
        price: 0,
        image: "imagens_produtos/produto_p5_4.png",
        referencia: "AN-I3540B",
        codBarras: "7899718702541",
        ncm: "85291090",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 11701,
        name: "MINI ANTENA P/ TV DIGITAL COM BASE IMA - EXBOM",
        category: "acessorios_tv",
        price: 0,
        image: "imagens_produtos/produto_p5_6.png",
        referencia: "AN-S10",
        codBarras: "7899718701803",
        ncm: "85291090",
        observacoes: "CAIXA MASTER 500 PEÇAS"
    },

    {
        id: 133501,
        name: "MINI ANTENA P/ TV DIGITAL COM BASE IMA - IDEA",
        category: "acessorios_tv",
        price: 0,
        image: "imagens_produtos/produto_p5_8.png",
        referencia: "ID-3047A",
        codBarras: "7898505876182",
        ncm: "85291090",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    // ADAPTADORES ELÉTRICOS (COMPLETO DO CATÁLOGO)
    {
        id: 151801,
        name: "BOCAL E27 C/ RABICHO PRETO",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p6_2.png",
        referencia: "8225",
        codBarras: "7899095457904",
        ncm: "85366100"
    },

    {
        id: 151901,
        name: "BOCAL E27 C/ TOMADA MACHO",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p6_4.png",
        referencia: "8228",
        codBarras: "7899095457935",
        ncm: "85366100"
    },

    {
        id: 176701,
        name: "CJ 1 INTERRUPTOR - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p6_6.png",
        referencia: "1420001",
        codBarras: "7898629660742",
        ncm: "85366990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 176101,
        name: "CJ 1 INTER + 1 TOMADA - 10A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p6_8.png",
        referencia: "1420110",
        codBarras: "7898629660803",
        ncm: "85366990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 176301,
        name: "CJ 1 TOMADA - 10A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p7_2.png",
        referencia: "1321001",
        codBarras: "7898629660827",
        ncm: "85366990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 176001,
        name: "CJ 1 TOMADA - 20A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p7_2.png",
        referencia: "1322001",
        codBarras: "7898629660780",
        ncm: "85366990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 176201,
        name: "CJ 2 INTER + 1 TOMADA - 10A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p7_8.png",
        referencia: "1420210",
        codBarras: "7898629660810",
        ncm: "85366990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 176601,
        name: "CJ 2 INTERRUPTORES - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p8_2.png",
        referencia: "1420021",
        codBarras: "7898629660759",
        ncm: "85366990"
    },

    {
        id: 176401,
        name: "CJ 2 TOMADAS - 10A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p8_4.png",
        referencia: "1321002",
        codBarras: "7898629660797",
        ncm: "85366990"
    },

    {
        id: 175901,
        name: "CJ 2 TOMADAS - 20A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p8_4.png",
        referencia: "1322002",
        codBarras: "7898629660858",
        ncm: "85366990"
    },

    {
        id: 176501,
        name: "CJ 3 INTERRUPTORES - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p8_6.png",
        referencia: "1420031",
        codBarras: "7898629660766",
        ncm: "85366990"
    },

    {
        id: 175801,
        name: "ESPELHO CEGO - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p8_8.png",
        referencia: "1920000",
        codBarras: "7898629663248",
        ncm: "85366990"
    },

    {
        id: 175701,
        name: "ESPELHO COM FURO - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p9_2.png",
        referencia: "1920001",
        codBarras: "7898629663255",
        ncm: "85366990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 148601,
        name: "EXTENSÃO JETCON 10 METROS",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p9_4.png",
        referencia: "EX10PL",
        codBarras: "7898969329118",
        ncm: "85444200"
    },

    {
        id: 148301,
        name: "EXTENSÃO JETCON 2 METROS",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p9_6.png",
        referencia: "EX2PL",
        codBarras: "7898969329071",
        ncm: "85444200",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 148401,
        name: "EXTENSÃO JETCON 3 METROS",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p9_8.png",
        referencia: "EX3PL",
        codBarras: "7898969329088",
        ncm: "85444200"
    },

    {
        id: 148501,
        name: "EXTENSÃO JETCON 5 METROS",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p10_2.png",
        referencia: "EX5PL",
        codBarras: "7898969329095",
        ncm: "85444200",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 85201,
        name: "FILTRO DE LINHA 3 SAIDAS",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p10_4.png",
        referencia: "GM-03",
        codBarras: "7898958277277",
        ncm: "85444200"
    },

    {
        id: 73,
        name: "FILTRO DE LINHA 4 SAIDAS",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p10_6.png",
        referencia: "GM-04",
        codBarras: "7898958277284",
        ncm: "85444200"
    },

    {
        id: 85301,
        name: "FILTRO DE LINHA 5 SAIDAS",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p10_8.png",
        referencia: "GM-05",
        codBarras: "7898958277291",
        ncm: "85444200"
    },

    {
        id: 74,
        name: "FILTRO DE LINHA 6 SAIDAS",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p11_2.png",
        referencia: "GM-06",
        codBarras: "7898958277307",
        ncm: "85444200"
    },

    {
        id: 180901,
        name: "PINO FEMEA 2P 10A 250V - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p11_4.png",
        referencia: "1121117",
        codBarras: "2010000013243",
        ncm: "85369010",
        observacoes: "CAIXA MASTER COM 500 PEÇAS"
    },

    {
        id: 137401,
        name: "PINO FEMEA 2P 10A 250V - PRETO",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p11_6.png",
        referencia: "F2P10AP",
        codBarras: "2010000008300",
        ncm: "85369010"
    },

    {
        id: 181001,
        name: "PINO FEMEA 2P 10A 250V - PRETO - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p11_8.png",
        referencia: "1101116",
        codBarras: "2010000013250",
        ncm: "85369010",
        observacoes: "CAIXA MASTER COM 500 PEÇAS"
    },

    {
        id: 181101,
        name: "PINO MACHO 2P 10A 250V - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p12_2.png",
        referencia: "1122034",
        codBarras: "2010000013267",
        ncm: "85369010",
        observacoes: "CAIXA MASTER COM 1000 PEÇAS"
    },

    {
        id: 181201,
        name: "PINO MACHO 2P 10A 250V - PRETO - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p12_4.png",
        referencia: "1102036",
        codBarras: "2010000013274",
        ncm: "85369010",
        observacoes: "CAIXA MASTER C/ 1000 PEÇAS"
    },

    {
        id: 177101,
        name: "PINO RETO BIPOLAR 10A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p12_6.png",
        referencia: "1212053",
        codBarras: "2010000012819",
        ncm: "85366990"
    },

    {
        id: 177001,
        name: "PINO RETO TRIPOLAR 10A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p12_8.png",
        referencia: "1220061",
        codBarras: "2010000012796",
        ncm: "85366990"
    },

    {
        id: 176801,
        name: "PINO T BIPOLAR 10A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p13_2.png",
        referencia: "1222020",
        codBarras: "2010000012772",
        ncm: "85366990"
    },

    {
        id: 176901,
        name: "PINO T TRIPOLAR 10A - FLP",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p13_4.png",
        referencia: "1222027",
        codBarras: "2010000012789",
        ncm: "85366990"
    },

    {
        id: 53101,
        name: "PLAFON BRANCO PARA LÂMPADA DE ATÉ 100W - 250V",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p13_6.png",
        referencia: "BC100W",
        codBarras: "7898954175140",
        ncm: "85366100"
    },

    {
        id: 98101,
        name: "PLAFON PRETO PARA LÂMPADA DE ATÉ 100W - 250V",
        category: "adaptadores_eletricos",
        price: 0,
        image: "imagens_produtos/produto_p13_8.png",
        referencia: "PLAF-PR",
        codBarras: "7898954175508",
        ncm: "85366100"
    },

    // BRINQUEDOS
    {
        id: 181701,
        name: "BARALHO 2 JOGOS PLÁSTICO - GADAN",
        category: "brinquedos",
        price: 0,
        image: "imagens_produtos/produto_p14_2.png",
        referencia: "GD-3280",
        codBarras: "7898748660388",
        ncm: "95049090",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    // FERRAMENTAS
    {
        id: 159301,
        name: "ALICATE BOMBA D'AGUA 10\" SPARTA PROFISSIONAL",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p15_2.png",
        referencia: "1571855",
        codBarras: "7899612795434",
        ncm: "82032010",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 174401,
        name: "ALICATE DE BICO MEIA CANA 6\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p15_4.png",
        referencia: "GD-3015",
        codBarras: "7891230003069",
        ncm: "82032010",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 115201,
        name: "ALICATE DE CRIMPAR 3 EM 1",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p15_6.png",
        referencia: "COD.1003",
        codBarras: "2993500205908",
        ncm: "82032010"
    },

    {
        id: 149801,
        name: "ALICATE DE PRESSÃO 10\"",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p15_8.png",
        referencia: "ID-4565A",
        codBarras: "7898505888949",
        ncm: "82032010"
    },

    {
        id: 174201,
        name: "ALICATE DE PRESSÃO 10\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p16_2.png",
        referencia: "GD-3017",
        codBarras: "7891230003083",
        ncm: "82032010",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 115901,
        name: "ALICATE DE PRESSÃO EMBORRACHADO",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p16_4.png",
        referencia: "TL35980",
        codBarras: "7899956671771",
        ncm: "82032010",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 174101,
        name: "ALICATE DE PRESSÃO EMBORRACHADO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p16_6.png",
        referencia: "GD-3018",
        codBarras: "7891230003090",
        ncm: "82032010",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 189801,
        name: "KIT DE ALICATES ESSENCIAIS - BICO, CORTE E UNIVERSAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p16_8.png",
        referencia: "GD-3365",
        codBarras: "7898748660616",
        ncm: "82032010",
        observacoes: "CAIXA MASTER 24 KITS"
    },

    {
        id: 175301,
        name: "BOMBA DE AR DE PÉ PORTÁTIL",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p17_2.png",
        referencia: "HM-101",
        codBarras: "7898684171146",
        ncm: "84142000",
        observacoes: "CAIXA MASTER 50 PEÇAS"
    },

    {
        id: 201501,
        name: "BOMBA DE AR DE PÉ PORTÁTIL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p17_4.png",
        referencia: "GD-4940",
        codBarras: "7898748661590",
        ncm: "84142000",
        observacoes: "CAIXA MASTER 50 PEÇAS"
    },

    {
        id: 177601,
        name: "BOMBA DE AR MANUAL 30CM - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p17_6.png",
        referencia: "GD-3175",
        codBarras: "7898748660180",
        ncm: "84142000",
        observacoes: "CAIXA MASTER 72 PCS"
    },

    {
        id: 145301,
        name: "BOMBA DE AR MANUAL 47CM YARA",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p17_8.png",
        referencia: "YA-9134",
        codBarras: "7898959579134",
        ncm: "84142000",
        observacoes: "CX COM 50 PCS"
    },

    {
        id: 58501,
        name: "ALICATE PARA ILHOSES 6\" C/ 100 ILHÓSES",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p18_2.png",
        referencia: "MZ-54017",
        codBarras: "8430422540174",
        ncm: "82032010",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 179801,
        name: "CATRACA REVERSÍVEL 1/2\" 8 A 24 MM COM 12 PEÇAS PROFISSIONAL- GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p18_4.png",
        referencia: "GD-3205",
        codBarras: "7898748660241",
        ncm: "82042000",
        observacoes: "CAIXA MASTER 20 PEÇAS"
    },

    {
        id: 172601,
        name: "CHAVE ALLEN C/ 9 PEÇAS (GRANDE) - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p18_6.png",
        referencia: "GD-3056",
        codBarras: "7891230008026",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 60 PCS"
    },

    {
        id: 172501,
        name: "CHAVE ALLEN C/ 9 PEÇAS (MÉDIA) - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p18_8.png",
        referencia: "GD-3055",
        codBarras: "7891230008019",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 60 PCS"
    },

    {
        id: 172401,
        name: "CHAVE ALLEN C/ 9 PEÇAS (PEQUENA) - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p19_2.png",
        referencia: "GD-3054",
        codBarras: "7891230007098",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 72 PCS"
    },

    {
        id: 152201,
        name: "CHAVE BIELA TIPO L COM FURO 2 BOCAS 16X16MM",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p19_4.png",
        referencia: "2616",
        codBarras: "7899095405561",
        ncm: "82041100"
    },

    {
        id: 158901,
        name: "CHAVE BIELA TIPO L COM FURO 2 BOCAS 18X18MM",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p19_6.png",
        referencia: "2618",
        codBarras: "0736532122438",
        ncm: "82041100"
    },

    {
        id: 152801,
        name: "CHAVE BIELA TIPO L COM FURO 2 BOCAS 8X8MM",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p19_8.png",
        referencia: "2608",
        codBarras: "7899095408425",
        ncm: "82041100"
    },

    {
        id: 152701,
        name: "CHAVE BIELA TIPO L COM FURO 2 BOCAS 9X9MM",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p20_2.png",
        referencia: "2609",
        codBarras: "7899095405554",
        ncm: "82041100"
    },

    {
        id: 197001,
        name: "CHAVE CRUZETA 10-12-14-17MM -GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p20_4.png",
        referencia: "GD-3705",
        codBarras: "7898748661262",
        ncm: "82041100",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 196901,
        name: "CHAVE CRUZETA 11-13-14-17MM -GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p20_6.png",
        referencia: "GD-3700",
        codBarras: "7898748661255",
        ncm: "82041100",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 196401,
        name: "CHAVE DE CORRENTE 12\" - SACA FILTRO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p20_8.png",
        referencia: "GD-3485",
        codBarras: "7898748660845",
        ncm: "82041200",
        observacoes: "CAIXA MASTER 50 PEÇAS"
    },

    {
        id: 191101,
        name: "CHAVE INGLESA 10\" PROFISSIONAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p21_2.png",
        referencia: "GD-3450",
        codBarras: "7898748660777",
        ncm: "82041200",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 191201,
        name: "CHAVE INGLESA 12\" PROFISSIONAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p21_4.png",
        referencia: "GD-3455",
        codBarras: "7898748660784",
        ncm: "82041200",
        observacoes: "CAIXA MASTER 48 PEÇAS"
    },

    {
        id: 191001,
        name: "CHAVE INGLESA 8\" PROFISSIONAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p21_6.png",
        referencia: "GD-3445",
        codBarras: "2010000014356",
        ncm: "82041200",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 73701,
        name: "CHAVE PARA MANDRIL APROX. 10-13MM",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p21_8.png",
        referencia: "SQ-3437",
        codBarras: "7899441523833",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 320PÇS"
    },

    {
        id: 182701,
        name: "CHAVE T 21 PÇS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p22_2.png",
        referencia: "GD-3100",
        codBarras: "7898748660036",
        ncm: "82042000",
        observacoes: "CAIXA MASTER 60 PEçAS"
    },

    {
        id: 209301,
        name: "CHAVE TESTE DIGITAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p22_4.png",
        referencia: "GD-3910",
        codBarras: "7898748662023",
        ncm: "90303390",
        observacoes: "CAIXA MASTER 300 PEÇAS"
    },

    {
        id: 94901,
        name: "CHAVE TESTE DIGITAL FERTAK",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p22_6.png",
        referencia: "COD 8210",
        codBarras: "7899095409521",
        ncm: "90303311",
        observacoes: "CAIXA MASTER 500 ÇS"
    },

    {
        id: 155301,
        name: "CHAVE TESTE DIGITAL SPARTA",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p22_8.png",
        referencia: "1308555",
        codBarras: "7899612795120",
        ncm: "90303390",
        observacoes: "CAIXA MASTER 500 ÇS"
    },

    {
        id: 172301,
        name: "CHAVE TORX C/ 9 PEÇAS (GRANDE) - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p23_2.png",
        referencia: "GD-3059",
        codBarras: "7891230008057",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 60 PCS"
    },

    {
        id: 172201,
        name: "CHAVE TORX C/ 9 PEÇAS (MÉDIA) - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p23_4.png",
        referencia: "GD-3058",
        codBarras: "7891230008040",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 60 PCS"
    },

    {
        id: 211201,
        name: "COLHER PARA PEDREIRO 7\" - CABO DE MADEIRA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p23_6.png",
        referencia: "GD-6045",
        codBarras: "7898748662511",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 210901,
        name: "COLHER PARA PEDREIRO 7\" - CABO EMBORRACHADO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p23_8.png",
        referencia: "GD-6030",
        codBarras: "7898748662481",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 82301,
        name: "COLHER PARA PEDREIRO 7\" CANTO RETO FERTAK",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p24_2.png",
        referencia: "3013",
        codBarras: "0736532120205",
        ncm: "82055900"
    },

    {
        id: 211101,
        name: "COLHER PARA PEDREIRO 8\" - CABO DE MADEIRA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p24_4.png",
        referencia: "GD-6050",
        codBarras: "7898748662528",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 210801,
        name: "COLHER PARA PEDREIRO 8\" - CABO EMBORRACHADO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p24_6.png",
        referencia: "GD-6035",
        codBarras: "7898748662498",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 22101,
        name: "COLHER PARA PEDREIRO 8\" CANTO RETOFERTAK",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p24_8.png",
        referencia: "3011",
        codBarras: "7899095407466",
        ncm: "82055900"
    },

    {
        id: 211001,
        name: "COLHER PARA PEDREIRO 9\" - CABO DE MADEIRA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p25_2.png",
        referencia: "GD-6055",
        codBarras: "7898748662535",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 210701,
        name: "COLHER PARA PEDREIRO 9\" - CABO EMBORRACHADO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p25_4.png",
        referencia: "GD-6040",
        codBarras: "7898748662504",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 87401,
        name: "COLHER PARA PEDREIRO 9\" CANTO RETO FERTAK",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p25_6.png",
        referencia: "3012",
        codBarras: "7899095407473",
        ncm: "82055900"
    },

    {
        id: 207601,
        name: "DETECTOR DE TENSÃO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p25_8.png",
        referencia: "GD-3900",
        codBarras: "7898748662016",
        ncm: "90303319",
        observacoes: "CAIXA MASTER 200 PEÇAS"
    },

    {
        id: 210601,
        name: "ESCOVA LIMPA GRELHA COM RASPADOR 12\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p26_2.png",
        referencia: "GD-6070",
        codBarras: "7898748662566",
        ncm: "96039000",
        observacoes: "CAIXA MASTER COM 72 PEÇAS"
    },

    {
        id: 210501,
        name: "ESCOVA LIMPA GRELHA COM RASPADOR 8\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p26_4.png",
        referencia: "GD-6065",
        codBarras: "7898748662559",
        ncm: "96039000",
        observacoes: "CAIXA MASTER COM 72 PEÇAS"
    },

    {
        id: 194501,
        name: "ESPATULA 3\" EMBORRACHADA PROFISSIONAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p26_6.png",
        referencia: "GD-3545",
        codBarras: "7898748660944",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 194601,
        name: "ESPATULA 4\" EMBORRACHADA PROFISSIONAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p26_8.png",
        referencia: "GD-3550",
        codBarras: "7898748660951",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 120 PEÇAS"
    },

    {
        id: 181601,
        name: "ESQUADRO 30CM - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p27_2.png",
        referencia: "GD-3470",
        codBarras: "7898748660814",
        ncm: "90172000",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 187601,
        name: "ESTANHO PARA SOLDA TUBO 1.0MM 40G SQ",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p27_4.png",
        referencia: "SQ-3040N",
        codBarras: "7899441502715",
        ncm: "80030000",
        observacoes: "CAIXA MASTER 144 PEÇAS"
    },

    {
        id: 197701,
        name: "FACÃO PARA MATO 14\" CABO DE MADEIRA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p27_6.png",
        referencia: "GD-3565",
        codBarras: "7898748660982",
        ncm: "82119220",
        observacoes: "CAIXA MASTER COM 36 PEÇAS"
    },

    {
        id: 198001,
        name: "FACÃO PARA MATO 14\" CABO DE PVC - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p27_8.png",
        referencia: "GD-3580",
        codBarras: "7898748661019",
        ncm: "82119220",
        observacoes: "CAIXA MASTER COM 36 PEÇAS"
    },

    {
        id: 147501,
        name: "FERRO DE SOLDA SEGMA 40W 127V",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p28_2.png",
        referencia: "SEG-F40W 12",
        codBarras: "7898681492824",
        ncm: "85151100",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 147601,
        name: "FERRO DE SOLDA SEGMA 40W 220V",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p28_4.png",
        referencia: "SEG-F40W 22",
        codBarras: "7898681492831",
        ncm: "85151100",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 147701,
        name: "FERRO DE SOLDA SEGMA 60W 127V",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p28_6.png",
        referencia: "SEG-F60W 12",
        codBarras: "7898681492800",
        ncm: "85151100",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 147801,
        name: "FERRO DE SOLDA SEGMA 60W 220V",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p28_8.png",
        referencia: "SEG-F60W 20",
        codBarras: "7898681492817",
        ncm: "85151100",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 170601,
        name: "FITA ISOLANTE 10M EM TUBO C/ 10 ROLOS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p29_2.png",
        referencia: "GD-3051",
        codBarras: "7891230007067",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 50 TUBOS"
    },

    {
        id: 170501,
        name: "FITA ISOLANTE 20M EM TUBO C/ 10 ROLOS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p29_4.png",
        referencia: "GD-3052",
        codBarras: "7891230007074",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 30 TUBOS"
    },

    {
        id: 170801,
        name: "FITA ISOLANTE 5M (COLORIDA) EM TUBO C/ 10 ROLOS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p29_6.png",
        referencia: "GD-3053",
        codBarras: "7891230007081",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 50 TUBOS"
    },

    {
        id: 170701,
        name: "FITA ISOLANTE 5M EM TUBO C/ 10 ROLOS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p29_8.png",
        referencia: "GD-3050",
        codBarras: "7891230007050",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 50 TUBOS"
    },

    {
        id: 195801,
        name: "FITA VEDA ROSCA EM TUBO C/ 10 ROLOS DE 18MM X 10M - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p30_2.png",
        referencia: "GD-3770",
        codBarras: "7898748661392",
        ncm: "39209990",
        observacoes: "CAIXA MASTER 30 TUBOS"
    },

    {
        id: 133101,
        name: "FITA VEDA ROSCA EM TUBO C/ 10 ROLOS DE 18MM X 25M",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p30_4.png",
        referencia: "31825",
        codBarras: "0736532121042",
        ncm: "39209990",
        observacoes: "CAUXA MASTER COM 100 TUBOS"
    },

    {
        id: 180001,
        name: "FORMÃO PARA MADEIRA C/4 PC - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p30_6.png",
        referencia: "GD-3155",
        codBarras: "7898748660142",
        ncm: "82053000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 150801,
        name: "GRAMPEADOR DE TAPECEIRO 4-14MM FERTAK PROFISSIONAL",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p30_8.png",
        referencia: "8503",
        codBarras: "0736532118547",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 40 PEÇAS"
    },

    {
        id: 150901,
        name: "GRAMPEADOR DE TAPECEIRO 4-8MM FERTAK",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p31_2.png",
        referencia: "8502",
        codBarras: "0736532118530",
        ncm: "82055900",
        observacoes: "CAIXA MASTER COM 40 PEÇAS"
    },

    {
        id: 179701,
        name: "JOGO DE BITS PHILIPS PROFISSIONAL CURTO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p31_4.png",
        referencia: "GD-3215",
        codBarras: "7898748660265",
        ncm: "82079000",
        observacoes: "CAIXA MASTER 200 PEÇAS"
    },

    {
        id: 179601,
        name: "JOGO DE BITS PHILIPS PROFISSIONAL LONGO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p31_6.png",
        referencia: "GD-3220",
        codBarras: "7898748660272",
        ncm: "82079000",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 179501,
        name: "JOGO DE BROCAS 3 EM 1 C/ 9 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p31_8.png",
        referencia: "GD-3225",
        codBarras: "7898748660289",
        ncm: "82075011",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 195401,
        name: "JOGO DE BROCAS PARA CONCRETO C/ 5 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p32_2.png",
        referencia: "GD-3750",
        codBarras: "7898748661354",
        ncm: "82075019",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 195701,
        name: "JOGO DE BROCAS PARA CONCRETO C/ 8 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p32_4.png",
        referencia: "GD-3765",
        codBarras: "7898748661385",
        ncm: "82075019",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 195201,
        name: "JOGO DE BROCAS PARA MADEIRA C/ 5 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p32_6.png",
        referencia: "GD-3740",
        codBarras: "7898748661330",
        ncm: "82075019",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 195501,
        name: "JOGO DE BROCAS PARA MADEIRA C/ 8 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p32_8.png",
        referencia: "GD-3755",
        codBarras: "7898748661361",
        ncm: "82075019",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 195301,
        name: "JOGO DE BROCAS PARA METAL C/ 5 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p33_2.png",
        referencia: "GD-3745",
        codBarras: "7898748661347",
        ncm: "82075019",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 195601,
        name: "JOGO DE BROCAS PARA METAL C/ 8 PCS GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p33_4.png",
        referencia: "GD-3760",
        codBarras: "7898748661378",
        ncm: "82075019",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 116001,
        name: "JOGO DE CHAVE 31 EM 1",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p33_6.png",
        referencia: "16022",
        codBarras: "6955108051536",
        ncm: "82059000",
        observacoes: "CAIXA MASTER 120 PCS"
    },

    {
        id: 197301,
        name: "JOGO DE CHAVE COMBINADA COM 6 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p33_8.png",
        referencia: "GD-3695",
        codBarras: "7898748661248",
        ncm: "82041100",
        observacoes: "CAIXA MASTER 40 PCS"
    },

    {
        id: 179901,
        name: "JOGO DE CHAVES CATRACA 40 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p34_2.png",
        referencia: "GD-3145",
        codBarras: "7898748660128",
        ncm: "82042000",
        observacoes: "CAIXA MASTER 20 PEÇAS"
    },

    {
        id: 182801,
        name: "JOGO DE CHAVES CATRACA 46 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p34_4.png",
        referencia: "GD-3150",
        codBarras: "7898748660135",
        ncm: "82042000",
        observacoes: "CAIXA MASTER 20 PEÇAS"
    },

    {
        id: 137101,
        name: "JOGO DE CHAVES FENDA/PHILIPS C/ 2 PEÇAS",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p34_6.png",
        referencia: "HM-28",
        codBarras: "7898684170415",
        ncm: "82054000",
        observacoes: "CAIXA MASTER C/ 60 JOGOS"
    },

    {
        id: 171401,
        name: "JOGO DE CHAVES FENDA/PHILIPS C/ 2 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p34_8.png",
        referencia: "GD-3021",
        codBarras: "7891230004035",
        ncm: "82054000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 171301,
        name: "JOGO DE CHAVES FENDA/PHILIPS C/ 4 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p35_2.png",
        referencia: "GD-3020",
        codBarras: "7891230004028",
        ncm: "82054000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 171201,
        name: "JOGO DE CHAVES FENDA/PHILIPS C/ 6 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p35_4.png",
        referencia: "GD-3019",
        codBarras: "7891230004011",
        ncm: "82054000",
        observacoes: "CAIXA MASTER 48 PEÇAS"
    },

    {
        id: 180101,
        name: "JOGO DE CHAVES FENDA/PHILIPS C/ 6 PEÇAS SAQUINHO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p35_6.png",
        referencia: "GD-3140",
        codBarras: "7898748660111",
        ncm: "82054000",
        observacoes: "CAIXA MASTER 48 PEÇAS"
    },

    {
        id: 209601,
        name: "JOGO DE CHAVES FENDA/PHILIPS DE IMPACTO C/ 6 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p35_8.png",
        referencia: "GD-6010",
        codBarras: "7898748662450",
        ncm: "82054000",
        observacoes: "CAIXA MASTER 36 PEÇAS"
    },

    {
        id: 190001,
        name: "JOGO DE ESCOVA DE AÇO PARA FURADEIRA C/ 3 UN - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p36_2.png",
        referencia: "GD-3375",
        codBarras: "7898748660630",
        ncm: "96035000",
        observacoes: "CAIXA MASTER C/ 120 JOGOS"
    },

    {
        id: 189901,
        name: "JOGO DE ESCOVA DE AÇO PARA FURADEIRA C/ 5 UN - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p36_4.png",
        referencia: "GD-3380",
        codBarras: "7898748660647",
        ncm: "96035000",
        observacoes: "CAIXA MASTER C/ 60 JOGOS"
    },

    {
        id: 157001,
        name: "JOGO DE LIMAS COM 6UN. DE 18CM",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p36_6.png",
        referencia: "ID-3532L",
        codBarras: "7908629700444",
        ncm: "82031010",
        observacoes: "CAIXA MASTER 96 CARTELAS"
    },

    {
        id: 171701,
        name: "JOGO DE SERRA COPOS COM 11 PEÇAS NA MALETA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p36_8.png",
        referencia: "GD-3028",
        codBarras: "7891230005018",
        ncm: "82029990",
        observacoes: "CAIXA MASTER 40 PEÇAS"
    },

    {
        id: 127301,
        name: "JOGO DE SERRA COPOS COM 6 PEÇAS",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p37_2.png",
        referencia: "N+2038",
        codBarras: "6955123022856",
        ncm: "82029990",
        observacoes: "CAIXA MASTER C/ 100 PEçAS"
    },

    {
        id: 171801,
        name: "JOGO DE SERRA COPOS COM 6 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p37_4.png",
        referencia: "GD-3027",
        codBarras: "7891230004097",
        ncm: "82029990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 191701,
        name: "KIT CABO EXTENSOR FLEXIVEL + 11 PCS PARA PARAFUSADEIRA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p37_6.png",
        referencia: "GD-3460",
        codBarras: "7898748660791",
        ncm: "82042000",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 171901,
        name: "KIT CHAVE TORX & ALLEN C/ 8 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p37_8.png",
        referencia: "GD-3024",
        codBarras: "7891230004066",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 144 PEÇAS"
    },

    {
        id: 190801,
        name: "KIT ESCOVA DE AÇO MANUAL 3 EM 1 - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p38_2.png",
        referencia: "GD-3435",
        codBarras: "7898748660746",
        ncm: "96039000",
        observacoes: "CAIXA MASTER C/ 120 PEçAS"
    },

    {
        id: 190901,
        name: "KIT ESCOVA DE AÇO MANUAL 3 EM 1 REFORÇADO - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p38_4.png",
        referencia: "GD-3440",
        codBarras: "7898748660753",
        ncm: "96039000",
        observacoes: "CAIXA MASTER C/ 72  PEçAS"
    },

    {
        id: 139201,
        name: "KIT ESCOVA MANUAL 3 EM 1 GORILLAZ",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p38_6.png",
        referencia: "4692",
        codBarras: "6918041046922",
        ncm: "96039000",
        observacoes: "CAIXA MASTER C/ 240 PEçAS"
    },

    {
        id: 155501,
        name: "KIT GRAMPEADOR DE TAPECEIRO NA MALETA 3 PCS",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p38_8.png",
        referencia: "4200355",
        codBarras: "7899612796219",
        ncm: "82055900",
        observacoes: "CAIXA MASTER C/ 20 PEçAS"
    },

    {
        id: 196601,
        name: "KIT GRAMPO SARGENTO COM 3 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p39_2.png",
        referencia: "GD-3465",
        codBarras: "7898748660807",
        ncm: "82057000",
        observacoes: "CAIXA MASTER 48 PEÇAS"
    },

    {
        id: 195901,
        name: "KIT JARDINAGEM 3 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p39_4.png",
        referencia: "GD-3560",
        codBarras: "7898748660975",
        ncm: "82013000",
        observacoes: "CAIXA MASTER 120 PEçAS"
    },

    {
        id: 207901,
        name: "KIT PINCEL COM 3 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p39_6.png",
        referencia: "GD-4010",
        codBarras: "7898748662030",
        ncm: "96034090",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 207801,
        name: "KIT PINCEL COM 5 PEÇAS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p39_8.png",
        referencia: "GD-4015",
        codBarras: "7898748662047",
        ncm: "96034090",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 207701,
        name: "LAMINA DE SERRA MANUAL 12\" EM PACOTE COM 10 UN - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p40_2.png",
        referencia: "GD-4030",
        codBarras: "7898748662054",
        ncm: "82021000",
        observacoes: "CAIXA MASTER COM 100 PACOTES"
    },

    {
        id: 190401,
        name: "LIMA CHATA PARA FERRO 10\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p40_4.png",
        referencia: "GD-3395",
        codBarras: "7898748660678",
        ncm: "82031010",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 190301,
        name: "LIMA CHATA PARA FERRO 8\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p40_6.png",
        referencia: "GD-3390",
        codBarras: "7898748660661",
        ncm: "82031010",
        observacoes: "CAIXA MASTER 96 PEÇAS"
    },

    {
        id: 192101,
        name: "MALETA DE FERRAMENTAS COM 187 PEÇAS PROFISSIONAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p40_8.png",
        referencia: "GD-3410",
        codBarras: "7898748660692",
        ncm: "82060000",
        observacoes: "CAIXA MASTER 1 PEÇA"
    },

    {
        id: 182401,
        name: "MARRETA DE BORRACHA 330G 50MM - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p41_2.png",
        referencia: "GD-3125",
        codBarras: "7898748660081",
        ncm: "40169990",
        observacoes: "CAIXA MASTER 36 PEÇAS"
    },

    {
        id: 131301,
        name: "MARTELO 550G 27MM",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p41_4.png",
        referencia: "NAMO27A",
        codBarras: "7896825439643",
        ncm: "82052000",
        observacoes: "CAIXA MASTER 48 PCS"
    },

    {
        id: 199101,
        name: "MARTELO 550G 27MM CABO DE MADEIRA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p41_6.png",
        referencia: "GD-3805",
        codBarras: "7898748661934",
        ncm: "82052000",
        observacoes: "CAIXA MASTER 24 PCS"
    },

    {
        id: 193701,
        name: "MARTELO MAGNÉTICO PROFISSIONAL 29MM - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p41_8.png",
        referencia: "GD-3660",
        codBarras: "7898748661170",
        ncm: "82052000",
        observacoes: "CAIXA MASTER 36 PCS"
    },

    {
        id: 182201,
        name: "MARTELO PROFISSIONAL 27MM - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p42_2.png",
        referencia: "GD-3325",
        codBarras: "7898748660470",
        ncm: "82052000",
        observacoes: "CAIXA MASTER 36 PCS"
    },

    {
        id: 151201,
        name: "MINI ARCO DE SERRA 12\" COM SERRA",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p42_4.png",
        referencia: "1504",
        codBarras: "7899095403963",
        ncm: "82021000"
    },

    {
        id: 190101,
        name: "MINI ARCO DE SERRA 12\" COM SERRA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p42_6.png",
        referencia: "GD-3385",
        codBarras: "7898748660654",
        ncm: "82021000",
        observacoes: "CAIXA MASTER 180 PEÇAS"
    },

    {
        id: 20101,
        name: "MULTIMETRO DIGITAL EXBOM DT-830B",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p42_8.png",
        referencia: "DT-830",
        codBarras: "2993500177502",
        ncm: "90303100",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 183101,
        name: "NIVEL 3 BOLHAS 30CM - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p43_2.png",
        referencia: "GD-3345",
        codBarras: "7898748660579",
        ncm: "90153000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 183001,
        name: "NIVEL 3 BOLHAS 40CM - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p43_4.png",
        referencia: "GD-3350",
        codBarras: "78987748660586",
        ncm: "90153000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 182901,
        name: "NIVEL 3 BOLHAS 50CM - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p43_6.png",
        referencia: "GD-3355",
        codBarras: "7898748660593",
        ncm: "90153000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 196101,
        name: "PEDRA DE AFIAR 6\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p43_8.png",
        referencia: "GD-3715",
        codBarras: "7898748661286",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 50 PEÇAS"
    },

    {
        id: 196201,
        name: "PEDRA DE AFIAR 8\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p44_2.png",
        referencia: "GD-3710",
        codBarras: "7898748661279",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 50 PEÇAS"
    },

    {
        id: 196001,
        name: "PINCEL CABO MADEIRA- JOGO COM 3 PEÇAS EM BLISTER - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p44_4.png",
        referencia: "GD-3645",
        codBarras: "7898748661149",
        ncm: "96034090",
        observacoes: "CAIXA MASTER 144 PEÇAS"
    },

    {
        id: 178701,
        name: "PISTOLA DE SILICONE 9\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p44_6.png",
        referencia: "GD-3120",
        codBarras: "7898748660074",
        ncm: "82055900",
        observacoes: "CAIXA MASTER 50 PCS"
    },

    {
        id: 174001,
        name: "REBITADEIRA MANUAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p44_8.png",
        referencia: "GD-3022",
        codBarras: "7891230004042",
        ncm: "84798999",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 198101,
        name: "ROLO DE PINTURA COM SUPORTE 4\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p45_2.png",
        referencia: "GD-3665",
        codBarras: "7898748661187",
        ncm: "96034010",
        observacoes: "CAIXA MASTER 96 PEÇAS"
    },

    {
        id: 198201,
        name: "ROLO DE PINTURA COM SUPORTE 9\" - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p45_4.png",
        referencia: "GD-3670",
        codBarras: "7898748661194",
        ncm: "96034010",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 190201,
        name: "SERROTE 16\" PARA PODA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p45_6.png",
        referencia: "GD-3425",
        codBarras: "7898748660722",
        ncm: "82021000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 74101,
        name: "SERROTE 20\" FERTAK",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p45_8.png",
        referencia: "7208",
        codBarras: "7899095405882",
        ncm: "82021000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 87301,
        name: "SERROTE 22\" FERTAK",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p46_2.png",
        referencia: "7209",
        codBarras: "7899095405899",
        ncm: "82021000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 196701,
        name: "SERROTE PARA PODA DOBRAVEL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p46_4.png",
        referencia: "GD-3430",
        codBarras: "7898748660739",
        ncm: "82021000",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 194001,
        name: "SOQUETE MAGNÉTICO 65MM EM KIT COM 5 PCS - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p46_6.png",
        referencia: "GD-3680",
        codBarras: "7898748661217",
        ncm: "82071990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 173001,
        name: "TRENA 10M 24MM EMBORRACHADA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p46_8.png",
        referencia: "GD-3039",
        codBarras: "7891230006039",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 198701,
        name: "TRENA 3 METROS 18MM TRADICIONAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p47_2.png",
        referencia: "GD-3595",
        codBarras: "2010000000991",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 240PCS"
    },

    {
        id: 154601,
        name: "TRENA 3M 16MM EMBORRACHADA NAPOLES",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p47_4.png",
        referencia: "NAT3M",
        codBarras: "7894856485929",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 240PCS"
    },

    {
        id: 172701,
        name: "TRENA 3M 18MM EMBORRACHADA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p47_6.png",
        referencia: "GD-3036",
        codBarras: "7891230005094",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 120 PCS"
    },

    {
        id: 196301,
        name: "TRENA 5 METROS 24MM TRADICIONAL - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p47_8.png",
        referencia: "GD-3600",
        codBarras: "7898748661057",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 172801,
        name: "TRENA 5M 24MM EMBORRACHADA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p48_2.png",
        referencia: "GD-3037",
        codBarras: "7891230006015",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 135101,
        name: "TRENA 5M 24MM EMBORRACHADA AMERICAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p48_4.png",
        referencia: "MS-5MTR",
        codBarras: "7899576059139",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 172901,
        name: "TRENA 7,5M 24MM EMBORRACHADA - GADAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p48_6.png",
        referencia: "GD-3038",
        codBarras: "7891230006022",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 135201,
        name: "TRENA 7,5M 24MM EMBORRACHADA AMERICAN",
        category: "ferramentas",
        price: 0,
        image: "imagens_produtos/produto_p48_8.png",
        referencia: "MS-7.5MTS",
        codBarras: "7899576059146",
        ncm: "90178010",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    // GUARDA CHUVA E CAPAS
    {
        id: 193901,
        name: "CAPA DE CHUVA DESCARTÁVEL - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p49_2.png",
        referencia: "GD-3685",
        codBarras: "7898748661224",
        ncm: "39262000",
        observacoes: "CAIXA MASTER 300 PEÇAS"
    },

    // HIGIENE PESSOAL
    {
        id: 192701,
        name: "BARBEADOR 2 LÂMINAS TWIN BLADE EMBORRACHADO EM CARTELA C/12 PARES",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p50_2.png",
        referencia: "XH-2042",
        codBarras: "7908593513866",
        ncm: "82121020",
        observacoes: "CAIXA MASTER 72 CARTELAS"
    },

    {
        id: 198501,
        name: "BARBEADOR ULTRA INOX 2 - 2 LÂMINAS CABO EMBORRACHADO CARTELA C/ 24 PCS - GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p50_4.png",
        referencia: "GD-3515",
        codBarras: "7898748660906",
        ncm: "82119400",
        observacoes: "CIXA MASTER 30 CARTELAS"
    },

    {
        id: 198601,
        name: "BARBEADOR ULTRA INOX 3 - 3 LÂMINAS CABO EMBORRACHADO CARTELA C/ 24 PCS - GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p50_6.png",
        referencia: "GD-3510",
        codBarras: "7898748660890",
        ncm: "82119400",
        observacoes: "CIXA MASTER 30 CARTELAS"
    },

    {
        id: 198401,
        name: "BARBEADOR ULTRA INOX BASIC - 2 LÂMINAS CABO PLÁSTICO CARTELA C/ 24 PCS - GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p50_8.png",
        referencia: "GD-3520",
        codBarras: "7898748660913",
        ncm: "82119400",
        observacoes: "CIXA MASTER 30 CARTELAS"
    },

    {
        id: 170301,
        name: "CORTADOR DE UNHA GRANDE EM CARTELA C/ 12UN - GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p51_2.png",
        referencia: "GD-3033",
        codBarras: "7891230005063",
        ncm: "82142000",
        observacoes: "CAIXA MASTER 50 CARTELAS"
    },

    {
        id: 170401,
        name: "CORTADOR DE UNHA PEQ EM CARTELA C/ 12UN - GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p51_4.png",
        referencia: "GD-3032",
        codBarras: "7891230005056",
        ncm: "82142000",
        observacoes: "CAIXA MASTER 50 CARTELAS"
    },

    {
        id: 188001,
        name: "ELASTICO PARA CABELO - LACINHOS PRETOS 72 PCS",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p51_6.png",
        referencia: "SQ-4801",
        codBarras: "7899441534594",
        ncm: "96159000",
        observacoes: "CAIXA MASTER 50 PACOTES"
    },

    {
        id: 161301,
        name: "ESCOVA DENTAL ADULTO DURA C/ 12UN BLACK 4047",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p51_8.png",
        referencia: "N+4047",
        codBarras: "7908635102027",
        ncm: "96032100",
        observacoes: "CAIIXA MASTER 60 DUZIAS"
    },

    {
        id: 162001,
        name: "ESCOVA DENTAL ADULTO MACIA C/ 12UN BLACK 4045",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p52_2.png",
        referencia: "N+4045",
        codBarras: "7908635102003",
        ncm: "96032100",
        observacoes: "CAIIXA MASTER 60 DUZIAS"
    },

    {
        id: 160401,
        name: "ESCOVA DENTAL ADULTO MACIA C/ 12UN DC-1904A",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p52_4.png",
        referencia: "DC-1904A",
        codBarras: "7899984537069",
        ncm: "96032100"
    },

    {
        id: 209701,
        name: "ESCOVA DENTAL ADULTO MÉDIA C/ 12UN BLACK 4053",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p52_6.png",
        referencia: "N+4053",
        codBarras: "7908635102508",
        ncm: "96032100",
        observacoes: "CAIIXA MASTER 60 DUZIAS"
    },

    {
        id: 71701,
        name: "ESCOVA DENTAL ADULTO MÉDIA C/ 12UN DC-1907A",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p52_8.png",
        referencia: "DC-1907A",
        codBarras: "7899984537090",
        ncm: "96032100"
    },

    {
        id: 71601,
        name: "ESCOVA DENTAL ADULTO MÉDIA C/ 12UN DC-1908A",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p53_2.png",
        referencia: "DC-1908A",
        codBarras: "7899984537106",
        ncm: "96032100"
    },

    {
        id: 163201,
        name: "ESCOVA DENTAL ADULTO SUPER MACIA C/ 12UN 4029",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p53_4.png",
        referencia: "N+ 4029",
        codBarras: "7908635101044",
        ncm: "96032100",
        observacoes: "CAIXA MASTER 60 DUZIAS"
    },

    {
        id: 210101,
        name: "ESCOVA DENTAL DE VIAGEM - MACIA C/ 12UN 4044",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p53_6.png",
        referencia: "N+4044",
        codBarras: "7908635101884",
        ncm: "96032100",
        observacoes: "CAIXA MASTER COM 60 DUZIAS"
    },

    {
        id: 209901,
        name: "ESCOVA DENTAL INFANTIL MACIA C/ 12UN 4016",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p53_8.png",
        referencia: "N+4016",
        codBarras: "7908635100917",
        ncm: "96032100",
        observacoes: "CAIXA MASTER COM 60 DUZIAS"
    },

    {
        id: 210001,
        name: "ESCOVA DENTAL INFANTIL MACIA C/ 12UN 4014",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p54_2.png",
        referencia: "N+4014",
        codBarras: "7908635100894",
        ncm: "96032100",
        observacoes: "CAIXA MASTER COM 60 DUZIAS"
    },

    {
        id: 153701,
        name: "ESPONJA DE BANHO TRADICIONAL",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p54_4.png",
        referencia: "SQ-3265",
        codBarras: "789441505082",
        ncm: "39249000",
        observacoes: "CAIXA MASTER 300 PEÇAS"
    },

    {
        id: 201701,
        name: "KIT 2 ESCOVAS MULTIUSO - GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p54_6.png",
        referencia: "GD-4750",
        codBarras: "7898748661439",
        ncm: "96039000",
        observacoes: "CAIXA MASTER 180 KITS"
    },

    {
        id: 201601,
        name: "KIT 3 ESCOVAS MULTIUSO - GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p54_8.png",
        referencia: "GD-4755",
        codBarras: "7898748661446",
        ncm: "96039000",
        observacoes: "CAIXA MASTER 144 KITS"
    },

    {
        id: 197101,
        name: "KIT COM 12 PINÇAS - GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p55_2.png",
        referencia: "GD-3535",
        codBarras: "7898748660920",
        ncm: "82142000",
        observacoes: "CAIXA MASTER COM 240 PCS"
    },

    {
        id: 164201,
        name: "KIT DE PINCEL PARA TINTURA EM CABELO",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p55_4.png",
        referencia: "SQ-1514",
        codBarras: "7899441510727",
        ncm: "96033000",
        observacoes: "CAIXA MASTER 180 KITS"
    },

    {
        id: 75601,
        name: "LAMINA DE BARBEAR - LORD/SQ - CARTELA C/ 50 LAMINAS",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p55_6.png",
        referencia: "SQ-3729",
        codBarras: "7899441526742",
        ncm: "82122010",
        observacoes: "CAIXA MASTER 200 CARTELAS"
    },

    {
        id: 153101,
        name: "LIXA DE METAL PARA UNHAS COM 12 UN.",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p55_8.png",
        referencia: "SQ-2885",
        codBarras: "7899441500889",
        ncm: "82142000",
        observacoes: "CAIXA MASTER 48 CARTELAS"
    },

    {
        id: 154301,
        name: "NAVALHA PROFISSIONAL EM INOX",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p56_2.png",
        referencia: "SQ-3942",
        codBarras: "7899441528999",
        ncm: "82121010",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 73201,
        name: "NAVALHA TRADICIONAL SQ",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p56_4.png",
        referencia: "SQ-3290",
        codBarras: "7899441505327",
        ncm: "82121020"
    },

    {
        id: 197201,
        name: "PINÇAS PROFISSIONAIS EM KIT COM 3UN -GADAN",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p56_6.png",
        referencia: "GD-3540",
        codBarras: "7898748660937",
        ncm: "82142000",
        observacoes: "CAIXA MASTER COM 120 PCS"
    },

    {
        id: 87001,
        name: "TESOURA DE METAL PARA CORTE DE PELOS",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p56_8.png",
        referencia: "SQ-3716",
        codBarras: "7899441526612",
        ncm: "82130000",
        observacoes: "CAIXA MASTER 480 PÇS"
    },

    {
        id: 73501,
        name: "TESOURA DE METAL PARA UNHAS",
        category: "higiene_pessoal",
        price: 0,
        image: "imagens_produtos/produto_p57_2.png",
        referencia: "SQ-2125",
        codBarras: "7899441517672",
        ncm: "82130000",
        observacoes: "CAIXA MASTER 600 PÇS"
    },

    // PAPELARIA
    {
        id: 173401,
        name: "ESTILETE EMBORRACHADO PROFISSIONAL - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p58_2.png",
        referencia: "GD-3035",
        codBarras: "7891230005087",
        ncm: "82119390",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 191801,
        name: "ESTILETE TRADICIONAL - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p58_4.png",
        referencia: "GD-3400",
        codBarras: "7898748660685",
        ncm: "82119390",
        observacoes: "CAIXA MASTER 600 PEÇAS"
    },

    {
        id: 100301,
        name: "ESTILETE TRADICIONAL LINAI 18MM",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p58_6.png",
        referencia: "J-012",
        codBarras: "7898461116124",
        ncm: "82119320",
        observacoes: "CAIXA MASTER 480 PCS"
    },

    {
        id: 182601,
        name: "FITA ADESIVA SILVER TAPE 48MM X 10M - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p58_8.png",
        referencia: "GD-3195",
        codBarras: "7898748660227",
        ncm: "39191020",
        observacoes: "CAIXA MASTER 72 ROLOS"
    },

    {
        id: 191501,
        name: "FITA DUPLA FACE ESPUMA 2,7M - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p59_2.png",
        referencia: "GD-3500",
        codBarras: "7898748660876",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 288 PÇS"
    },

    {
        id: 191601,
        name: "FITA DUPLA FACE ESPUMA 5M - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p59_4.png",
        referencia: "GD-3505",
        codBarras: "7898748660883",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 288 PÇS"
    },

    {
        id: 191301,
        name: "FITA DUPLA FACE TRANSPARENTE 2M - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p59_6.png",
        referencia: "GD-3490",
        codBarras: "7898748660852",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 288 PÇS"
    },

    {
        id: 191401,
        name: "FITA DUPLA FACE TRANSPARENTE 4,5M - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p59_8.png",
        referencia: "GD-3495",
        codBarras: "7898748660869",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 288 PÇS"
    },

    {
        id: 163301,
        name: "FITA DUREX 43MM X 300M",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p60_2.png",
        referencia: "FT300M",
        codBarras: "2010000011256",
        ncm: "39191090",
        observacoes: "CAIXA MASTER 54 ROLOS"
    },

    {
        id: 199301,
        name: "KIT DE AGULHAS COM 27 PEÇAS",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p60_4.png",
        referencia: "XH-RNP27",
        codBarras: "7908593513552",
        ncm: "73199000",
        observacoes: "CAIXA MASTER 1440 PEÇAS"
    },

    {
        id: 178001,
        name: "KIT DE TESOURA C/ 3UN - CORES - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p60_6.png",
        referencia: "GD-3255",
        codBarras: "7898748660333",
        ncm: "82130000",
        observacoes: "CAIXA MASTER 144  PEÇAS"
    },

    {
        id: 177901,
        name: "KIT DE TESOURA C/ 3UN - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p60_8.png",
        referencia: "GD-3260",
        codBarras: "7898748660340",
        ncm: "82130000",
        observacoes: "CAIXA MASTER 144  PEÇAS"
    },

    {
        id: 197401,
        name: "LAMINAS PARA ESTILETES 18MM C/ 10 UN - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p61_2.png",
        referencia: "GD-3690",
        codBarras: "7898748661231",
        ncm: "82119400",
        observacoes: "CAIXA MASTER COM 240 PEÇAS"
    },

    {
        id: 194301,
        name: "LUPA 60MM DE VIDRO - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p61_4.png",
        referencia: "GD-3615",
        codBarras: "7898748661088",
        ncm: "90138000",
        observacoes: "CAIXA MASTER 400PCS"
    },

    {
        id: 194401,
        name: "LUPA 75MM DE VIDRO - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p61_6.png",
        referencia: "GD-3620",
        codBarras: "7898748661095",
        ncm: "90138000",
        observacoes: "CAIXA MASTER 300PCS"
    },

    {
        id: 178401,
        name: "TESOURA 5,5\" - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p61_8.png",
        referencia: "GD-3230",
        codBarras: "7898748660296",
        ncm: "82130000",
        observacoes: "CAIXA MASTER 360 PEÇAS"
    },

    {
        id: 178301,
        name: "TESOURA 7,5\" - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p62_2.png",
        referencia: "GD-3235",
        codBarras: "7898748660302",
        ncm: "82130000",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 178201,
        name: "TESOURA 8,5\" - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p62_4.png",
        referencia: "GD-3240",
        codBarras: "7898748660319",
        ncm: "82130000",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 178101,
        name: "TESOURA 9,5\" - GADAN",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p62_6.png",
        referencia: "GD-3245",
        codBarras: "7898748660326",
        ncm: "82130000",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 209501,
        name: "TESOURA RESISTENTE 8,5\" - GOLFILD",
        category: "papelaria",
        price: 0,
        image: "imagens_produtos/produto_p62_8.png",
        referencia: "40001003",
        codBarras: "7898736845759",
        ncm: "82130000",
        observacoes: "CAIXA MASER COM 144  PEÇAS"
    },

    // PILHAS & BATERIAS
    {
        id: 140101,
        name: "BATERIA 23A / 12V FLEX EM CARTELA C/ 5UN.",
        category: "pilhas_baterias",
        price: 0,
        image: "imagens_produtos/produto_p63_2.png",
        referencia: "FX-23A-12V",
        codBarras: "5379861524754",
        ncm: "85065090",
        observacoes: "CAIXA MASTER 400 CARTELAS"
    },

    {
        id: 140001,
        name: "BATERIA 27A / 12V FLEX EM CARTELA C/ 5UN.",
        category: "pilhas_baterias",
        price: 0,
        image: "imagens_produtos/produto_p63_4.png",
        referencia: "FX-27A-12V",
        codBarras: "5435627465010",
        ncm: "85065090",
        observacoes: "CAIXA MASTER 400 CARTELAS"
    },

    {
        id: 126601,
        name: "BATERIA CR-2016 FLEX EM CARTELA C/ 5 UN.",
        category: "pilhas_baterias",
        price: 0,
        image: "imagens_produtos/produto_p63_6.png",
        referencia: "FX-CR2016",
        codBarras: "5379861526727",
        ncm: "85065010",
        observacoes: "CAIXA MASTER 400 CARTELAS"
    },

    {
        id: 126701,
        name: "BATERIA CR-2025 FLEX EM CARTELA C/ 5 UN.",
        category: "pilhas_baterias",
        price: 0,
        image: "imagens_produtos/produto_p63_8.png",
        referencia: "FX-CR2025",
        codBarras: "5379861524891",
        ncm: "85065010",
        observacoes: "CAIXA MASTER 400 CARTELAS"
    },

    {
        id: 126801,
        name: "BATERIA CR-2032 FLEX EM CARTELA C/ 5 UN.",
        category: "pilhas_baterias",
        price: 0,
        image: "imagens_produtos/produto_p64_2.png",
        referencia: "FX-CR2032",
        codBarras: "5379861524570",
        ncm: "85065010",
        observacoes: "CAIXA MASTER 400 CARTELAS"
    },

    {
        id: 187301,
        name: "BATERIA LR1130 / AG10 FLEX EM CARTELA C/ 14 UN.",
        category: "pilhas_baterias",
        price: 0,
        image: "imagens_produtos/produto_p64_4.png",
        referencia: "FX-LR1130/A",
        codBarras: "5379861525133",
        ncm: "85061011",
        observacoes: "CAIXA MASTER 400 CARTELAS"
    },

    {
        id: 149601,
        name: "BATERIA LR44 FLEX EM CARTELA C/ 14 UN.",
        category: "pilhas_baterias",
        price: 0,
        image: "imagens_produtos/produto_p64_6.png",
        referencia: "FX-LR44",
        codBarras: "7898615157713",
        ncm: "85061011",
        observacoes: "CAIXA MASTER 400 CARTELAS"
    },

    // UTILIDADES
    {
        id: 110701,
        name: "CADEADO 25MM C/ 2 CHAVES",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p65_2.png",
        referencia: "CAD25MM",
        codBarras: "7896562350256",
        ncm: "83014000",
        observacoes: "CAIXA MASTER 300 PEÇAS"
    },

    {
        id: 159801,
        name: "CADEADO 32MM C/ 2 CHAVES",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p65_4.png",
        referencia: "CAD32MM",
        codBarras: "7896562350324",
        ncm: "83014000"
    },

    {
        id: 159901,
        name: "CADEADO 38MM C/ 3 CHAVES",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p65_6.png",
        referencia: "CAD38MM",
        codBarras: "7896562350386",
        ncm: "83014000",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 160001,
        name: "CADEADO 50MM C/ 3 CHAVES",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p65_8.png",
        referencia: "CAD50MM",
        codBarras: "7896562350508",
        ncm: "83014000",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 150601,
        name: "CADEADO EM CARTELA COM 12 UNIDADES 20MM",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p66_2.png",
        referencia: "COD 20MM",
        codBarras: "7891309625055",
        ncm: "83011000",
        observacoes: "CAIXA MASTER 50 CARTELAS"
    },

    {
        id: 110601,
        name: "CADEADO EM CARTELA COM 12 UNIDADES 25-32-38MM",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p66_4.png",
        referencia: "25-32-38MM",
        codBarras: "6624551523005",
        ncm: "83011000",
        observacoes: "CAIXA MASTER 25 CARTELAS"
    },

    {
        id: 150701,
        name: "CADEADO EM CARTELA COM 12 UNIDADES 32-38-50MM",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p66_6.png",
        referencia: "32-38-50MM",
        codBarras: "6624551523012",
        ncm: "83011000",
        observacoes: "CAIXA MASTER 25 PEÇAS"
    },

    {
        id: 145001,
        name: "ABRAÇADEIRA DE NYLON - 2,5X150MM C/ 100UN. BRANCA",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p66_8.png",
        referencia: "YA-2629",
        codBarras: "7898611092629",
        ncm: "39269090"
    },

    {
        id: 173901,
        name: "ABRAÇADEIRA DE NYLON - 3.6X100MM C/ 100UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p67_2.png",
        referencia: "GD-3045",
        codBarras: "7891230006091",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 300 PACOTES"
    },

    {
        id: 173801,
        name: "ABRAÇADEIRA DE NYLON - 3.6X150MM C/ 100UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p67_4.png",
        referencia: "GD-3046",
        codBarras: "7891230007012",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 300 PACOTES"
    },

    {
        id: 173701,
        name: "ABRAÇADEIRA DE NYLON - 3.6X200MM C/ 100UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p67_6.png",
        referencia: "GD-3047",
        codBarras: "7891230007029",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 200 PACOTES"
    },

    {
        id: 173601,
        name: "ABRAÇADEIRA DE NYLON - 3.6X250MM C/ 100UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p67_8.png",
        referencia: "GD-3048",
        codBarras: "7891230007036",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 200 PACOTES"
    },

    {
        id: 173501,
        name: "ABRAÇADEIRA DE NYLON - 3.6X300MM C/ 100UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p68_2.png",
        referencia: "GD-3049",
        codBarras: "7891230007043",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 200 PACOTES"
    },

    {
        id: 179201,
        name: "ABRAÇADEIRA DE NYLON 7,2X200MM - REFORÇADA- C/ 50UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p68_4.png",
        referencia: "GD-3265",
        codBarras: "7898748660357",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 179101,
        name: "ABRAÇADEIRA DE NYLON 7,2X250MM - REFORÇADA - C/ 50UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p68_6.png",
        referencia: "GD-3270",
        codBarras: "7898748660364",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 193601,
        name: "ABRAÇADEIRA DE NYLON REUTILIZÁVEL 7,6X150MM C/ 50UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p68_8.png",
        referencia: "GD-3720",
        codBarras: "7898748661293",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 300 PACOTES"
    },

    {
        id: 193501,
        name: "ABRAÇADEIRA DE NYLON REUTILIZÁVEL 7,6X200MM C/ 50UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p69_2.png",
        referencia: "GD-3725",
        codBarras: "7898748661309",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 200 PACOTES"
    },

    {
        id: 193401,
        name: "ABRAÇADEIRA DE NYLON REUTILIZÁVEL 7,6X250MM C/ 50UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p69_4.png",
        referencia: "GD-3730",
        codBarras: "7898748661316",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 150 PACOTES"
    },

    {
        id: 193301,
        name: "ABRAÇADEIRA DE NYLON REUTILIZÁVEL 7,6X300MM C/ 50UN. PRETA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p69_6.png",
        referencia: "GD-3735",
        codBarras: "2010000000274",
        ncm: "39269090",
        observacoes: "CAIXA MASTER 150 PACOTES"
    },

    {
        id: 205301,
        name: "ABRIDOR DE GARRAFAS TRADICIONAL - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p69_8.png",
        referencia: "GD-4300",
        codBarras: "7898748661811",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 205201,
        name: "ABRIDOR DE LATAS E GARRAFAS TRADICIONAL - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p70_2.png",
        referencia: "GD-4320",
        codBarras: "7898748661828",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 177801,
        name: "AFIADOR DE FACAS PROFISSIONAL - 3 ESTÁGIOS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p70_4.png",
        referencia: "GD-3165",
        codBarras: "7898748660166",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 144 PEÇAS"
    },

    {
        id: 205901,
        name: "AMASSADOR DE BATATAS - INOX - 25CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p70_6.png",
        referencia: "GD-4510",
        codBarras: "7898748662290",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 200901,
        name: "BALANÇA ANALÓGICA 5KG - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p70_8.png",
        referencia: "GD-4920",
        codBarras: "7898748661576",
        ncm: "84231000",
        observacoes: "CAIXA MASTER 24 PEÇAS"
    },

    {
        id: 204101,
        name: "BALANÇA PARA COZINHA DIGITAL 10KG - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p71_2.png",
        referencia: "GD-4900",
        codBarras: "7898748661552",
        ncm: "84231000",
        observacoes: "CAIXA MASTER 40 PEÇAS"
    },

    {
        id: 200801,
        name: "BALANÇA PENDULO 50KG - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p71_4.png",
        referencia: "GD-4910",
        codBarras: "7898748661569",
        ncm: "84231000",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 87701,
        name: "BALANÇA PENDULO 50KG HM",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p71_6.png",
        referencia: "HM-58",
        codBarras: "7898684170712",
        ncm: "84231000",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    // PRODUTOS ADICIONADOS DO CATÁLOGO RESTANTE - 115 PRODUTOS
    {
        id: 211301,
        name: "BATEDOR DE OVOS - INOX - 35CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p71_8.png",
        referencia: "GD-4560",
        codBarras: "7898748662375",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 96 PEÇAS"
    },

    {
        id: 211401,
        name: "BATEDOR DE OVOS - SILICONE - 24CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p72_2.png",
        referencia: "GD-4635",
        codBarras: "7898748662139",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 211501,
        name: "BICO EXTENSOR DE TORNEIRA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p72_4.png",
        referencia: "GD-4850",
        codBarras: "7898748661507",
        ncm: "84819090",
        observacoes: "CAIXA MASTER COM 180 PEÇAS"
    },

    {
        id: 211601,
        name: "CANIVETE COM PONTA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p72_6.png",
        referencia: "GD-3066",
        codBarras: "7891230009030",
        ncm: "82119320",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 211701,
        name: "CANIVETE MULTIUSO - 11 FUNÇÕES",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p72_8.png",
        referencia: "8088",
        codBarras: "7908593508817",
        ncm: "82119320",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 211801,
        name: "CANIVETE TRADICIONAL- GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p73_2.png",
        referencia: "GD-3067",
        codBarras: "789123009047",
        ncm: "82119320",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 211901,
        name: "CARTELA DE ISQUEIROS WUJI COM 10 UN. ELETRÔNICO",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p73_4.png",
        referencia: "IE-0909",
        codBarras: "7898964666584",
        ncm: "96131000",
        observacoes: "CAIXA MASTER 100 CARTELAS"
    },

    {
        id: 212001,
        name: "CARTELA DE ISQUEIROS WUJI COM 10 UN. TRADICIONAL",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p73_6.png",
        referencia: "IP-0063-T",
        codBarras: "78998964666454",
        ncm: "96131000",
        observacoes: "CAIXA MASTER 100 CARTELAS"
    },

    {
        id: 212101,
        name: "CHAVEIROS COM ETIQUETAS DE IDENTIFICAÇÃO C/ 6UN.",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p73_8.png",
        referencia: "HM-138",
        codBarras: "7898684171528",
        ncm: "39269090",
        observacoes: "CAIXA MASTER COM 240 PEçAS"
    },

    {
        id: 212201,
        name: "COLA INSTANTÂNEA CARTELA C/ 12UN - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p74_2.png",
        referencia: "GD-3010",
        codBarras: "7891230003014",
        ncm: "35061010",
        observacoes: "CAIXA MASTER 72 CARTELAS"
    },

    {
        id: 212301,
        name: "COLA MADEIRA 90G",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p74_4.png",
        referencia: "FT-90",
        codBarras: "7898003680397",
        ncm: "35069120",
        observacoes: "CAIXA MASTER 50UN."
    },

    {
        id: 212401,
        name: "COLHER CABO DECORADO C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p74_6.png",
        referencia: "GD-4130",
        codBarras: "7898748661705",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 212501,
        name: "COLHER CABO PLÁSTICO C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p74_8.png",
        referencia: "GD-4090",
        codBarras: "7898748661668",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 212601,
        name: "COLHER DE ARROZ - INOX - 28CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p75_2.png",
        referencia: "GD-4480",
        codBarras: "7898748662238",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PACOTES"
    },

    {
        id: 212701,
        name: "COLHER DE ARROZ - SILICONE - 28CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p75_4.png",
        referencia: "GD-4620",
        codBarras: "7898748662108",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 212801,
        name: "COLHER DE ARROZ CURTA - SILICONE - 23CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p75_6.png",
        referencia: "GD-4630",
        codBarras: "7898748662122",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 212901,
        name: "COLHER DE CHÁ EM INOX C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p75_8.png",
        referencia: "GD-4080",
        codBarras: "7898748661651",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 213001,
        name: "COLHER DE SOBREMESA CABO PLÁSTICO C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p76_2.png",
        referencia: "GD-4120",
        codBarras: "7898748661699",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 213101,
        name: "COLHER DE SORVETE - INOX - 20CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p76_4.png",
        referencia: "GD-4515",
        codBarras: "7898748662306",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PACOTES"
    },

    {
        id: 213201,
        name: "COLHER EM INOX C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p76_6.png",
        referencia: "GD-4050",
        codBarras: "7898748661620",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 213301,
        name: "CONCHA - INOX - 32CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p76_8.png",
        referencia: "GD-4485",
        codBarras: "7898748662245",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PACOTES"
    },

    {
        id: 213401,
        name: "CONCHA - SILICONE - 28CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p77_2.png",
        referencia: "GD-4605",
        codBarras: "7898748662078",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 213501,
        name: "CORDA MULTIUSO 8MM X 10M - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p77_4.png",
        referencia: "GD-6105",
        codBarras: "7898748662634",
        ncm: "56075090",
        observacoes: "CAIXA MASTER 144 PEÇAS"
    },

    {
        id: 213601,
        name: "CORDA MULTIUSO 8MM X 15M - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p77_6.png",
        referencia: "GD-6110",
        codBarras: "788748662641",
        ncm: "56075090",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 213701,
        name: "CORTADOR DE PASTEL 20CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p77_8.png",
        referencia: "GD4520",
        codBarras: "7898748662313",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 213801,
        name: "CORTADOR DE PIZZA 20CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p78_2.png",
        referencia: "GD-4525",
        codBarras: "7898748662320",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 213901,
        name: "DESCASCADOR DE LEGUMES - INOX - 18CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p78_4.png",
        referencia: "GD-4530",
        codBarras: "7898748662337",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 72 PACOTES"
    },

    {
        id: 214001,
        name: "DESENTUPIDOR DE TUBULAÇÃO 3 METROS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p78_6.png",
        referencia: "GD-3605",
        codBarras: "7898748661064",
        ncm: "73121090",
        observacoes: "CX COM 100 PCS"
    },

    {
        id: 214101,
        name: "DESENTUPIDOR DE TUBULAÇÃO 5 METROS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p78_8.png",
        referencia: "GD-3610",
        codBarras: "7898748661071",
        ncm: "73121090",
        observacoes: "CX COM 60 PCS"
    },

    {
        id: 214201,
        name: "DUCHA HIGIENICA EM ABS CROMADA",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p79_2.png",
        referencia: "01305714",
        codBarras: "7898736840976",
        ncm: "84818099",
        observacoes: "CAIXA MASTER COM 50 PEÇAS"
    },

    {
        id: 214301,
        name: "ELASTICO EXTENSOR 1.5M PACOTE C/ 10 UN. REFORÇADO",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p79_4.png",
        referencia: "UNI-1.5M",
        codBarras: "0700083394637",
        ncm: "56041000",
        observacoes: "CAIXA (FARDO) MASTER 40 PACOTES"
    },

    {
        id: 214401,
        name: "ESCOVA 2 EM 1 - LIMPA MIGALHAS & TIRA PELOS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p79_6.png",
        referencia: "GD-4870",
        codBarras: "7898748661538",
        ncm: "96039000",
        observacoes: "CAIXA MASTER COM 200 PEÇAS"
    },

    {
        id: 214501,
        name: "ESCUMADEIRA - INOX - 32CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p79_8.png",
        referencia: "GD-4490",
        codBarras: "7898748662252",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PACOTES"
    },

    {
        id: 214601,
        name: "ESCUMADEIRA - SILICONE - 28CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p80_2.png",
        referencia: "GD-4600",
        codBarras: "7898748662061",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 214701,
        name: "ESCUMADEIRA PARA FRITURA - INOX - 32CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p80_4.png",
        referencia: "GD-4505",
        codBarras: "7898748662283",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PACOTES"
    },

    {
        id: 214801,
        name: "ESGUICHO 7 JATOS COM ENGATE RÁPIDO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p80_6.png",
        referencia: "GD-4950",
        codBarras: "7898748661606",
        ncm: "84249090",
        observacoes: "CAIXA MASTER 50 PEÇAS"
    },

    {
        id: 214901,
        name: "ESGUICHO P/ MANGUEIRA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p80_8.png",
        referencia: "GD-4960",
        codBarras: "7898748661613",
        ncm: "84249090",
        observacoes: "EM CAIXAS COM 72 PEÇAS"
    },

    {
        id: 215001,
        name: "ESGUICHO P/ MANGUEIRA COM ENGATE RÁPIDO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p81_2.png",
        referencia: "GD-3160",
        codBarras: "7898748660159",
        ncm: "84248990",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 215101,
        name: "ESPREMEDOR DE LIMÃO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p81_4.png",
        referencia: "GD-4930",
        codBarras: "7898748661583",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 215201,
        name: "ESPÁTULA - SILICONE - 28CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p81_6.png",
        referencia: "GD-4615",
        codBarras: "7898748662092",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 215301,
        name: "ESPÁTULA PIZZA - BOLO - INOX - 26CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p81_8.png",
        referencia: "GD-4535",
        codBarras: "7898748662344",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PACOTES"
    },

    {
        id: 215401,
        name: "ESPÁTULA VAZADA - INOX - 35CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p82_2.png",
        referencia: "GD-4495",
        codBarras: "7898748662269",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PACOTES"
    },

    {
        id: 215501,
        name: "ESPÁTULA VAZADA - SILICONE - 28CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p82_4.png",
        referencia: "GD-4625",
        codBarras: "7898748662115",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 215601,
        name: "FACA CABO DECORADO C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p82_6.png",
        referencia: "GD-4150",
        codBarras: "7898748661729",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 215701,
        name: "FACA CABO PLÁSTICO C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p82_8.png",
        referencia: "GD-4110",
        codBarras: "7898748661682",
        ncm: "82119100",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 215801,
        name: "FACA DE COZINHA 6' - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p83_2.png",
        referencia: "GD-4355",
        codBarras: "7898748661842",
        ncm: "82119210",
        observacoes: "CAIXA MASTER 96 PEÇAS"
    },

    {
        id: 215901,
        name: "FACA DE COZINHA 7' - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p83_4.png",
        referencia: "GD-4360",
        codBarras: "7898748661859",
        ncm: "82119210",
        observacoes: "CAIXA MASTER 96 PEÇAS"
    },

    {
        id: 216001,
        name: "FACA DE COZINHA 8' - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p83_6.png",
        referencia: "GD-4365",
        codBarras: "7898748661866",
        ncm: "82119210",
        observacoes: "CAIXA MASTER COM 96 PEÇAS"
    },

    {
        id: 216101,
        name: "FACA EM INOX C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p83_8.png",
        referencia: "GD-4070",
        codBarras: "7898748661644",
        ncm: "82119100",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 216201,
        name: "FACA PARA LEGUMES 3' - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p84_2.png",
        referencia: "GD-4350",
        codBarras: "7898748661835",
        ncm: "82119210",
        observacoes: "CAIXA MASTER COM 144 PEÇAS"
    },

    {
        id: 216301,
        name: "FACA PROFISSIONAL 10' - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p84_4.png",
        referencia: "GD-4395",
        codBarras: "7898748661880",
        ncm: "82119210",
        observacoes: "CAIXA MASTER COM 96 PEÇAS"
    },

    {
        id: 216401,
        name: "FACA PROFISSIONAL 8' - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p84_6.png",
        referencia: "GD-4390",
        codBarras: "7898748661873",
        ncm: "82119210",
        observacoes: "CAIXA MASTER COM 96 PEÇAS"
    },

    {
        id: 216501,
        name: "FATIADOR E DESCASCADOR DE LEGUMES 5 EM 1",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p84_8.png",
        referencia: "SQ-4123",
        codBarras: "7899441531142",
        ncm: "82055100",
        observacoes: "CAIXA MASTER COM 480 PEÇAS"
    },

    {
        id: 216601,
        name: "FILTRO DE CAFÉ EM INOX 120MM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p85_2.png",
        referencia: "GD-4450",
        codBarras: "7898748662207",
        ncm: "73239300",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 216701,
        name: "FILTRO DE CAFÉ EM INOX 130MM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p85_4.png",
        referencia: "GD-4460",
        codBarras: "7898748662214",
        ncm: "73239300",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 216801,
        name: "FURADOR DE COCO SQ",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p85_6.png",
        referencia: "SQ-3194",
        codBarras: "7899441504269",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 216901,
        name: "GARFO CABO DECORADO C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p85_8.png",
        referencia: "GD-4140",
        codBarras: "7898748661712",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 217001,
        name: "GARFO CABO PLÁSTICO C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p86_2.png",
        referencia: "GD-4100",
        codBarras: "7898748661675",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 217101,
        name: "GARFO EM INOX C/ 6 UN. - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p86_4.png",
        referencia: "GD-4060",
        codBarras: "7898748661637",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 60 PACOTES"
    },

    {
        id: 217201,
        name: "KIT 2 TABUAS BRANCAS + FACA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p86_6.png",
        referencia: "GD-4180",
        codBarras: "7898748661750",
        ncm: "39241000",
        observacoes: "CAIXA MASTER COM 24 PEÇAS"
    },

    {
        id: 217301,
        name: "KIT 4 TIGELAS EM INOX COM TAMPA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p86_8.png",
        referencia: "GD-4680",
        codBarras: "7898748662184",
        ncm: "73239300",
        observacoes: "CAIXA MASTER COM 60 KITS"
    },

    {
        id: 217401,
        name: "KIT 5 TIGELAS EM INOX COM TAMPA - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p87_2.png",
        referencia: "GD-4685",
        codBarras: "7898748662191",
        ncm: "73239300",
        observacoes: "CAIXA MASTER COM 48 KITS"
    },

    {
        id: 217501,
        name: "KIT COM 3 GANCHOS MULTIUSO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p87_4.png",
        referencia: "GD-4830",
        codBarras: "7898748661484",
        ncm: "39239090",
        observacoes: "CAIXA MASTER COM 144 PEçAS"
    },

    {
        id: 217601,
        name: "KIT COM 5 GANCHOS MULTIUSO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p87_6.png",
        referencia: "GD-4805",
        codBarras: "7898748661460",
        ncm: "83025000",
        observacoes: "CAIXA MASTER COM 144 PEçAS"
    },

    {
        id: 217701,
        name: "KIT COM 6 GANCHOS MULTIUSO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p87_8.png",
        referencia: "GD-4820",
        codBarras: "7898748661477",
        ncm: "83025000",
        observacoes: "CAIXA MASTER COM 144 PEçAS"
    },

    {
        id: 217801,
        name: "KIT COM 9 GANCHOS MULTIUSO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p88_2.png",
        referencia: "GD-4835",
        codBarras: "7898748661491",
        ncm: "83025000",
        observacoes: "CAIXA MASTER COM 144 PEçAS"
    },

    {
        id: 217901,
        name: "KIT PAPINHA COM 5 PEÇAS",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p88_4.png",
        referencia: "HM-13",
        codBarras: "7898684170248",
        ncm: "39241000",
        observacoes: "CAIXA MASTER COM 80 KITS"
    },

    {
        id: 218001,
        name: "KIT PARA BOLO COM 2 PEÇAS",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p88_6.png",
        referencia: "HM-19",
        codBarras: "7898684170309",
        ncm: "82152000",
        observacoes: "CAIXA MASTER 72 KITS"
    },

    {
        id: 218101,
        name: "KIT PARA CHURRASCO C/ 2 PEÇAS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p88_8.png",
        referencia: "GD-3420",
        codBarras: "7898748660715",
        ncm: "82152000",
        observacoes: "CAIXA MASTER 96 PCS"
    },

    {
        id: 218201,
        name: "KIT PARA CHURRASCO C/ 3 PEÇAS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p89_2.png",
        referencia: "GD-3415",
        codBarras: "7898748660708",
        ncm: "82152000",
        observacoes: "CAIXA MASTER 72 PCS"
    },

    {
        id: 218301,
        name: "KIT PARA QUEIJO 2 PEÇAS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p89_4.png",
        referencia: "GD-5020",
        codBarras: "7898748662412",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 48 PEÇAS"
    },

    {
        id: 218401,
        name: "KIT SILICONE 3 PEÇAS - 4655 - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p89_6.png",
        referencia: "GD-4655",
        codBarras: "7898748662153",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 218501,
        name: "KIT SILICONE 3 PEÇAS - 4660 - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p89_8.png",
        referencia: "GD-4660",
        codBarras: "7898748662160",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 48 PEÇAS"
    },

    {
        id: 218601,
        name: "MACERADOR DE FRUTAS EM INOX 21CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p90_2.png",
        referencia: "GD-4670",
        codBarras: "7898748662177",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 100 PEÇAS"
    },

    {
        id: 218701,
        name: "MASSA COLA - FORT EPOXI 100G",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p90_4.png",
        referencia: "FT-100",
        codBarras: "7898003687778",
        ncm: "35061090",
        observacoes: "CAIXA MASTER 100UN."
    },

    {
        id: 218801,
        name: "MASSA COLA - HIPER EPOXI 100G",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p90_6.png",
        referencia: "HIP-100",
        codBarras: "0070341274927",
        ncm: "35061090",
        observacoes: "CAIXA MASTER 100UN."
    },

    {
        id: 218901,
        name: "MISTURADOR DE BEBIDAS - MIXER PORTATIL -GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p90_8.png",
        referencia: "GD-3775",
        codBarras: "7898748661408",
        ncm: "85098090",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 219001,
        name: "MIXER SEMI AUTOMÁTICO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p91_2.png",
        referencia: "GD-3780",
        codBarras: "7898748661415",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 120 PEÇAS"
    },

    {
        id: 219101,
        name: "MIXER SEMI AUTOMÁTICO - HM",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p91_4.png",
        referencia: "HM-315",
        codBarras: "7898684173393",
        ncm: "82159910"
    },

    {
        id: 219201,
        name: "PEGADOR - SILICONE - 26CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p91_6.png",
        referencia: "GD-4650",
        codBarras: "7898748662146",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 219301,
        name: "PEGADOR DE GELO - INOX - 20CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p91_8.png",
        referencia: "GD-4555",
        codBarras: "7898748662368",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 219401,
        name: "PEGADOR DE MASSAS - INOX - 32CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p92_2.png",
        referencia: "GD-4500",
        codBarras: "7898748662276",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 219501,
        name: "PEGADOR DE MASSAS - SILICONE - 28CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p92_4.png",
        referencia: "GD-4610",
        codBarras: "7898748662085",
        ncm: "39241000",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 219601,
        name: "PEGADOR DE SALADA - INOX - 20CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p92_6.png",
        referencia: "GD-4550",
        codBarras: "7898748662351",
        ncm: "82159910",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 219701,
        name: "PENEIRA DE INOX 12CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p92_8.png",
        referencia: "GD-4200",
        codBarras: "7898748661767",
        ncm: "96040000",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 219801,
        name: "PENEIRA DE INOX 14CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p93_2.png",
        referencia: "GD-4210",
        codBarras: "7898748661774",
        ncm: "96040000",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 219901,
        name: "PENEIRA DE INOX 16CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p93_4.png",
        referencia: "GD-4220",
        codBarras: "7898748661781",
        ncm: "96040000",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 220001,
        name: "PENEIRA DE INOX 18CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p93_6.png",
        referencia: "GD-4230",
        codBarras: "7898748661798",
        ncm: "96040000",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 220101,
        name: "RALADOR 4 FACES 8' 100% INOX - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p93_8.png",
        referencia: "GD-4420",
        codBarras: "7898748661910",
        ncm: "82055100",
        observacoes: "CAIXA MASTER COM 48 PEÇAS"
    },

    {
        id: 220201,
        name: "RALADOR 4 FACES 8' INOX - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p94_2.png",
        referencia: "GD-4415",
        codBarras: "7898748661903",
        ncm: "82055100",
        observacoes: "CAIXA MASTER COM 48 PEÇAS"
    },

    {
        id: 220301,
        name: "RALADOR 6 FACES 8' EM INOX - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p94_4.png",
        referencia: "GD-4410",
        codBarras: "7898748661897",
        ncm: "82055100",
        observacoes: "CAIXA MASTER COM 48 PEÇAS"
    },

    {
        id: 220401,
        name: "RALADOR DE LEGUMES DE AÇO INOX - 30CM",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p94_6.png",
        referencia: "XH-3010",
        codBarras: "7908593514221",
        ncm: "82055100",
        observacoes: "CAIXA MASTER COM 240 PEÇAS"
    },

    {
        id: 220501,
        name: "RALO PARA PIA 5,2CM HM",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p94_8.png",
        referencia: "HM-206",
        codBarras: "7898684172211",
        ncm: "73239300"
    },

    {
        id: 220601,
        name: "RALO PARA PIA 5CM INOX - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p95_2.png",
        referencia: "GD-5050",
        codBarras: "7898748662429",
        ncm: "73249000",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 220701,
        name: "RALO PARA PIA 7CM INOX - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p95_4.png",
        referencia: "GD-5055",
        codBarras: "7898748662436",
        ncm: "73249000",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 220801,
        name: "RALO PARA PIA 9CM INOX - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p95_6.png",
        referencia: "GD-5060",
        codBarras: "7898748662443",
        ncm: "73249000",
        observacoes: "CAIXA MASTER 240 PEÇAS"
    },

    {
        id: 220901,
        name: "REFIL DE GAS P/ FOGAREIROS E MAÇARICOS BULLFIRE",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p95_8.png",
        referencia: "BULL-01",
        codBarras: "7898313930380",
        ncm: "27111300",
        observacoes: "CAIXA MASTER COM 28 LATAS"
    },

    {
        id: 221001,
        name: "REFIL DE GAS P/ FOGAREIROS E MAÇARICOS NAUTIKA",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p96_2.png",
        referencia: "NKT 1129-X",
        codBarras: "7896558413286",
        ncm: "27111300",
        observacoes: "CX COM 28"
    },

    {
        id: 221101,
        name: "RODAS / RODIZIO 4UN. REFORÇADO 1,5' - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p96_4.png",
        referencia: "GD-3300",
        codBarras: "7898748660425",
        ncm: "83022000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 221201,
        name: "RODAS / RODIZIO 4UN. REFORÇADO 1,5' C/ FREIO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p96_6.png",
        referencia: "GD-3305",
        codBarras: "7898748660432",
        ncm: "83022000",
        observacoes: "CAIXA MASTER 60 PEÇAS"
    },

    {
        id: 221301,
        name: "RODAS / RODIZIO 4UN. REFORÇADO 2' - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p96_8.png",
        referencia: "GD-3310",
        codBarras: "7898748660449",
        ncm: "83022000",
        observacoes: "CAIXA MASTER 30 PEÇAS"
    },

    {
        id: 221401,
        name: "ROLO TIRA PELOS + 2 REFIS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p97_2.png",
        referencia: "GD-4860",
        codBarras: "7898748661514",
        ncm: "96039000",
        observacoes: "CAIXA MASTER COM 144 PEÇAS"
    },

    {
        id: 221501,
        name: "ROLO TIRA PELOS - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p97_4.png",
        referencia: "GD-4865",
        codBarras: "7898748661521",
        ncm: "96039000",
        observacoes: "CAIXA MASTER COM 288 PEÇAS"
    },

    {
        id: 221601,
        name: "ROLO TIRA PELOS EM SILICONE LAVÁVEL - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p97_6.png",
        referencia: "GD-4875",
        codBarras: "7898748661545",
        ncm: "96039000",
        observacoes: "CAIXA MASTER COM 160 PEÇAS"
    },

    {
        id: 221701,
        name: "SACA ROLHAS PROFISSIONAL - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p97_8.png",
        referencia: "GD-5010",
        codBarras: "7898748662405",
        ncm: "82055100",
        observacoes: "CAIXA MASTER 72 PEÇAS"
    },

    {
        id: 221801,
        name: "SUPORTE COM 3 GANCHOS MULTIUSO - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p98_2.png",
        referencia: "GD-4800",
        codBarras: "7898748661453",
        ncm: "83025000",
        observacoes: "CAIXA MASTER COM 144 PEçAS"
    },

    {
        id: 221901,
        name: "TABUA DE CORTE - BAMBU 22X32CM",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p98_4.png",
        referencia: "GD-4700",
        codBarras: "7898748661422",
        ncm: "44191100",
        observacoes: "CAIXA MASTER 30 PEÇAS"
    },

    {
        id: 222001,
        name: "TABUA DE PLÁSTICO - 33X20CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p98_6.png",
        referencia: "GD-4160",
        codBarras: "7898748661736",
        ncm: "39241000",
        observacoes: "CAIXA MASTER COM 48 PEÇAS"
    },

    {
        id: 222101,
        name: "TABUA DE PLÁSTICO - 37X23CM - GADAN",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p98_8.png",
        referencia: "GD-4170",
        codBarras: "7898748661743",
        ncm: "39241000",
        observacoes: "CAIXA MASTER COM 36 PEÇAS"
    },

    {
        id: 222201,
        name: "TORNEIRA BICA MÓVEL - PAREDE - ABS BRANCA - 803",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p99_2.png",
        referencia: "01305803",
        codBarras: "7898736840068",
        ncm: "84818099",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 222301,
        name: "TORNEIRA BICA MÓVEL - PAREDE - ABS CROMADA- 903",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p99_4.png",
        referencia: "01305903",
        codBarras: "7898736840037",
        ncm: "84818099",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 222401,
        name: "TORNEIRA BICA MÓVEL - PAREDE - ABS CROMADA- 905",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p99_6.png",
        referencia: "01305905",
        codBarras: "7898736840044",
        ncm: "84818099",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 222501,
        name: "TORNEIRA PARA TANQUE - ABS BRANCA - 613",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p99_8.png",
        referencia: "01305613",
        codBarras: "7898736840327",
        ncm: "84818099",
        observacoes: "CAIXA MASTER COM 144 PEÇAS"
    },

    {
        id: 222601,
        name: "TORNEIRA PARA TANQUE - ABS BRANCA - 624",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p100_2.png",
        referencia: "01304624",
        codBarras: "7898736840334",
        ncm: "84818099",
        observacoes: "CAIXA MASTER COM 100 PEÇAS"
    },

    {
        id: 222701,
        name: "TORNEIRA PARA TANQUE - ABS CROMADA - 390",
        category: "utilidades",
        price: 0,
        image: "imagens_produtos/produto_p100_4.png",
        referencia: "01304390",
        codBarras: "7898736840297",
        ncm: "84818099",
        observacoes: "CAIXA MASTER COM 144 PEÇAS"
    }
];

// Lista de categorias para filtros
const categories = [
    { id: "acessorios_bike", name: "Acessórios P/ Bike" },
    { id: "acessorios_tv", name: "Acessórios P/ TV's" },
    { id: "adaptadores_eletricos", name: "Adaptadores Elétricos" },
    { id: "ferramentas", name: "Ferramentas" },
    { id: "brinquedos", name: "Brinquedos" },
    { id: "higiene_pessoal", name: "Higiene Pessoal" },
    { id: "papelaria", name: "Papelaria" },
    { id: "pilhas_baterias", name: "Pilhas & Baterias" },
    { id: "utilidades", name: "Utilidades" },
    { id: "automotivo", name: "Automotivo" },
    { id: "cozinha", name: "Cozinha" },
    { id: "eletronicos", name: "Eletrônicos" },
    { id: "outros", name: "Outros" }
];

// Para uso em Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, categories };
}