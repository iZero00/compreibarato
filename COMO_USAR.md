# Como Usar o Sistema Comprei Barato

## 🚀 Sistema Nativo na Vercel

Este sistema funciona **100% nativo na Vercel** com **atualização automática** - todos veem os mesmos produtos em tempo real!

## 📦 Como Fazer Deploy

### 🎯 Método Fácil (Recomendado)
1. **Crie uma conta na Vercel**: https://vercel.com
2. **Conecte seu GitHub**: Faça upload dos arquivos para o GitHub
3. **Deploy automático**: A Vercel detectará automaticamente e fará o deploy
4. **Pronto!** Seu site estará online com URL: `https://seu-projeto.vercel.app`

### 🔧 Método Manual
1. **Instale o Vercel CLI**: `npm i -g vercel`
2. **Faça login**: `vercel login`
3. **Deploy**: `vercel`
4. **Acesse**: URL fornecida pela Vercel

## 🌐 Como Acessar

### Site Principal
- **URL**: `https://seu-projeto.vercel.app`
- **Função**: Visualizar produtos (público)

### Painel Administrativo
- **URL**: `https://seu-projeto.vercel.app/admin/admin.html`
- **Credenciais**:
  - **Usuário**: `admin`
  - **Senha**: `admin123`

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

### 🔄 Sistema de Salvamento
- **Atualização Automática**: Produtos são salvos automaticamente via API Vercel
- **Tempo Real**: Todos veem as mudanças instantaneamente

## 💾 Sistema de Salvamento

### Como Funciona
1. **API Serverless**: `/api/db` gerencia o banco de dados na Vercel
2. **Atualização Automática**: Mudanças são salvas automaticamente
3. **Compartilhamento**: Todos veem as mesmas mudanças em tempo real
4. **Persistência**: Dados ficam salvos na Vercel

### Vantagens
- ✅ **100% Nativo** - Não precisa executar nada na sua máquina
- ✅ **Atualização automática** - não precisa clicar em nada
- ✅ **Tempo real** - todos veem as mudanças instantaneamente
- ✅ **Seus produtos NUNCA são perdidos**
- ✅ **Sistema simples e confiável**
- ✅ **Compartilhamento automático**
- ✅ **Escalável** - Suporta milhares de usuários
- ✅ **Gratuito** - Plano gratuito generoso

### Como Funciona
1. **Adicionar produto** → Salvo automaticamente via API Vercel (todos veem)
2. **Editar produto** → Salvo automaticamente via API Vercel (todos veem)
3. **Deletar produto** → Salvo automaticamente via API Vercel (todos veem)
4. **Tempo real** → Todos veem as mudanças instantaneamente

## 🔧 Solução de Problemas

### Não consegue fazer login
1. Verifique se está na URL correta: `https://seu-projeto.vercel.app/admin/admin.html`
2. Use as credenciais: `admin` / `admin123`
3. Verifique se o deploy foi feito corretamente

### Produtos não aparecem
1. Verifique se há produtos cadastrados no painel admin
2. Recarregue a página para verificar se os dados foram carregados
3. Verifique se não há filtros ativos

### Mudanças não aparecem para outros usuários
1. Verifique se o deploy foi feito corretamente
2. Recarregue a página principal para carregar dados atualizados
3. Verifique se todos estão acessando a URL da Vercel

### Deploy não funciona
1. Verifique se todos os arquivos estão no GitHub
2. Verifique se o `vercel.json` está presente
3. Verifique se a pasta `api/` está presente com `db.js`

### Dados perdidos
1. Os dados ficam salvos na Vercel automaticamente
2. Reinicie o deploy se necessário
3. **Dica**: Seus produtos ficam salvos na API Vercel, então são compartilhados com todos!

## 📁 Estrutura de Arquivos

```
compreibarato-main/
├── index.html              # Site principal
├── app-simples.js          # Lógica do site principal
├── vercel.json             # Configuração da Vercel
├── api/
│   └── db.js              # API serverless
├── admin/
│   ├── login.html          # Página de login
│   └── admin.html          # Painel administrativo
├── assets/
│   └── icons/              # Ícones das categorias
└── COMO_USAR.md           # Este arquivo
```

## 🔄 Fluxo de Salvamento

### Para Administradores:
1. **Adicionar produto** → Salvo automaticamente via API Vercel (todos veem)
2. **Editar produto** → Salvo automaticamente via API Vercel (todos veem)
3. **Deletar produto** → Salvo automaticamente via API Vercel (todos veem)
4. **Tempo real** → Todos veem as mudanças instantaneamente

### Para Usuários:
1. **Abrir o site** (`https://seu-projeto.vercel.app`)
2. **Ver produtos automaticamente** (carregados via API Vercel)
3. **Dados são sempre atualizados** em tempo real
4. **Sistema simples e confiável**

## 🎯 Pronto para Usar!

Agora você pode usar o sistema **100% nativo na Vercel**! **Todos veem as mesmas mudanças em tempo real** através da API serverless. O sistema salva automaticamente na Vercel, garantindo que suas mudanças sejam vistas por todos os usuários instantaneamente.

### 🚀 Para Iniciar:
1. **Faça deploy na Vercel**
2. **Acesse a URL fornecida**
3. **Use o painel admin**
4. **Pronto!** Sistema funcionando 100% na nuvem!

### 📱 URLs Finais
- **Site**: `https://seu-projeto.vercel.app`
- **Admin**: `https://seu-projeto.vercel.app/admin/admin.html`

**Sistema 100% nativo na Vercel!** 🎉
