# 🚀 Deploy na Vercel - Comprei Barato

## ✅ Sistema Nativo na Vercel

Este sistema agora funciona **100% nativo na Vercel** com **atualização automática** - todos veem os mesmos produtos em tempo real!

## 📦 Como Fazer Deploy

### 🎯 Método Fácil (Recomendado)

1. **Crie uma conta na Vercel**: https://vercel.com
2. **Conecte seu GitHub**: Faça upload dos arquivos para o GitHub
3. **Deploy automático**: A Vercel detectará automaticamente e fará o deploy
4. **Pronto!** Seu site estará online com URL: `https://seu-projeto.vercel.app`

### 🔧 Método Manual

1. **Instale o Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Faça login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

## 🌐 URLs do Sistema

Após o deploy, você terá:

- **Site Principal**: `https://seu-projeto.vercel.app`
- **Painel Admin**: `https://seu-projeto.vercel.app/admin/admin.html`
- **API Database**: `https://seu-projeto.vercel.app/api/db`

## 🔑 Credenciais

- **Usuário**: `admin`
- **Senha**: `admin123`

## ⚙️ Como Funciona

### 🔄 Sistema de Dados
- **API Serverless**: `/api/db` gerencia o banco de dados
- **Atualização Automática**: Mudanças são salvas automaticamente
- **Compartilhamento**: Todos veem as mesmas mudanças em tempo real
- **Persistência**: Dados ficam salvos na Vercel

### 📁 Estrutura de Arquivos
```
├── index.html              # Site principal
├── app-simples.js          # Lógica do site
├── vercel.json             # Configuração da Vercel
├── api/
│   └── db.js              # API serverless
├── admin/
│   ├── login.html          # Login
│   └── admin.html          # Painel admin
└── assets/
    └── icons/              # Ícones
```

## 🎯 Vantagens da Vercel

- ✅ **100% Nativo** - Não precisa executar nada na sua máquina
- ✅ **Atualização Automática** - db.json editado automaticamente
- ✅ **Tempo Real** - Todos veem mudanças instantaneamente
- ✅ **Escalável** - Suporta milhares de usuários
- ✅ **Gratuito** - Plano gratuito generoso
- ✅ **HTTPS** - Segurança automática
- ✅ **CDN Global** - Carregamento rápido em todo mundo

## 🔧 Funcionalidades

### 📊 Painel Admin
- Adicionar produtos
- Editar produtos
- Deletar produtos
- Buscar e filtrar
- Estatísticas

### 🌐 Site Principal
- Visualizar produtos
- Filtrar por categoria
- Links para Shopee
- Interface responsiva

## 🚀 Pronto para Usar!

1. **Faça deploy na Vercel**
2. **Acesse o painel admin**
3. **Adicione produtos**
4. **Todos verão automaticamente!**

### 📱 URLs Finais
- **Site**: `https://seu-projeto.vercel.app`
- **Admin**: `https://seu-projeto.vercel.app/admin/admin.html`

**Sistema 100% funcional na nuvem!** 🎉
