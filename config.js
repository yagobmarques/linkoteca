// Configuração do tema
const themeConfig = {
    title: "< linkoteca />",
    subtitle: "dev.links",
    // primaryColor: "#00ff88",
    // accentColor: "#ff0080",
    // backgroundColor: "#0a0a0a",
    // cardBackground: "#1a1a1a",
    primaryColor: "#5eead4",
    accentColor: "#f472b6",
    backgroundColor: "#111827" ,
    cardBackground: "#1f2937",
    author: "Yago Marques",
    authorUrl: "https://github.com/yagomarques"
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
        title: "GitHub",
        url: "https://github.com/usuario",
        icon: "fa-brands fa-github",
        description: {
            pt: "repositórios && open_source",
            en: "repositories && open_source"
        },
        category: "dev",
        available: true,
        highlight: true
    },
    {
        title: "Terminal Blog",
        url: "https://blog.dev",
        icon: "fa-solid fa-terminal",
        description: {
            pt: "artigos.tech() && tutoriais",
            en: "tech.articles() && tutorials"
        },
        category: "content",
        available: true,
        highlight: false
    },
    {
        title: "API Docs",
        url: "https://api.docs",
        icon: "fa-solid fa-code",
        description: {
            pt: "documentacao.json",
            en: "documentation.json"
        },
        category: "dev",
        available: true,
        highlight: true
    },
    {
        title: "Docker Hub",
        url: "https://hub.docker.com",
        icon: "fa-brands fa-docker",
        description: {
            pt: "container.imagens[]",
            en: "container.images[]"
        },
        category: "devops",
        available: false,
        highlight: false
    },
    {
        title: "Stack Overflow",
        url: "https://stackoverflow.com/users/",
        icon: "fa-brands fa-stack-overflow",
        description: {
            pt: "solucoes.find(bugs)",
            en: "solutions.find(bugs)"
        },
        category: "community",
        available: true,
        highlight: false
    },
    {
        title: "LinkedIn",
        url: "https://linkedin.com/in/dev",
        icon: "fa-brands fa-linkedin",
        description: {
            pt: "rede.profissional",
            en: "professional.network"
        },
        category: "social",
        available: true,
        highlight: false
    }
];