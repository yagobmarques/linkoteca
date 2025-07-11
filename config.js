// Configuração do tema
const themeConfig = {
    title: "< yago.dev />",
    subtitle: "links",
    primaryColor: "#5eead4",
    accentColor: "#f472b6",
    backgroundColor: "#111827" ,
    cardBackground: "#1f2937",
    author: "Yago Marques",
    authorUrl: "https://github.com/yagobmarques"
};

// Traduções
const translations = {
    pt: {
        featured: "destaque",
        soon: "em breve",
        madeBy: "feito por",
        language: "idioma"
    },
    en: {
        featured: "featured",
        soon: "soon",
        madeBy: "made by",
        language: "language"
    }
};

let currentLang = 'pt';

// Configuração dos links
const linksConfig = [
    {
        title: "Tech Profile",
        url: "https://yagobmarques.github.io/tech-profile/",
        icon: "fa-solid fa-user-tie",
        description: {
            pt: "perfil.profissional()",
            en: "professional.profile()"
        },
        category: "portfolio",
        available: true,
        highlight: true
    },
    {
        title: "GitHub",
        url: "https://github.com/yagobmarques",
        icon: "fa-brands fa-github",
        description: {
            pt: "repositórios && projetos",
            en: "repositories && projects"
        },
        category: "dev",
        available: true,
        highlight: false
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/yago-marques-44955b163/",
        icon: "fa-brands fa-linkedin",
        description: {
            pt: "networking.profissional",
            en: "professional.networking"
        },
        category: "social",
        available: true,
        highlight: false
    },
    {
        title: "WhatsApp",
        url: "https://wa.me/5584994930330?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20p%C3%A1gina%20ou%20projeto",
        icon: "fa-brands fa-whatsapp",
        description: {
            pt: "páginas.profissionais() && design.moderno",
            en: "professional.pages() && modern.design"
        },
        category: "contact",
        available: true,
        highlight: false
    },
    {
        title: "YouTube",
        url: "#",
        icon: "fa-brands fa-youtube",
        description: {
            pt: "tutoriais && tech_talks",
            en: "tutorials && tech_talks"
        },
        category: "content",
        available: false,
        highlight: false
    },
    {
        title: "Tech Blog",
        url: "#",
        icon: "fa-solid fa-terminal",
        description: {
            pt: "artigos.tech() && insights",
            en: "tech.articles() && insights"
        },
        category: "content",
        available: false,
        highlight: false
    },
];