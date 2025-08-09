# Sistema de Autenticação - Comprei Barato

## 🔐 Credenciais Padrão

**Usuário:** `admin`  
**Senha:** `admin123`

## 📁 Arquivos do Sistema

### Banco de Dados
- `database.json` - Banco de dados principal com produtos, categorias e credenciais
- `database.js` - Gerenciador do banco de dados com funções de autenticação

### Páginas de Admin
- `admin/login.html` - Página de login com verificação de credenciais
- `admin/index.html` - Painel administrativo com verificação de sessão

## 🔒 Recursos de Segurança

### Autenticação
- ✅ Verificação de credenciais no banco de dados
- ✅ Hash de senhas com salt
- ✅ Sessões com expiração automática
- ✅ Bloqueio de conta após tentativas falhadas

### Sessão
- ⏰ Timeout: 1 hora de inatividade
- 🔄 Renovação automática de sessão
- 🚪 Logout seguro com limpeza de dados

### Proteção
- 🛡️ Bloqueio após 5 tentativas de login
- ⏳ Duração do bloqueio: 15 minutos
- 📝 Registro de tentativas de login

## 🚀 Como Usar

### 1. Acessar o Painel Admin
```
http://localhost/admin/login.html
```

### 2. Fazer Login
- Usuário: `admin`
- Senha: `admin123`

### 3. Gerenciar Produtos
- Adicionar, editar e remover produtos
- Organizar por categorias
- Upload de imagens

## 🔧 Configurações

### Alterar Senha
```javascript
// No console do navegador
await dbManager.changePassword('admin123', 'nova_senha');
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

## 📊 Estrutura do Banco de Dados

```json
{
  "auth": {
    "admin_credentials": {
      "username": "admin",
      "password_hash": "70bffd93",
      "salt": "compreibarato2024",
      "created_at": "2024-12-19T10:00:00Z",
      "last_login": null,
      "active": true
    },
    "session_timeout": 3600,
    "max_login_attempts": 5,
    "lockout_duration": 900
  }
}
```

## 🛠️ Funções Disponíveis

### Autenticação
- `dbManager.verifyCredentials(username, password)` - Verifica login
- `dbManager.createSession()` - Cria nova sessão
- `dbManager.validateSession(token)` - Valida sessão
- `dbManager.destroySession()` - Remove sessão
- `dbManager.changePassword(current, new)` - Altera senha

### Produtos
- `dbManager.addProduct(data)` - Adiciona produto
- `dbManager.editProduct(id, data)` - Edita produto
- `dbManager.deleteProduct(id)` - Remove produto
- `dbManager.getAllProducts()` - Lista todos os produtos

### Categorias
- `dbManager.getAllCategories()` - Lista categorias
- `dbManager.getCategory(key)` - Obtém categoria
- `dbManager.addCategory(key, data)` - Adiciona categoria

## ⚠️ Importante

1. **Altere a senha padrão** após o primeiro login
2. **Remova o arquivo credentials.txt** em produção
3. **Use HTTPS** em ambiente de produção
4. **Faça backup regular** do banco de dados

## 🔍 Troubleshooting

### Problema: Não consegue fazer login
- Verifique se o arquivo `database.json` existe
- Confirme se o `database.js` está sendo carregado
- Verifique o console do navegador para erros

### Problema: Sessão expira muito rápido
- Aumente o `session_timeout` no banco de dados
- Verifique se o JavaScript está funcionando

### Problema: Conta bloqueada
- Aguarde 15 minutos para desbloqueio automático
- Ou edite o arquivo `database.json` para remover o bloqueio

## 📞 Suporte

Para problemas ou dúvidas sobre o sistema de autenticação, verifique:
1. Console do navegador (F12)
2. Logs do servidor
3. Arquivo `database.json` para configurações
