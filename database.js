/**
 * Database Manager for Comprei Barato
 * Gerencia o banco de dados JSON do site
 */

class DatabaseManager {
    constructor() {
        this.database = null;
        this.filePath = './database.json';
        this.backupPath = './backups/';
    }

    /**
     * Carrega o banco de dados do arquivo JSON
     */
    async loadDatabase() {
        try {
            const response = await fetch(this.filePath);
            this.database = await response.json();
            return this.database;
        } catch (error) {
            console.error('Erro ao carregar banco de dados:', error);
            return this.createDefaultDatabase();
        }
    }

    /**
     * Cria um banco de dados padrão
     */
    createDefaultDatabase() {
        this.database = {
            site_info: {
                name: "Comprei Barato",
                description: "Descubra as melhores ofertas da Shopee em um só lugar",
                version: "1.0.0",
                last_updated: new Date().toISOString()
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
            products: [],
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
                total_products: 0,
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
            }
        };
        return this.database;
    }

    /**
     * Salva o banco de dados no arquivo JSON
     */
    async saveDatabase() {
        try {
            this.database.site_info.last_updated = new Date().toISOString();
            this.database.analytics.total_products = this.database.products.length;
            
            const response = await fetch(this.filePath, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.database, null, 2)
            });
            
            if (response.ok) {
                console.log('Banco de dados salvo com sucesso');
                return true;
            } else {
                throw new Error('Erro ao salvar banco de dados');
            }
        } catch (error) {
            console.error('Erro ao salvar banco de dados:', error);
            return false;
        }
    }

    /**
     * Adiciona um novo produto
     */
    async addProduct(productData) {
        if (!this.database) {
            await this.loadDatabase();
        }

        const newProduct = {
            id: this.getNextProductId(),
            name: productData.name,
            category: productData.category,
            link: productData.link,
            image: productData.image,
            imageUrl: productData.imageUrl || null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            active: true
        };

        this.database.products.push(newProduct);
        await this.saveDatabase();
        return newProduct;
    }

    /**
     * Edita um produto existente
     */
    async editProduct(productId, productData) {
        if (!this.database) {
            await this.loadDatabase();
        }

        const productIndex = this.database.products.findIndex(p => p.id === productId);
        if (productIndex === -1) {
            throw new Error('Produto não encontrado');
        }

        this.database.products[productIndex] = {
            ...this.database.products[productIndex],
            ...productData,
            updated_at: new Date().toISOString()
        };

        await this.saveDatabase();
        return this.database.products[productIndex];
    }

    /**
     * Remove um produto
     */
    async deleteProduct(productId) {
        if (!this.database) {
            await this.loadDatabase();
        }

        const productIndex = this.database.products.findIndex(p => p.id === productId);
        if (productIndex === -1) {
            throw new Error('Produto não encontrado');
        }

        this.database.products.splice(productIndex, 1);
        await this.saveDatabase();
        return true;
    }

    /**
     * Obtém todos os produtos
     */
    async getAllProducts() {
        if (!this.database) {
            await this.loadDatabase();
        }
        return this.database.products.filter(product => product.active);
    }

    /**
     * Obtém produtos por categoria
     */
    async getProductsByCategory(category) {
        if (!this.database) {
            await this.loadDatabase();
        }
        return this.database.products.filter(product => 
            product.category === category && product.active
        );
    }

    /**
     * Obtém um produto específico
     */
    async getProduct(productId) {
        if (!this.database) {
            await this.loadDatabase();
        }
        return this.database.products.find(p => p.id === productId && p.active);
    }

    /**
     * Obtém todas as categorias
     */
    async getAllCategories() {
        if (!this.database) {
            await this.loadDatabase();
        }
        return Object.keys(this.database.categories).filter(key => 
            this.database.categories[key].active
        );
    }

    /**
     * Obtém informações de uma categoria
     */
    async getCategory(categoryKey) {
        if (!this.database) {
            await this.loadDatabase();
        }
        return this.database.categories[categoryKey];
    }

    /**
     * Adiciona uma nova categoria
     */
    async addCategory(categoryKey, categoryData) {
        if (!this.database) {
            await this.loadDatabase();
        }

        this.database.categories[categoryKey] = {
            name: categoryData.name,
            description: categoryData.description,
            icon: categoryData.icon,
            color: categoryData.color,
            active: true
        };

        await this.saveDatabase();
        return this.database.categories[categoryKey];
    }

    /**
     * Edita uma categoria existente
     */
    async editCategory(categoryKey, categoryData) {
        if (!this.database) {
            await this.loadDatabase();
        }

        if (!this.database.categories[categoryKey]) {
            throw new Error('Categoria não encontrada');
        }

        this.database.categories[categoryKey] = {
            ...this.database.categories[categoryKey],
            ...categoryData
        };

        await this.saveDatabase();
        return this.database.categories[categoryKey];
    }

    /**
     * Remove uma categoria
     */
    async deleteCategory(categoryKey) {
        if (!this.database) {
            await this.loadDatabase();
        }

        if (!this.database.categories[categoryKey]) {
            throw new Error('Categoria não encontrada');
        }

        // Remove a categoria
        delete this.database.categories[categoryKey];

        // Remove produtos da categoria
        this.database.products = this.database.products.filter(
            product => product.category !== categoryKey
        );

        await this.saveDatabase();
        return true;
    }

    /**
     * Obtém configurações do site
     */
    async getSettings() {
        if (!this.database) {
            await this.loadDatabase();
        }
        return this.database.settings;
    }

    /**
     * Atualiza configurações do site
     */
    async updateSettings(newSettings) {
        if (!this.database) {
            await this.loadDatabase();
        }

        this.database.settings = {
            ...this.database.settings,
            ...newSettings
        };

        await this.saveDatabase();
        return this.database.settings;
    }

    /**
     * Obtém estatísticas do site
     */
    async getAnalytics() {
        if (!this.database) {
            await this.loadDatabase();
        }
        return this.database.analytics;
    }

    /**
     * Atualiza estatísticas
     */
    async updateAnalytics(analyticsData) {
        if (!this.database) {
            await this.loadDatabase();
        }

        this.database.analytics = {
            ...this.database.analytics,
            ...analyticsData
        };

        await this.saveDatabase();
        return this.database.analytics;
    }

    /**
     * Cria backup do banco de dados
     */
    async createBackup() {
        if (!this.database) {
            await this.loadDatabase();
        }

        const backupData = {
            ...this.database,
            backup: {
                ...this.database.backup,
                last_backup_date: new Date().toISOString()
            }
        };

        const backupFileName = `backup_${new Date().toISOString().split('T')[0]}.json`;
        const backupPath = `${this.backupPath}${backupFileName}`;

        try {
            // Em um ambiente real, você salvaria o arquivo aqui
            console.log('Backup criado:', backupPath);
            this.database.backup.last_backup_date = new Date().toISOString();
            await this.saveDatabase();
            return backupPath;
        } catch (error) {
            console.error('Erro ao criar backup:', error);
            return null;
        }
    }

    /**
     * Restaura backup do banco de dados
     */
    async restoreBackup(backupPath) {
        try {
            const response = await fetch(backupPath);
            const backupData = await response.json();
            
            this.database = backupData;
            await this.saveDatabase();
            
            console.log('Backup restaurado com sucesso');
            return true;
        } catch (error) {
            console.error('Erro ao restaurar backup:', error);
            return false;
        }
    }

    /**
     * Gera próximo ID de produto
     */
    getNextProductId() {
        if (!this.database || !this.database.products.length) {
            return 1;
        }
        return Math.max(...this.database.products.map(p => p.id)) + 1;
    }

    /**
     * Sincroniza com localStorage (para compatibilidade)
     */
    async syncWithLocalStorage() {
        const localStorageProducts = JSON.parse(localStorage.getItem('collshop_products')) || [];
        
        if (localStorageProducts.length > 0) {
            // Migra produtos do localStorage para o banco JSON
            for (const product of localStorageProducts) {
                await this.addProduct({
                    name: product.name,
                    category: product.category,
                    link: product.link,
                    image: product.image,
                    imageUrl: product.imageUrl
                });
            }
            
            // Limpa localStorage após migração
            localStorage.removeItem('collshop_products');
            console.log('Produtos migrados do localStorage para o banco JSON');
        }
    }

    /**
     * Exporta dados para JSON
     */
    exportToJSON() {
        if (!this.database) {
            return null;
        }
        return JSON.stringify(this.database, null, 2);
    }

    /**
     * Importa dados de JSON
     */
    async importFromJSON(jsonData) {
        try {
            const importedData = JSON.parse(jsonData);
            this.database = importedData;
            await this.saveDatabase();
            console.log('Dados importados com sucesso');
            return true;
        } catch (error) {
            console.error('Erro ao importar dados:', error);
            return false;
        }
    }

    /**
     * Função simples de hash para senha (em produção, use bcrypt ou similar)
     */
    hashPassword(password, salt) {
        let hash = 0;
        const str = password + salt;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash).toString(16);
    }

    /**
     * Verifica credenciais de login
     */
    async verifyCredentials(username, password) {
        if (!this.database) {
            await this.loadDatabase();
        }

        const auth = this.database.auth;
        const credentials = auth.admin_credentials;

        if (!credentials.active) {
            return { success: false, message: 'Conta desativada' };
        }

        // Verifica se a conta está bloqueada
        if (credentials.lockout_until && new Date() < new Date(credentials.lockout_until)) {
            return { success: false, message: 'Conta temporariamente bloqueada' };
        }

        // Verifica username e senha
        if (credentials.username === username) {
            const hashedPassword = this.hashPassword(password, credentials.salt);
            if (hashedPassword === credentials.password_hash) {
                // Login bem-sucedido
                credentials.last_login = new Date().toISOString();
                credentials.login_attempts = 0;
                credentials.lockout_until = null;
                await this.saveDatabase();
                
                return { 
                    success: true, 
                    message: 'Login realizado com sucesso',
                    session_token: this.generateSessionToken()
                };
            }
        }

        // Login falhou
        credentials.login_attempts = (credentials.login_attempts || 0) + 1;
        
        if (credentials.login_attempts >= auth.max_login_attempts) {
            credentials.lockout_until = new Date(Date.now() + (auth.lockout_duration * 1000)).toISOString();
        }
        
        await this.saveDatabase();
        
        return { 
            success: false, 
            message: 'Usuário ou senha incorretos',
            attempts_remaining: auth.max_login_attempts - credentials.login_attempts
        };
    }

    /**
     * Gera token de sessão
     */
    generateSessionToken() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < 32; i++) {
            token += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return token;
    }

    /**
     * Verifica se a sessão é válida
     */
    async validateSession(sessionToken) {
        if (!this.database) {
            await this.loadDatabase();
        }

        // Em um ambiente real, você armazenaria os tokens de sessão no banco
        // Por simplicidade, vamos usar localStorage para armazenar o token
        const storedToken = localStorage.getItem('admin_session_token');
        const sessionExpiry = localStorage.getItem('admin_session_expiry');

        if (!storedToken || !sessionExpiry) {
            return false;
        }

        if (new Date() > new Date(sessionExpiry)) {
            localStorage.removeItem('admin_session_token');
            localStorage.removeItem('admin_session_expiry');
            return false;
        }

        return storedToken === sessionToken;
    }

    /**
     * Cria uma nova sessão
     */
    createSession() {
        const token = this.generateSessionToken();
        const expiry = new Date(Date.now() + (this.database.auth.session_timeout * 1000));
        
        localStorage.setItem('admin_session_token', token);
        localStorage.setItem('admin_session_expiry', expiry.toISOString());
        
        return token;
    }

    /**
     * Remove a sessão atual
     */
    destroySession() {
        localStorage.removeItem('admin_session_token');
        localStorage.removeItem('admin_session_expiry');
    }

    /**
     * Altera a senha do admin
     */
    async changePassword(currentPassword, newPassword) {
        if (!this.database) {
            await this.loadDatabase();
        }

        const credentials = this.database.auth.admin_credentials;
        
        // Verifica senha atual
        const currentHash = this.hashPassword(currentPassword, credentials.salt);
        if (currentHash !== credentials.password_hash) {
            return { success: false, message: 'Senha atual incorreta' };
        }

        // Gera nova senha
        const newHash = this.hashPassword(newPassword, credentials.salt);
        credentials.password_hash = newHash;
        credentials.updated_at = new Date().toISOString();

        await this.saveDatabase();
        return { success: true, message: 'Senha alterada com sucesso' };
    }

    /**
     * Obtém informações de autenticação
     */
    async getAuthInfo() {
        if (!this.database) {
            await this.loadDatabase();
        }
        return this.database.auth;
    }
}

// Instância global do gerenciador de banco de dados
const dbManager = new DatabaseManager();

// Exporta para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DatabaseManager;
} else {
    window.DatabaseManager = DatabaseManager;
    window.dbManager = dbManager;
}
