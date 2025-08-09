// Database Manager - Sistema de Gerenciamento de Banco de Dados
class DatabaseManager {
    constructor() {
        this.database = null;
        this.databasePath = './database.json';
        this.init();
    }

    // Inicializar o banco de dados
    async init() {
        try {
            await this.loadDatabase();
        } catch (error) {
            console.error('Erro ao inicializar banco de dados:', error);
            this.createDefaultDatabase();
        }
    }

    // Carregar banco de dados do arquivo JSON
    async loadDatabase() {
        try {
            const response = await fetch(this.databasePath);
            if (!response.ok) {
                throw new Error('Arquivo database.json não encontrado');
            }
            this.database = await response.json();
        } catch (error) {
            console.error('Erro ao carregar banco de dados:', error);
            this.createDefaultDatabase();
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
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    active: true
                },
                {
                    id: 2,
                    name: "Fones Bluetooth Wireless",
                    category: "fones",
                    link: "https://shopee.com.br/fones-bluetooth",
                    image: "assets/icons/audio.png",
                    imageUrl: null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    active: true
                },
                {
                    id: 3,
                    name: "Smartphone Android",
                    category: "eletronicos",
                    link: "https://shopee.com.br/smartphone",
                    image: "assets/icons/eletronicos.png",
                    imageUrl: null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    active: true
                },
                {
                    id: 4,
                    name: "Boneco Labubu vinil",
                    category: "eletronicos",
                    link: "https://shopee.com.br/boneco-labubu",
                    image: "assets/icons/eletronicos.png",
                    imageUrl: "https://down-br.img.susercontent.com/file/br-11134207-7rndo-lhxqjqjqjqjqjq",
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    active: true
                },
                {
                    id: 5,
                    name: "Mouse Gamer RGB",
                    category: "gamer",
                    link: "https://shopee.com.br/mouse-gamer",
                    image: "assets/icons/gamer.png",
                    imageUrl: null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    active: true
                },
                {
                    id: 6,
                    name: "Kit de Panelas Antiaderente",
                    category: "utensilios",
                    link: "https://shopee.com.br/kit-panelas",
                    image: "assets/icons/utensilios.png",
                    imageUrl: null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    active: true
                },
                {
                    id: 7,
                    name: "Camiseta Básica",
                    category: "roupas",
                    link: "https://shopee.com.br/camiseta-basica",
                    image: "assets/icons/roupas.png",
                    imageUrl: null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    active: true
                },
                {
                    id: 8,
                    name: "Cabo USB-C",
                    category: "cabos",
                    link: "https://shopee.com.br/cabo-usb-c",
                    image: "assets/icons/cabos.png",
                    imageUrl: null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    active: true
                },
                {
                    id: 9,
                    name: "Furadeira Elétrica",
                    category: "ferramentas",
                    link: "https://shopee.com.br/furadeira-eletrica",
                    image: "assets/icons/ferramentas.png",
                    imageUrl: null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
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
    }

    // Salvar banco de dados
    async saveDatabase() {
        try {
            // Atualizar analytics
            this.database.analytics.total_products = this.database.products.length;
            this.database.analytics.last_backup = new Date().toISOString();
            
            // Em um ambiente real, aqui seria feita uma requisição POST para salvar
            // Por enquanto, vamos simular salvamento no localStorage
            localStorage.setItem('compreibarato_database', JSON.stringify(this.database));
            return true;
        } catch (error) {
            console.error('Erro ao salvar banco de dados:', error);
            return false;
        }
    }

    // CRUD de Produtos
    async getAllProducts() {
        return this.database.products.filter(product => product.active);
    }

    async getProductById(id) {
        return this.database.products.find(product => product.id === id && product.active);
    }

    async addProduct(productData) {
        const newProduct = {
            id: this.getNextProductId(),
            ...productData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            active: true
        };
        
        this.database.products.push(newProduct);
        await this.saveDatabase();
        return newProduct;
    }

    async updateProduct(id, productData) {
        const productIndex = this.database.products.findIndex(p => p.id === id);
        if (productIndex !== -1) {
            this.database.products[productIndex] = {
                ...this.database.products[productIndex],
                ...productData,
                updated_at: new Date().toISOString()
            };
            await this.saveDatabase();
            return this.database.products[productIndex];
        }
        return null;
    }

    async deleteProduct(id) {
        const productIndex = this.database.products.findIndex(p => p.id === id);
        if (productIndex !== -1) {
            this.database.products[productIndex].active = false;
            await this.saveDatabase();
            return true;
        }
        return false;
    }

    // CRUD de Categorias
    async getAllCategories() {
        return Object.keys(this.database.categories).map(key => ({
            id: key,
            ...this.database.categories[key]
        }));
    }

    async getCategoryById(id) {
        return this.database.categories[id] || null;
    }

    async addCategory(categoryData) {
        const categoryId = categoryData.id || this.generateCategoryId(categoryData.name);
        this.database.categories[categoryId] = {
            ...categoryData,
            active: true
        };
        await this.saveDatabase();
        return this.database.categories[categoryId];
    }

    async updateCategory(id, categoryData) {
        if (this.database.categories[id]) {
            this.database.categories[id] = {
                ...this.database.categories[id],
                ...categoryData
            };
            await this.saveDatabase();
            return this.database.categories[id];
        }
        return null;
    }

    async deleteCategory(id) {
        if (this.database.categories[id]) {
            this.database.categories[id].active = false;
            await this.saveDatabase();
            return true;
        }
        return false;
    }

    // Configurações
    async getSettings() {
        return this.database.settings;
    }

    async updateSettings(settings) {
        this.database.settings = {
            ...this.database.settings,
            ...settings
        };
        await this.saveDatabase();
        return this.database.settings;
    }

    // Analytics
    async getAnalytics() {
        return this.database.analytics;
    }

    async updateAnalytics(analytics) {
        this.database.analytics = {
            ...this.database.analytics,
            ...analytics
        };
        await this.saveDatabase();
        return this.database.analytics;
    }

    // Backup
    async createBackup() {
        const backup = {
            timestamp: new Date().toISOString(),
            data: JSON.parse(JSON.stringify(this.database))
        };
        
        // Em um ambiente real, aqui seria salvo em arquivo
        localStorage.setItem('compreibarato_backup_' + Date.now(), JSON.stringify(backup));
        
        this.database.backup.last_backup_date = new Date().toISOString();
        await this.saveDatabase();
        
        return backup;
    }

    // Autenticação
    hashPassword(password, salt = "compreibarato2024") {
        // Hash simples para demonstração (em produção, usar bcrypt ou similar)
        let hash = 0;
        const str = password + salt;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash).toString(16);
    }

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
            await this.saveDatabase();
            
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
            
