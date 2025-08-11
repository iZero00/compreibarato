# 🛒 Comprei Barato - Sistema de Produtos

Um sistema web simples e elegante para gerenciar e exibir produtos com links da Shopee, desenvolvido com HTML, CSS e JavaScript puro.

## ✨ Características

- **🎨 Interface Moderna**: Design responsivo com gradientes e animações suaves
- **📱 Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **🔐 Painel Administrativo**: Sistema de login seguro para gerenciar produtos
- **📦 Gerenciamento de Produtos**: Adicionar, editar e deletar produtos facilmente
- **🏷️ Categorização**: Organize produtos por categorias (Fones, Eletrônicos, Gamer, etc.)
- **🔍 Busca e Filtros**: Encontre produtos rapidamente por nome ou categoria
- **💾 Persistência Local**: Dados salvos no localStorage do navegador
- **🔄 Sincronização**: Sistema de sincronização manual via arquivo JSON
- **🚀 Zero Dependências**: Funciona sem servidor ou frameworks externos

## 🎯 Funcionalidades

### Para Visitantes
- Visualizar produtos organizados por categorias
- Buscar produtos por nome
- Filtrar por categoria
- Acessar links diretos para a Shopee

### Para Administradores
- Login seguro no painel administrativo
- Adicionar novos produtos
- Editar produtos existentes
- Deletar produtos
- Visualizar estatísticas
- Sincronizar dados entre dispositivos

## 🚀 Como Usar

### 1. Acessar o Site Principal
- Abra `index.html` no seu navegador
- Navegue pelas categorias de produtos
- Use a busca para encontrar produtos específicos
- Clique nos produtos para ir à Shopee

### 2. Acessar o Painel Administrativo
- Acesse `admin/login.html`
- Use as credenciais padrão:
  - **Usuário**: `admin`
  - **Senha**: `admin123`
- Gerencie seus produtos no painel

### 3. Adicionar Produtos
1. Faça login no painel administrativo
2. Preencha o formulário "Adicionar Produto":
   - Nome do produto
   - Categoria
   - Link da Shopee
   - URL da imagem (opcional)
3. Clique em "Adicionar Produto"

### 4. Editar/Deletar Produtos
- No painel administrativo, cada produto tem botões "Editar" e "Deletar"
- Clique em "Editar" para modificar um produto
- Clique em "Deletar" para remover um produto

## 📁 Estrutura do Projeto

```
compreibarato-main/
├── index.html              # Página principal do site
├── app-simples.js          # Lógica principal do site
├── db.json                 # Arquivo de dados (opcional)
├── admin/
│   ├── login.html          # Página de login administrativo
│   └── admin.html          # Painel administrativo
├── assets/
│   └── icons/              # Ícones das categorias
├── COMO_USAR.md            # Instruções detalhadas
├── SOLUCAO_LOGIN.md        # Solução de problemas
└── README.md               # Este arquivo
```

## 🎨 Categorias Disponíveis

- **🎧 Fones** - Fones de ouvido e headsets
- **📱 Eletrônicos** - Smartphones, tablets e gadgets
- **🎮 Gamer** - Produtos para gaming
- **🐾 Pets** - Produtos para animais de estimação
- **🍽️ Utensílios** - Utensílios domésticos
- **👕 Roupas** - Vestuário e acessórios
- **🔌 Cabos** - Cabos e conectores
- **🔧 Ferramentas** - Ferramentas e equipamentos

## 💾 Sistema de Dados

### Armazenamento Local
- Os dados são salvos no `localStorage` do navegador
- Persistência automática entre sessões
- Funciona offline

### Sincronização
- Sistema de sincronização manual via arquivo `db.json`
- Permite compartilhar dados entre dispositivos
- Botão "Sincronizar" no painel administrativo

## 🔧 Instalação

### Método 1: Download Direto
1. Baixe ou clone este repositório
2. Abra `index.html` no seu navegador
3. Pronto! O sistema já está funcionando

### Método 2: Hospedagem Online
1. Faça upload dos arquivos para seu servidor web
2. Acesse via URL do seu domínio
3. O sistema funcionará normalmente

## 🎯 Casos de Uso

### Para Lojistas
- Exibir produtos da sua loja da Shopee
- Organizar produtos por categorias
- Facilitar a navegação dos clientes

### Para Afiliados
- Centralizar links de produtos
- Criar páginas de produtos organizadas
- Melhorar a experiência do usuário

### Para Pessoal
- Organizar produtos favoritos
- Compartilhar desejos de compra
- Manter lista de produtos de interesse

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com gradientes e animações
- **JavaScript ES6+** - Lógica e interatividade
- **localStorage API** - Persistência de dados
- **Fetch API** - Sincronização de dados

## 🔒 Segurança

- Sistema de autenticação simples
- Validação de dados no frontend
- Proteção contra acesso não autorizado ao painel
- Dados armazenados localmente

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Navegadores móveis

## 🐛 Solução de Problemas

### Problema de Login
Se não conseguir fazer login:
1. Clique no botão "🔄 Resetar Banco" na página de login
2. Use as credenciais padrão: `admin` / `admin123`
3. Consulte `SOLUCAO_LOGIN.md` para mais detalhes

### Dados Não Aparecem
1. Verifique se o `localStorage` está habilitado
2. Tente sincronizar via botão "🔄 Sincronizar"
3. Verifique se o arquivo `db.json` está presente

### Problemas de Sincronização
1. Certifique-se de que o arquivo `db.json` está acessível
2. Verifique as permissões do arquivo
3. Tente recarregar a página

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Comprei Barato**
- Sistema desenvolvido para facilitar a organização e exibição de produtos
- Foco em simplicidade e usabilidade
- Interface moderna e responsiva

## 🙏 Agradecimentos

- Ícones das categorias fornecidos
- Comunidade de desenvolvedores web
- Usuários que testaram e deram feedback

---

⭐ **Se este projeto te ajudou, considere dar uma estrela no GitHub!**

🔄 **Última atualização**: Dezembro 2024
