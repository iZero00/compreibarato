# 🔒 Instruções de Segurança - Comprei Barato

## 🚨 **Proteções Implementadas**

### ✅ **Senha Protegida**
- **Função `changePassword()` desabilitada** por segurança
- **Credenciais não podem ser alteradas** via console do navegador
- **Objeto `dbManager` congelado** contra manipulação
- **Logs sensíveis bloqueados** automaticamente

### ✅ **Redirecionamento Automático**
- **Pasta `/admin`** redireciona automaticamente para `login.html`
- **Arquivo `.htaccess`** configurado para proteção
- **Verificação de sessão** em todas as páginas admin

### ✅ **Credenciais Padrão**
- **Usuário:** `admin`
- **Senha:** `admin`
- **Hash:** `70bffd93` (com salt `compreibarato2024`)

## 🔧 **Como Alterar a Senha (Se Necessário)**

### **Método 1: Editar database.json**
1. Abra o arquivo `database.json`
2. Localize a seção `auth.admin_credentials`
3. Altere o `password_hash` para o novo hash
4. Salve o arquivo

### **Método 2: Calcular Novo Hash**
```javascript
// Use esta função para calcular o hash da nova senha
function calculateHash(password) {
    let hash = 0;
    const salt = "compreibarato2024";
    const str = password + salt;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
}

// Exemplo: calcular hash para senha "minha_nova_senha"
console.log(calculateHash("minha_nova_senha"));
```

## 🛡️ **Proteções Ativas**

### **Console Bloqueado**
- ❌ `dbManager.changePassword()` - **DESABILITADO**
- ❌ `console.log()` de informações sensíveis - **BLOQUEADO**
- ❌ Manipulação do objeto `dbManager` - **PROTEGIDO**

### **Redirecionamentos**
- ✅ `/admin/` → `/admin/login.html`
- ✅ Sessão expirada → `/admin/login.html`
- ✅ Acesso não autorizado → `/admin/login.html`

### **Headers de Segurança**
- ✅ `X-Frame-Options: DENY`
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy: geolocation=(), microphone=(), camera=()`

## 📋 **Checklist de Segurança**

### ✅ **Implementado:**
- [x] Senha protegida contra alteração via console
- [x] Redirecionamento automático para login
- [x] Objetos JavaScript congelados
- [x] Logs sensíveis bloqueados
- [x] Headers de segurança
- [x] Verificação de sessão
- [x] Bloqueio de acesso direto a arquivos sensíveis

### ⚠️ **Recomendações Adicionais:**
- [ ] Implementar HTTPS em produção
- [ ] Configurar WAF (Web Application Firewall)
- [ ] Implementar rate limiting por IP
- [ ] Configurar backup automático
- [ ] Monitorar logs de acesso

## 🚨 **Avisos Importantes**

### **Para Produção:**
1. **ALTERE A SENHA PADRÃO** antes de colocar em produção
2. **IMPLEMENTE HTTPS** obrigatoriamente
3. **CONFIGURE UM SERVIDOR** com backend real
4. **REMOVA ARQUIVOS SENSÍVEIS** do cliente

### **Para Desenvolvimento:**
- As credenciais `admin/administrador` são apenas para desenvolvimento
- Não use estas credenciais em ambiente de produção
- Sempre teste as proteções de segurança

## 📞 **Suporte de Segurança**

Para questões de segurança:
- **Email:** security@compreibarato.com
- **Responsável:** Vinicius
- **Urgência:** Alto para questões de produção

---

**⚠️ AVISO:** Este sistema está protegido contra manipulação via console, mas ainda requer configurações adicionais para produção.
