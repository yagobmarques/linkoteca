# 🔗 Linkoteca

> **Um agregador de links pessoais minimalista e tecnológico**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## ✨ Sobre

Linkoteca é uma página estática responsiva que funciona como um agregador de links pessoais com tema escuro e minimalista, focado no mundo da tecnologia. Perfeito para desenvolvedores que querem centralizar seus links profissionais de forma elegante.

### 🎯 Características

- **🌙 Tema Escuro Tecnológico** - Visual cyberpunk com cores neon personalizáveis
- **📱 Totalmente Responsivo** - Funciona perfeitamente em desktop e mobile
- **🌐 Multilíngue** - Suporte a Português e Inglês com troca dinâmica
- **⚙️ Altamente Configurável** - Personalize cores, textos e links via arquivo de configuração
- **🚀 Zero Dependências** - Apenas HTML, CSS e JavaScript vanilla (+ Bootstrap e jQuery via CDN)
- **⚡ Performance** - Carregamento rápido e otimizado

## 🚀 Como Usar

### 📝 Configuração de Links

Adicione seus links no array `linksConfig`:

```javascript
{
    title: "Meu Projeto",
    url: "https://meusite.com",
    icon: "fa-solid fa-rocket",
    description: {
        pt: "meu.projeto.incrivel()",
        en: "my.awesome.project()"
    },
    category: "projetos",
    available: true,
    highlight: true // destaque visual
}
```

## 🎨 Personalização

### Cores do Tema
```javascript
const themeConfig = {
    primaryColor: "#5eead4",    // Verde água
    accentColor: "#f472b6",     // Rosa
    backgroundColor: "#111827", // Cinza escuro
    cardBackground: "#1f2937"   // Cinza médio
};
```

### Ícones
Use qualquer ícone do [Font Awesome](https://fontawesome.com/icons):
- `fa-brands fa-github`
- `fa-solid fa-terminal`
- `fa-brands fa-docker`

## 🌐 Idiomas

Adicione traduções no objeto `translations`:
```javascript
const translations = {
    pt: { featured: "destaque", soon: "em breve" },
    en: { featured: "featured", soon: "soon" },
    es: { featured: "destacado", soon: "pronto" } // Novo idioma
};
```

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Aqui estão algumas formas de ajudar:

### 🐛 Reportar Bugs
1. Verifique se o bug já foi reportado nas [Issues](https://github.com/yagomarques/linkoteca/issues)
2. Crie uma nova issue com:
   - Descrição clara do problema
   - Passos para reproduzir
   - Screenshots (se aplicável)
   - Informações do navegador/sistema

### 💡 Sugerir Melhorias
- Abra uma issue com a tag `enhancement`
- Descreva sua ideia detalhadamente
- Explique como isso beneficiaria outros usuários

### 🔧 Contribuir com Código

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Faça suas alterações**
4. **Teste localmente**
5. **Commit suas mudanças**
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
6. **Push para sua branch**
   ```bash
   git push origin feature/nova-funcionalidade
   ```
7. **Abra um Pull Request**

### 📋 Diretrizes de Contribuição

- **Código limpo**: Mantenha o código simples e bem comentado
- **Responsividade**: Teste em diferentes tamanhos de tela
- **Performance**: Evite dependências desnecessárias
- **Acessibilidade**: Considere usuários com necessidades especiais
- **Commits semânticos**: Use [Conventional Commits](https://www.conventionalcommits.org/)

### 🌟 Ideias para Contribuir

- [ ] Novos temas de cores
- [ ] Mais idiomas (Espanhol, Francês, etc.)
- [ ] Animações CSS adicionais
- [ ] Modo claro/escuro toggle
- [ ] Exportar configuração para JSON
- [ ] PWA (Progressive Web App)
- [ ] Integração com APIs (GitHub, LinkedIn)

## 📄 Licença

Este projeto está licenciado sob a **Creative Commons Attribution 4.0 International License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

### O que isso significa?

✅ **Você PODE:**
- Usar comercialmente
- Modificar o código
- Distribuir
- Usar em projetos privados
- Criar obras derivadas

❗ **Você DEVE:**
- Dar crédito apropriado ao autor original
- Indicar se mudanças foram feitas
- Incluir link para a licença

🚫 **Limitações:**
- Sem garantias adicionais
- Licença não pode ser revogada

## 🙏 Agradecimentos

- [Bootstrap](https://getbootstrap.com/) - Framework CSS
- [Font Awesome](https://fontawesome.com/) - Ícones
- [jQuery](https://jquery.com/) - Manipulação DOM
- Comunidade open source por inspirações e feedback

## 📞 Contato

**Yago Marques**
- GitHub: [@yagomarques](https://github.com/yagomarques)
- LinkedIn: [Yago Marques](https://linkedin.com/in/yagomarques)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

*Feito com 💚 por [Yago Marques](https://github.com/yagomarques)*

</div>