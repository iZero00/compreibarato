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
- **🔄 Sincronizar**: Combina dados locais com remotos (preserva seus produtos!)

## 💾 Sistema de Sincronização

### Como Funciona
1. **Dados Locais**: Seus produtos ficam salvos no `localStorage` (nunca perdidos!)
2. **Sincronização**: Combina produtos locais com remotos (não substitui!)
3. **Preservação**: Todos os produtos que você adicionou são mantidos
4. **Compartilhamento**: Arquivo `db.json` pode ser compartilhado

### Vantagens
- ✅ **Seus produtos NUNCA são perdidos**
- ✅ **Sincronização inteligente (combina, não substitui)**
- ✅ **Sem servidor necessário**
- ✅ **Funciona offline**
- ✅ **Backup automático no localStorage**

### Como Sincronizar
1. **Adicionar/editar produtos** no painel admin (ficam salvos automaticamente)
2. **Clicar em "🔄 Sincronizar"** para combinar com dados remotos
3. **Seus produtos locais são preservados** (nunca perdidos!)
4. **Novos produtos remotos são adicionados** (se houver)

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
4. **Dica**: Seus produtos ficam salvos no localStorage, então não são perdidos facilmente!

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
1. **Adicionar/editar produtos** no painel admin (salvos automaticamente no localStorage)
2. **Clicar "🔄 Sincronizar"** para combinar com dados remotos
3. **Seus produtos locais são preservados** (nunca perdidos!)
4. **Novos produtos remotos são adicionados** (se houver)

### Para Usuários:
1. **Abrir o site** (`index.html`)
2. **Ver produtos automaticamente** (carregados do localStorage primeiro)
3. **Se houver atualizações**, clicar "🔄 Sincronizar" no painel admin
4. **Dados locais são sempre preservados**

## 🎯 Pronto para Usar!

Agora você pode usar o sistema com sincronização inteligente! **Seus produtos nunca são perdidos** e são sempre preservados no localStorage. O sistema combina dados locais com remotos, garantindo que você nunca perca o trabalho feito.
