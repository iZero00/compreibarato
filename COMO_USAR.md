# Como Usar o Sistema Comprei Barato

## 🚀 Sistema Sincronizado

Este sistema funciona **100% offline** mas com **sincronização automática** - todos veem os mesmos produtos!

## 📱 Como Acessar

### Site Principal
- **Arquivo**: `index.html`
- **Função**: Visualizar produtos (público)
- **Como abrir**: Clique duas vezes no arquivo `index.html`

### Painel Administrativo
- **Arquivo**: `admin/admin.html`
- **Credenciais**:
  - **Usuário**: `admin`
  - **Senha**: `admin123`
- **Como abrir**: Clique duas vezes no arquivo `admin/admin.html`

## ⚙️ Funcionalidades do Painel Admin

### 📊 Estatísticas
- Visualização de produtos totais
- Número de categorias
- Produtos ativos

### ➕ Adicionar Produto
- Nome do produto
- Categoria (dropdown)
- Link da Shopee
- URL da imagem (opcional)

### 📦 Gerenciar Produtos
- **Visualizar**: Lista todos os produtos
- **Editar**: Clique em "Editar" → modifique → "Atualizar Produto"
- **Deletar**: Clique em "Deletar" → confirme

### 🔍 Buscar e Filtrar
- **Busca**: Digite no campo de busca
- **Filtro por categoria**: Use o dropdown "Todas as categorias"

### 🔄 Sincronização
- **🔄 Sincronizar**: Carrega dados atualizados do `db.json`
- **📥 Baixar db.json**: Baixa o arquivo atualizado para compartilhar

## 💾 Sistema de Sincronização

### Como Funciona
1. **Carregamento**: Sistema carrega dados do `db.json` primeiro
2. **Backup local**: Salva no `localStorage` como backup
3. **Sincronização**: Todos veem os mesmos produtos
4. **Compartilhamento**: Arquivo `db.json` pode ser compartilhado

### Vantagens
- ✅ **Todos veem os mesmos produtos**
- ✅ **Sem servidor necessário**
- ✅ **Funciona offline**
- ✅ **Fácil de compartilhar**

### Como Sincronizar
1. **Adicionar/editar produtos** no painel admin
2. **Clicar em "📥 Baixar db.json"**
3. **Substituir o arquivo antigo** pelo novo
4. **Outras pessoas clicam "🔄 Sincronizar"**

## 🔧 Solução de Problemas

### Não consegue fazer login
1. Verifique se está no arquivo correto: `admin/admin.html`
2. Use as credenciais: `admin` / `admin123`
3. Limpe o cache do navegador se necessário

### Produtos não aparecem
1. Verifique se há produtos cadastrados no painel admin
2. Clique em "🔄 Sincronizar" para carregar dados atualizados
3. Verifique se não há filtros ativos

### Sincronização não funciona
1. Verifique se o arquivo `db.json` existe na pasta raiz
2. Certifique-se de que o arquivo está atualizado
3. Tente clicar em "🔄 Sincronizar" novamente

### Dados perdidos
1. Se limpou o cache do navegador, os dados foram perdidos
2. Clique em "🔄 Sincronizar" para recuperar do `db.json`
3. Se não funcionar, recrie os produtos no painel admin

## 📁 Estrutura de Arquivos

```
compreibarato-main/
├── index.html              # Site principal
├── app-simples.js          # Lógica do site principal
├── db.json                 # Banco de dados (compartilhado)
├── admin/
│   ├── login.html          # Página de login
│   └── admin.html          # Painel administrativo
├── assets/
│   └── icons/              # Ícones das categorias
└── COMO_USAR.md           # Este arquivo
```

## 🔄 Fluxo de Sincronização

### Para Administradores:
1. **Adicionar/editar produtos** no painel admin
2. **Clicar "📥 Baixar db.json"** para baixar arquivo atualizado
3. **Compartilhar o arquivo** via email, Google Drive, etc.
4. **Substituir o arquivo antigo** pelo novo

### Para Usuários:
1. **Abrir o site** (`index.html`)
2. **Ver produtos automaticamente** (carregados do `db.json`)
3. **Se houver atualizações**, clicar "🔄 Sincronizar" no painel admin

## 🎯 Pronto para Usar!

Agora você pode usar o sistema com sincronização! Todos veem os mesmos produtos, e você pode compartilhar atualizações facilmente através do arquivo `db.json`.
