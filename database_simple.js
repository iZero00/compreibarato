// Database Manager Simplificado
class DatabaseManager {
    constructor() {
        this.database = null;
        this.init();
    }

    // Inicializar o banco de dados
    init() {
        try {
            this.loadFromLocalStorage();
            if (!this.database) {
                this.createDefaultDatabase();
            }
        } catch (error) {
            console.error('Erro ao inicializar banco de dados:', error);
            this.createDefaultDatabase();
        }
    }

    // Carregar do localStorage
    loadFromLocalStorage() {
        const stored = localStorage.getItem('compreibarato_database');
        if (stored) {
            this.database = JSON.parse(stored);
        }
    }

    // Criar banco de dados padrão
    createDefaultDatabase() {
        this.database = {
            site_info: {
                name: "Comprei Barato",
                description: "Descubra as melhores ofertas da Shopee em um só lugar",
                version: "1.0.0",
                last_updated: new Date().toISOString().split('T')[0]
            },
            categories: {
                pets: {
                    name: "Pets",
                    description: "Produtos para seus melhores amigos",
                    icon: "assets/icons/pets.png",
                    color: "#ff9a9e",
                    active: true
                },
                fones: {
                    name: "Fones",
                    description: "Fones de ouvido e acessórios de áudio",
                    icon: "assets/icons/audio.png",
                    color: "#a8edea",
                    active: true
                },
                eletronicos: {
                    name: "Eletrônicos",
                    description: "Os melhores produtos de tecnologia",
                    icon: "assets/icons/eletronicos.png",
                    color: "#ffecd2",
                    active: true
                },
                gamer: {
                    name: "Gamer",
                    description: "Produtos para gamers de verdade",
                    icon: "assets/icons/gamer.png",
                    color: "#ff9a9e",
                    active: true
                },
                utensilios: {
                    name: "Utensílios",
                    description: "Utensílios para casa e cozinha",
                    icon: "assets/icons/utensilios.png",
                    color: "#a8edea",
                    active: true
                },
                roupas: {
                    name: "Roupas",
                    description: "Roupas e acessórios para todos os estilos",
                    icon: "assets/icons/roupas.png",
                    color: "#ffecd2",
                    active: true
                },
                cabos: {
                    name: "Cabos",
                    description: "Cabos e conectores de qualidade",
                    icon: "assets/icons/cabos.png",
                    color: "#ff9a9e",
                    active: true
                },
                ferramentas: {
                    name: "Ferramentas",
                    description: "Ferramentas profissionais e domésticas",
                    icon: "assets/icons/ferramentas.png",
                    color: "#a8edea",
                    active: true
                }
            },
            products: [
                {
                    id: 1,
                    name: "Ração Premium para Cães",
                    category: "pets",
                    link: "https://shopee.com.br/racao-caes",
                    image: "assets/icons/pets.png",
                    imageUrl: null,
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                },
                {
                    id: 2,
                    name: "Fones Bluetooth Wireless",
                    category: "fones",
                    link: "https://shopee.com.br/fones-bluetooth",
                    image: "assets/icons/audio.png",
                    imageUrl: null,
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                },
                {
                    id: 3,
                    name: "Smartphone Android",
                    category: "eletronicos",
                    link: "https://shopee.com.br/smartphone",
                    image: "assets/icons/eletronicos.png",
                    imageUrl: null,
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                },
                {
                    id: 4,
                    name: "Boneco Labubu vinil",
                    category: "eletronicos",
                    link: "https://shopee.com.br/boneco-labubu",
                    image: "assets/icons/eletronicos.png",
                    imageUrl: "https://down-br.img.susercontent.com/file/br-11134207-7rndo-lhxqjqjqjqjqjq",
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                },
                {
                    id: 5,
                    name: "Mouse Gamer RGB",
                    category: "gamer",
                    link: "https://shopee.com.br/mouse-gamer",
                    image: "assets/icons/gamer.png",
                    imageUrl: null,
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                },
                {
                    id: 6,
                    name: "Kit de Panelas Antiaderente",
                    category: "utensilios",
                    link: "https://shopee.com.br/kit-panelas",
                    image: "assets/icons/utensilios.png",
                    imageUrl: null,
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                },
                {
                    id: 7,
                    name: "Camiseta Básica",
                    category: "roupas",
                    link: "https://shopee.com.br/camiseta-basica",
                    image: "assets/icons/roupas.png",
                    imageUrl: null,
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                },
                {
                    id: 8,
                    name: "Cabo USB-C",
                    category: "cabos",
                    link: "https://shopee.com.br/cabo-usb-c",
                    image: "assets/icons/cabos.png",
                    imageUrl: null,
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                },
                {
                    id: 9,
                    name: "Furadeira Elétrica",
                    category: "ferramentas",
                    link: "https://shopee.com.br/furadeira-eletrica",
                    image: "assets/icons/ferramentas.png",
                    imageUrl: null,
                    created_at: "2024-12-19T10:00:00Z",
                    updated_at: "2024-12-19T10:00:00Z",
                    active: true
                }
            ],
            settings: {
                theme: {
                    primary_color: "#667eea",
                    secondary_color: "#764ba2",
                    background_gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    text_color: "#2d3748",
                    accent_color: "#ff6b35"
                },
                display: {
                    show_prices: false,
                    show_descriptions: true,
                    show_category_icons: true,
                    products_per_page: 12,
                    auto_refresh_interval: 5000
                },
                admin: {
                    session_timeout: 3600,
                    max_products_per_category: 50,
                    allow_image_uploads: true,
                    backup_interval: 86400
                }
            },
            analytics: {
                total_products: 9,
                total_categories: 8,
                most_viewed_category: "eletronicos",
                last_backup: new Date().toISOString(),
                site_visits: 0
            },
            backup: {
                last_backup_date: new Date().toISOString(),
                backup_frequency: "daily",
                backup_location: "./backups/",
                auto_backup: true
            },
            auth: {
                admin_credentials: {
                    username: "admin",
                    password_hash: "5525bb73",
                    salt: "compreibarato2024",
                    created_at: new Date().toISOString(),
                    last_login: null,
                    active: true,
                    login_attempts: 0,
                    lockout_until: null
                },
                session_timeout: 3600,
                max_login_attempts: 5,
                lockout_duration: 900
            }
        };
        
        this.saveToLocalStorage();
    }

