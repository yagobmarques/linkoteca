$(document).ready(function() {
    // Aplica o tema personalizado
    applyTheme();
    // Carrega os links do config.js
    loadLinks();
    // Configura eventos
    setupEvents();
});

function applyTheme() {
    // Aplica as cores do tema
    document.documentElement.style.setProperty('--primary-color', themeConfig.primaryColor);
    document.documentElement.style.setProperty('--accent-color', themeConfig.accentColor);
    document.documentElement.style.setProperty('--bg-color', themeConfig.backgroundColor);
    document.documentElement.style.setProperty('--card-bg', themeConfig.cardBackground);
    
    // Atualiza textos personalizáveis
    $('#main-title').text(themeConfig.title);
    $('#subtitle').text(themeConfig.subtitle);
    $('#author-link').text(themeConfig.author).attr('href', themeConfig.authorUrl);
    
    // Atualiza idioma inicial
    updateLanguage();
}

function setupEvents() {
    // Seletor de idioma
    $('.btn-lang').click(function() {
        currentLang = $(this).data('lang');
        $('.btn-lang').removeClass('active');
        $(this).addClass('active');
        updateLanguage();
        loadLinks();
    });
    
    // Marca idioma ativo
    $(`.btn-lang[data-lang="${currentLang}"]`).addClass('active');
}

function updateLanguage() {
    $('#made-by-text').text(translations[currentLang].madeBy);
}

function loadLinks() {
    const container = $('#links-container');
    
    // Limpa o container
    container.empty();
    
    // Cria um card para cada link
    linksConfig.forEach(link => {
        const card = createLinkCard(link);
        container.append(card);
    });
}

function createLinkCard(link) {
    // Classes CSS baseadas no status do link
    const cardClasses = [
        'link-card',
        'card',
        'h-100',
        'position-relative',
        link.highlight ? 'highlight' : '',
        !link.available ? 'unavailable' : ''
    ].filter(Boolean).join(' ');
    
    // Obtém descrição no idioma atual
    const description = typeof link.description === 'object' 
        ? link.description[currentLang] 
        : link.description;
    
    // Badge traduzido
    const badge = link.highlight ? translations[currentLang].featured : 
                  !link.available ? translations[currentLang].soon : '';
    
    // HTML do card
    const cardHtml = `
        <div class="col-md-6 col-lg-4">
            <div class="${cardClasses}" data-url="${link.url}" data-available="${link.available}" data-badge="${badge}">
                <div class="card-body text-center p-4">
                    <div class="link-icon">
                        <i class="${link.icon}"></i>
                    </div>
                    <h5 class="card-title mb-3">${link.title}</h5>
                    <p class="card-text text-muted mb-3">${description}</p>
                    <span class="category-badge">${link.category}</span>
                </div>
            </div>
        </div>
    `;
    
    return $(cardHtml);
}

// Event handler para cliques nos cards
$(document).on('click', '.link-card', function() {
    const url = $(this).data('url');
    const available = $(this).data('available');
    
    // Só abre o link se estiver disponível
    if (available === true || available === 'true') {
        window.open(url, '_blank');
    }
});