            await this.saveDatabase();
            
            return { 
                success: false, 
                message: `Credenciais inválidas. Tentativas restantes: ${Math.max(0, this.database.auth.max_login_attempts - credentials.login_attempts)}` 
            };
        }
    }

    generateSessionToken() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    validateSession(sessionToken) {
        // Em um ambiente real, verificar token no servidor
        const session = sessionStorage.getItem('admin_session');
        if (session) {
            const sessionData = JSON.parse(session);
            const now = new Date();
            const sessionTime = new Date(sessionData.created_at);
            const diffInSeconds = (now - sessionTime) / 1000;
            
            return diffInSeconds < this.database.auth.session_timeout;
        }
        return false;
    }

    createSession() {
        const sessionData = {
            token: this.generateSessionToken(),
            created_at: new Date().toISOString(),
            user: 'admin'
        };
        sessionStorage.setItem('admin_session', JSON.stringify(sessionData));
        return sessionData;
    }

    destroySession() {
        sessionStorage.removeItem('admin_session');
    }

    // Função de mudança de senha DESABILITADA por segurança
    async changePassword(newPassword) {
        // DESABILITADO: Previne manipulação via console
        console.warn('Função changePassword foi desabilitada por segurança.');
        return { success: false, message: "Função desabilitada por segurança." };
    }

    // Obter informações de autenticação (sem dados sensíveis)
    getAuthInfo() {
        const credentials = this.database.auth.admin_credentials;
        return {
            username: credentials.username,
            last_login: credentials.last_login,
            login_attempts: credentials.login_attempts,
            lockout_until: credentials.lockout_until,
            active: credentials.active
        };
    }

    // Utilitários
    getNextProductId() {
        const maxId = Math.max(...this.database.products.map(p => p.id), 0);
        return maxId + 1;
    }

    generateCategoryId(name) {
        return name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    }

    // Sanitização de dados
    sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        return input.replace(/[<>\"'&]/g, '').trim();
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Criar instância global
const dbManager = new DatabaseManager();

// PROTEGER OBJETOS CONTRA MANIPULAÇÃO VIA CONSOLE
Object.freeze(DatabaseManager.prototype);
Object.freeze(dbManager);

// Desabilitar console.log para dados sensíveis
const originalConsoleLog = console.log;
console.log = function(...args) {
    const message = args.join(' ');
    if (message.includes('password') || message.includes('hash') || message.includes('salt')) {
        return; // Não logar informações sensíveis
    }
    originalConsoleLog.apply(console, args);
};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.dbManager = dbManager;
}