    // Salvar no localStorage
    saveToLocalStorage() {
        try {
            localStorage.setItem('compreibarato_database', JSON.stringify(this.database));
            return true;
        } catch (error) {
            console.error('Erro ao salvar no localStorage:', error);
            return false;
        }
    }

    // Exportar dados do banco
    async exportDatabase() {
        return {
            ...this.database,
            exported_at: new Date().toISOString(),
            version: "1.0.0"
        };
    }

    // Importar dados para o banco
    async importDatabase(importedData) {
        try {
            // Validar estrutura básica
            if (!importedData || typeof importedData !== 'object') {
                throw new Error('Dados inválidos');
            }

            // Verificar se tem as propriedades essenciais
            if (!importedData.products || !importedData.categories) {
                throw new Error('Arquivo não contém dados válidos do banco');
            }

            // Fazer backup dos dados atuais
            const currentData = { ...this.database };

            // Aplicar dados importados
            this.database = {
                ...this.database,
                ...importedData,
                imported_at: new Date().toISOString()
            };

            // Salvar no localStorage
            if (!this.saveToLocalStorage()) {
                // Se falhar, restaurar dados anteriores
                this.database = currentData;
                throw new Error('Erro ao salvar dados importados');
            }

            return true;
        } catch (error) {
            console.error('Erro ao importar dados:', error);
            throw error;
        }
    }

    // Hash de senha
    hashPassword(password, salt = "compreibarato2024") {
        let hash = 0;
        const str = password + salt;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16);
    }

    // Verificar credenciais
    async verifyCredentials(username, password) {
        const credentials = this.database.auth.admin_credentials;
        
        // Verificar se está bloqueado
        if (credentials.lockout_until && new Date() < new Date(credentials.lockout_until)) {
            return { success: false, message: "Conta temporariamente bloqueada. Tente novamente mais tarde." };
        }
        
        // Verificar credenciais
        const hashedPassword = this.hashPassword(password, credentials.salt);
        if (username === credentials.username && hashedPassword === credentials.password_hash) {
            // Reset tentativas de login
            credentials.login_attempts = 0;
            credentials.lockout_until = null;
            credentials.last_login = new Date().toISOString();
            this.saveToLocalStorage();
            
            return { success: true, message: "Login realizado com sucesso!" };
        } else {
            // Incrementar tentativas de login
            credentials.login_attempts++;
            
            // Verificar se deve bloquear
            if (credentials.login_attempts >= this.database.auth.max_login_attempts) {
                const lockoutTime = new Date();
                lockoutTime.setSeconds(lockoutTime.getSeconds() + this.database.auth.lockout_duration);
                credentials.lockout_until = lockoutTime.toISOString();
            }
            
            this.saveToLocalStorage();
            
            return { 
                success: false, 
                message: `Credenciais inválidas. Tentativas restantes: ${Math.max(0, this.database.auth.max_login_attempts - credentials.login_attempts)}` 
            };
        }
    }

    // Criar sessão
    createSession() {
        const sessionData = {
            token: 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            created_at: new Date().toISOString(),
            user: 'admin'
        };
        sessionStorage.setItem('admin_session', JSON.stringify(sessionData));
        return sessionData;
    }

    // Obter produtos
    async getAllProducts() {
        return this.database.products.filter(product => product.active);
    }

    // Obter categorias
    async getAllCategories() {
        return Object.keys(this.database.categories).map(key => ({
            id: key,
            ...this.database.categories[key]
        }));
    }

    // Adicionar produto
    async addProduct(productData) {
        const newProduct = {
            id: this.getNextProductId(),
            name: productData.name,
            category: productData.category,
            link: productData.link,
            image: productData.image || null,
            imageUrl: productData.image || null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            active: true
        };
        
        this.database.products.push(newProduct);
        this.saveToLocalStorage();
        return newProduct;
    }

    // Adicionar categoria
    async addCategory(categoryData) {
        const categoryId = this.generateCategoryId(categoryData.name);
        
        this.database.categories[categoryId] = {
            name: categoryData.name,
            description: categoryData.description || '',
            icon: categoryData.icon || 'assets/icons/default.png',
            color: categoryData.color || '#ff9a9e',
            active: true
        };
        
        this.saveToLocalStorage();
        return { id: categoryId, ...this.database.categories[categoryId] };
    }

    // Obter próximo ID de produto
    getNextProductId() {
        const maxId = Math.max(...this.database.products.map(p => p.id), 0);
        return maxId + 1;
    }

    // Gerar ID de categoria
    generateCategoryId(name) {
        return name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    }
}

// Criar instância global
const dbManager = new DatabaseManager();

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.dbManager = dbManager;
}
