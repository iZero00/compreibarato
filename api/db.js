const fs = require('fs').promises;
const path = require('path');

// Caminho para o arquivo db.json
const dbPath = path.join(process.cwd(), 'db.json');

// Função para ler o banco de dados
async function readDatabase() {
    try {
        const data = await fs.readFile(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // Se o arquivo não existir, criar banco padrão
        const defaultDB = {
            users: [
                {
                    id: 1,
                    username: "admin",
                    password: "admin123",
                    role: "admin",
                    created_at: new Date().toISOString()
                }
            ],
            products: [
                {
                    id: 1,
                    name: "Fone Bluetooth Wireless",
                    category: "fones",
                    description: "Fone de ouvido bluetooth com cancelamento de ruído",
                    price: "R$ 89,90",
                    link: "https://shopee.com.br/fone-bluetooth",
                    image: "assets/icons/audio.png",
                    active: true,
                    created_at: new Date().toISOString()
                },
                {
                    id: 2,
                    name: "Smartphone Android",
                    category: "eletronicos",
                    description: "Smartphone com câmera de 48MP e bateria de 5000mAh",
                    price: "R$ 1.299,90",
                    link: "https://shopee.com.br/smartphone",
                    image: "assets/icons/eletronicos.png",
                    active: true,
                    created_at: new Date().toISOString()
                }
            ],
            categories: [
                { id: "fones", name: "Fones", icon: "assets/icons/audio.png" },
                { id: "eletronicos", name: "Eletrônicos", icon: "assets/icons/eletronicos.png" },
                { id: "ferramentas", name: "Ferramentas", icon: "assets/icons/ferramentas.png" },
                { id: "gamer", name: "Gamer", icon: "assets/icons/gamer.png" },
                { id: "pets", name: "Pets", icon: "assets/icons/pets.png" },
                { id: "roupas", name: "Roupas", icon: "assets/icons/roupas.png" },
                { id: "utensilios", name: "Utensílios", icon: "assets/icons/utensilios.png" },
                { id: "cabos", name: "Cabos", icon: "assets/icons/cabos.png" }
            ]
        };
        
        await fs.writeFile(dbPath, JSON.stringify(defaultDB, null, 2));
        return defaultDB;
    }
}

// Função para escrever no banco de dados
async function writeDatabase(data) {
    try {
        await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
        console.log('✅ Banco de dados salvo com sucesso');
        return true;
    } catch (error) {
        console.error('❌ Erro ao escrever no banco:', error);
        return false;
    }
}

module.exports = async (req, res) => {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Responder a requisições OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        switch (req.method) {
            case 'GET':
                // Ler banco de dados
                const data = await readDatabase();
                res.status(200).json(data);
                break;

            case 'PUT':
                // Atualizar banco de dados
                console.log('📝 Recebendo dados para salvar:', req.body);
                const success = await writeDatabase(req.body);
                if (success) {
                    res.status(200).json({ 
                        success: true, 
                        message: '✅ Banco atualizado com sucesso! Todos verão as mudanças.',
                        timestamp: new Date().toISOString()
                    });
                } else {
                    res.status(500).json({ 
                        error: '❌ Erro ao atualizar banco de dados',
                        timestamp: new Date().toISOString()
                    });
                }
                break;

            default:
                res.status(405).json({ error: 'Método não permitido' });
        }
    } catch (error) {
        console.error('Erro na API:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
