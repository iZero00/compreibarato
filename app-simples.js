// Sistema Simples - Comprei Barato (Sem Supabase)
class AppSimples {
    constructor() {
        this.db = null;
        this.init();
    }

    // Inicializar aplicação
    async init() {
        try {
            await this.loadDatabase();
            this.loadProducts();
        } catch (error) {
            console.error('Erro ao inicializar:', error);
        }
    }

    // Carregar banco de dados
    async loadDatabase() {
        try {
            // Detectar se estamos na Vercel ou localmente
            const isVercel = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
            
            if (isVercel) {
                // Na Vercel, usar a API serverless
                try {
                    const response = await fetch('/api/db');
                    if (response.ok) {
                        this.db = await response.json();
                        console.log('Banco carregado da API Vercel:', this.db);
                        // Salvar no localStorage como backup
                        localStorage.setItem('compreiBaratoDB', JSON.stringify(this.db));
                        return;
                    }
                } catch (e) {
                    console.log('Erro ao carregar da API Vercel, tentando localStorage...');
                }
            } else {
                // Localmente, tentar carregar do db.json primeiro
                try {
                    const response = await fetch('./db.json');
                    if (response.ok) {
                        this.db = await response.json();
                        console.log('Banco carregado do db.json local:', this.db);
                        // Salvar no localStorage como backup
                        localStorage.setItem('compreiBaratoDB', JSON.stringify(this.db));
                        return;
                    }
                } catch (e) {
                    console.log('db.json local não encontrado, tentando localStorage...');
                }
            }
            
            // Se não conseguir carregar da API ou db.json, tentar localStorage
            const savedDB = localStorage.getItem('compreiBaratoDB');
            if (savedDB) {
                this.db = JSON.parse(savedDB);
                console.log('Banco carregado do localStorage:', this.db);
                return;
            }
            
            // Se não houver dados, criar banco padrão
            console.log('Criando banco padrão...');
            this.createDefaultDatabase();
        } catch (error) {
            console.error('Erro ao carregar banco:', error);
            this.createDefaultDatabase();
        }
    }

    // Criar banco padrão
    createDefaultDatabase() {
        this.db = {
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
        
        this.saveDatabase();
        console.log('Banco padrão criado:', this.db);
    }



    // Buscar produtos
    getProducts(category = null) {
        if (!this.db || !this.db.products) return [];
        
        let products = this.db.products.filter(p => p.active);
        
        if (category && category !== 'todos') {
            products = products.filter(p => p.category === category);
        }
        
        return products.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    // Buscar produto por ID
    getProductById(id) {
        return this.db.products.find(p => p.id === id);
    }

    // Adicionar produto
    async addProduct(productData) {
        const newProduct = {
            id: this.getNextId('products'),
            ...productData,
            active: true,
            created_at: new Date().toISOString()
        };
        
        this.db.products.push(newProduct);
        await this.saveDatabase();
        return newProduct;
    }

    // Atualizar produto
    async updateProduct(id, productData) {
        const index = this.db.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.db.products[index] = {
                ...this.db.products[index],
                ...productData,
                updated_at: new Date().toISOString()
            };
            await this.saveDatabase();
            return this.db.products[index];
        }
        return null;
    }

    // Deletar produto
    async deleteProduct(id) {
        const index = this.db.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.db.products[index].active = false;
            await this.saveDatabase();
            return true;
        }
        return false;
    }

    // Buscar categorias
    getCategories() {
        return this.db.categories || [];
    }

    // Buscar categoria por ID
    getCategoryById(id) {
        return this.db.categories.find(c => c.id === id);
    }

    // Gerar próximo ID
    getNextId(type) {
        const items = this.db[type] || [];
        return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    }

    // Salvar banco de dados
    async saveDatabase() {
        try {
            // Salvar no localStorage primeiro
            localStorage.setItem('compreiBaratoDB', JSON.stringify(this.db));
            console.log('Banco salvo no localStorage');
            
            // Detectar se estamos na Vercel ou localmente
            const isVercel = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
            
            if (isVercel) {
                // Na Vercel, usar a API serverless
                try {
                    const response = await fetch('/api/db', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.db)
                    });
                    
                    if (response.ok) {
                        console.log('✅ Banco salvo na API Vercel - todos verão as mudanças!');
                        return true;
                    } else {
                        console.warn('❌ Não foi possível salvar na API Vercel');
                        return false;
                    }
                } catch (error) {
                    console.warn('❌ Erro ao salvar na API Vercel:', error);
                    return false;
                }
            } else {
                // Localmente, tentar salvar no db.json
                try {
                    const response = await fetch('./db.json', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.db, null, 2)
                    });
                    
                    if (response.ok) {
                        console.log('✅ Banco salvo no db.json local');
                        return true;
                    } else {
                        console.warn('❌ Não foi possível salvar no db.json local');
                        return false;
                    }
                } catch (error) {
                    console.warn('❌ Erro ao salvar no db.json local:', error);
                    return false;
                }
            }
        } catch (error) {
            console.error('❌ Erro ao salvar banco:', error);
            return false;
        }
    }

    // Buscar produtos
    searchProducts(query) {
        if (!query) return this.getProducts();
        
        const products = this.getProducts();
        return products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
    }



    // Carregar produtos na interface
    loadProducts(category = null) {
        const productsContainer = document.getElementById('productsContainer');
        if (!productsContainer) return;

        const products = this.getProducts(category);
        
        if (products.length === 0) {
            productsContainer.innerHTML = '<p class="no-products">Nenhum produto encontrado.</p>';
            return;
        }

        productsContainer.innerHTML = products.map(product => `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/icons/eletronicos.png'">
                <h3 class="product-name">${product.name}</h3>
                <a href="${product.link}" class="product-link" target="_blank" rel="noopener noreferrer">Ver Oferta</a>
            </div>
        `).join('');
    }



    // Exibir produtos
    displayProducts(products) {
        const productsContainer = document.getElementById('productsContainer');
        if (!productsContainer) return;

        if (products.length === 0) {
            productsContainer.innerHTML = '<p class="no-products">Nenhum produto encontrado.</p>';
            return;
        }

        productsContainer.innerHTML = products.map(product => `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='assets/icons/eletronicos.png'">
                <h3 class="product-name">${product.name}</h3>
                <a href="${product.link}" class="product-link" target="_blank" rel="noopener noreferrer">Ver Oferta</a>
            </div>
        `).join('');
    }
}

// Inicializar aplicação quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppSimples();
});

// Funções globais para compatibilidade
function loadProducts() {
    window.app.loadProducts();
}
