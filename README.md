# 🛒 Comprei Barato - Site de Produtos da Shopee

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

## 📋 Descrição

Site moderno e responsivo para exibir produtos da Shopee organizados por categorias. O projeto inclui um painel administrativo completo com sistema de autenticação seguro e banco de dados JSON.

## ✨ Funcionalidades

### 🎨 Interface Principal
- **Design Moderno**: Interface glassmorphism com gradientes e efeitos visuais
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Categorias**: Organização por categorias com ícones customizados
- **Produtos**: Cards de produtos com imagens e links para Shopee
- **Navegação**: Sistema de filtros por categoria

### 🔐 Sistema de Autenticação
- **Login Seguro**: Hash de senhas com salt
- **Sessões**: Timeout automático de 1 hora
- **Proteção**: Bloqueio após 5 tentativas de login
- **Credenciais**: Usuário: `admin`, Senha: `administrador`

### 📊 Painel Administrativo
- **CRUD Produtos**: Adicionar, editar, remover produtos
- **Gerenciar Categorias**: Organizar produtos por categorias
- **Upload de Imagens**: Suporte para imagens de produtos
- **Interface Intuitiva**: Design moderno e responsivo

### 🗄️ Banco de Dados
- **JSON Database**: Armazenamento local em arquivo JSON
- **Backup Automático**: Sistema de backup integrado
- **Sincronização**: Compatibilidade com localStorage

## 🚀 Como Usar

### 1. Acessar o Site Principal
```
http://localhost/index.html
```

### 2. Acessar o Painel Admin
```
http://localhost/admin/login.html
```

**Credenciais:**
- **Usuário:** `admin`
- **Senha:** `administrador`

### 3. Testar o Sistema
```
http://localhost/test_auth.html
```

## 📁 Estrutura do Projeto

```
compreibarato-main/
├── 📄 index.html                 # Página principal
├── 📄 database.json              # Banco de dados JSON
├── 📄 database.js                # Gerenciador do banco
├── 📄 test_auth.html             # Página de teste
├── 📄 credentials.txt            # Credenciais (remover em produção)
├── 📄 README.md                  # Este arquivo
├── 📄 README_AUTH.md             # Documentação de autenticação
├── 📁 admin/
│   ├── 📄 index.html             # Painel administrativo
│   └── 📄 login.html             # Página de login
└── 📁 assets/
    └── 📁 icons/                 # Ícones das categorias
```

## 🎨 Design e Interface

### Cores e Tema
- **Gradiente Principal**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Glassmorphism**: Efeitos de vidro com backdrop-filter
- **Cores das Categorias**: Gradientes únicos para cada categoria
- **Tipografia**: Fonte Inter para melhor legibilidade

### Responsividade
- **Desktop**: Layout completo com grid de produtos
- **Tablet**: Ajustes para telas médias
- **Mobile**: Layout otimizado para smartphones

## 🔒 Segurança

### Autenticação
- ✅ Hash de senhas com salt único
- ✅ Sessões com expiração automática
- ✅ Bloqueio de conta após tentativas falhadas
- ✅ Proteção contra ataques de força bruta

### Dados
- ✅ Armazenamento seguro no banco JSON
- ✅ Backup automático dos dados
- ✅ Validação de entrada de dados
- ✅ Sanitização de dados

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com glassmorphism
- **JavaScript ES6+**: Funcionalidades dinâmicas
- **JSON**: Banco de dados local
- **LocalStorage**: Cache de sessão

## 📊 Categorias Disponíveis

| Categoria | Ícone | Cor | Descrição |
|-----------|-------|-----|-----------|
| 🐕 Pets | pets.png | #ff9a9e | Produtos para pets |
| 🎧 Fones | audio.png | #a8edea | Fones e áudio |
| 📱 Eletrônicos | eletronicos.png | #ffecd2 | Tecnologia |
| 🎮 Gamer | gamer.png | #ff9a9e | Produtos gamers |
| 🍳 Utensílios | utensilios.png | #a8edea | Casa e cozinha |
| 👕 Roupas | roupas.png | #ffecd2 | Moda |
| 🔌 Cabos | cabos.png | #ff9a9e | Conectores |
| 🔧 Ferramentas | ferramentas.png | #a8edea | Ferramentas |

## 🔧 Configurações

### Alterar Senha
```javascript
// Função desabilitada por segurança
// Para alterar a senha, edite diretamente o arquivo database.json
// ou contate o administrador do sistema
```

### Configurar Timeout de Sessão
Editar em `database.json`:
```json
"auth": {
  "session_timeout": 3600, // segundos
  "max_login_attempts": 5,
  "lockout_duration": 900
}
```

## 📈 Funcionalidades do Admin

### Gerenciamento de Produtos
- ✅ Adicionar novos produtos
- ✅ Editar produtos existentes
- ✅ Remover produtos
- ✅ Upload de imagens
- ✅ Organização por categorias

### Interface do Admin
- ✅ Seleção de categorias com ícones
- ✅ Formulário dinâmico
- ✅ Validação de dados
- ✅ Mensagens de feedback
- ✅ Design responsivo

## 🎯 Melhorias Implementadas

### Interface Principal
- ✅ Remoção da seção de preços
- ✅ Remoção do badge "SHOPEE"
- ✅ Ícones circulares nas categorias
- ✅ Cores de fundo personalizadas
- ✅ Design glassmorphism moderno

### Navegação
- ✅ Remoção do botão "Todos"
- ✅ Filtros por categoria
- ✅ Ícones maiores nas categorias
- ✅ Categorias vazias não são exibidas

### Responsividade
- ✅ Otimização para mobile
- ✅ Ajustes para tablet
- ✅ Layout adaptativo
- ✅ Botões e elementos redimensionáveis

## 🔍 Troubleshooting

### Problemas Comuns

**Não consegue fazer login:**
- Verifique se o arquivo `database.json` existe
- Confirme se o `database.js` está sendo carregado
- Verifique o console do navegador (F12)

**Sessão expira muito rápido:**
- Aumente o `session_timeout` no banco de dados
- Verifique se o JavaScript está funcionando

**Conta bloqueada:**
- Aguarde 15 minutos para desbloqueio automático
- Ou edite o arquivo `database.json` para remover o bloqueio

## 📞 Suporte

Para problemas ou dúvidas:
1. Verifique o console do navegador (F12)
2. Consulte o arquivo `README_AUTH.md`
3. Teste o sistema em `test_auth.html`

## ⚠️ Importante

1. **Altere a senha padrão** após o primeiro login
2. **Remova o arquivo credentials.txt** em produção
3. **Use HTTPS** em ambiente de produção
4. **Faça backup regular** do banco de dados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Vinicius** - Desenvolvedor do projeto Comprei Barato

---

⭐ **Se este projeto foi útil, considere dar uma estrela!**
