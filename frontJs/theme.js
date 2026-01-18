// Theme Switcher with System Preference Support - FIXED VERSION
(function() {
    const themeIcon = document.querySelector('.theme-icon i');
    const body = document.body;
    
    // Create style element for theme styles
    const styleElement = document.createElement('style');
    styleElement.id = 'theme-styles';
    document.head.appendChild(styleElement);
    
    // Get system preference
    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Get saved theme or default to system
    function getSavedTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') {
            return saved;
        }
        return getSystemTheme();
    }
    
    // Apply theme CSS
    function applyThemeStyles(themeName) {
        const isDark = themeName === 'dark';
        
        const css = `
            /* Body */
            body {
                background: ${isDark ? 'linear-gradient(to bottom, #343434, #000000)' : 'linear-gradient(to bottom, #f5f5f5, #ffffff)'} !important;
            }
            
            /* Hero Section */
            .hero-section {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #343434 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)'} !important;
            }
            
            /* Hero Text */
            .hero-text h4 {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .hero-text span {
                color: ${isDark ? 'rgb(170, 170, 170)' : '#666666'} !important;
            }
            
            .hero-desc p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Live Side Badge */
            .live-side {
                background-color: ${isDark ? 'rgb(56, 56, 56)' : 'rgb(230, 230, 230)'} !important;
                box-shadow: ${isDark ? 'inset 0 0 8px rgba(113, 114, 114, 0.8)' : 'inset 0 0 8px rgba(0, 0, 0, 0.15)'} !important;
            }
            
            .live-side p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .dot {
                background-color: ${isDark ? '#ffffff' : '#1C2582'} !important;
            }
            
            /* Ways Section */
            .ways-section {
                background: transparent !important;
            }
            
            /* Section Headings */
            .head-text h4 {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .head-desc p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            /* Old/New Way Text */
            .old-head h4, .old-head p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* How It Works */
            .how-it-works {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #343434 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)'} !important;
            }
            
            .work-content {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0a0a0a 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #fafafa 100%)'} !important;
            }
            
            /* Step Cards */
            .one {
                background: ${isDark ? 'linear-gradient(135deg, #2a2a2a 0%, #000000 100%)' : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)'} !important;
                border: ${isDark ? '2px solid rgba(255, 255, 255, 0.15)' : '2px solid rgba(0, 0, 0, 0.1)'} !important;
            }
            
            .one h4, .no-heads h4, .no-heads p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Business Section */
            .business {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #343434 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)'} !important;
            }
            
            .bus-text h4, .bus-desc p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Business Cards */
            .bus-card {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0a0a0a 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #fafafa 100%)'} !important;
                border: ${isDark ? '2px solid rgba(255, 255, 255, 0.15)' : '2px solid rgba(0, 0, 0, 0.1)'} !important;
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .bus-card h4, .bus-card p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* FAQ Section */
            .FAQs {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #0b0b0b 25%, #141414 50%, #080808 75%, #000000 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 25%, #f5f5f5 50%, #fafafa 75%, #ffffff 100%)'} !important;
            }
            
            .question h3, .question i {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .answer p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Footer */
            .footer {
                background: ${isDark ? '#000000' : '#f5f5f5'} !important;
            }
        `;
        
        styleElement.textContent = css;
    }
    
    // Apply theme to the page
    function applyTheme(themeName) {
        const isDark = themeName === 'dark';
        
        // Update icon
        if (themeIcon) {
            themeIcon.className = isDark ? 'bx bx-sun' : 'bx bx-moon';
        }
        
        // Apply CSS styles
        applyThemeStyles(themeName);
        
        // Save theme
        localStorage.setItem('theme', themeName);
        body.setAttribute('data-theme', themeName);
        
        console.log(`Theme applied: ${themeName}`);
    }
    
    // Toggle theme
    function toggleTheme() {
        const currentTheme = body.getAttribute('data-theme') || getSavedTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only update if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
    
    // Initialize theme on page load
    const initialTheme = getSavedTheme();
    applyTheme(initialTheme);
    
    // Add click event to theme icon
    const themeIconContainer = document.querySelector('.theme-icon');
    if (themeIconContainer) {
        themeIconContainer.addEventListener('click', toggleTheme);
    }
    
    console.log('Theme switcher initialized with theme:', initialTheme);
})();