// Theme Switcher with System Preference Support - COMPLETE FIX
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
            
            /* Hero Text - All elements */
            .hero-text h4,
            .hero-text h4 *,
            .left-content .hero-text h4,
            .left-content .hero-text h4 span {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Hero Title Span - Second span for "Business" */
            .hero-text h4 span[data-translate="hero_title_span"] {
                color: ${isDark ? 'rgb(170, 170, 170)' : '#666666'} !important;
            }
            
            /* Hero Description - All elements */
            .hero-desc p,
            .hero-desc p *,
            .hero-desc p span,
            .left-content .hero-desc p,
            .left-content .hero-desc p span {
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
            
            /* Buttons */
            .buttons button {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Ways Section */
            .ways-section {
                background: transparent !important;
            }
            
            /* Section Headings */
            .head-text h4,
            .head-text h4 * {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .head-desc p,
            .head-desc p * {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            /* Old/New Way Text */
            .old-head h4,
            .old-head p {
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
            
            .one h4,
            .no-heads h4,
            .no-heads p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Business Section */
            .business {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #343434 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)'} !important;
            }
            
            .bus-text h4,
            .bus-desc p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Business Cards */
            .bus-card {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0a0a0a 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #fafafa 100%)'} !important;
                border: ${isDark ? '2px solid rgba(255, 255, 255, 0.15)' : '2px solid rgba(0, 0, 0, 0.1)'} !important;
            }
            
            .bus-card h4,
            .bus-card p,
            .bus-name h4,
            .bus-idea p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* FAQ Section */
            .the-FAQ {
                background: ${isDark ? 'linear-gradient(135deg, #000000 0%, #0b0b0b 25%, #141414 50%, #080808 75%, #000000 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 25%, #f5f5f5 50%, #fafafa 75%, #ffffff 100%)'} !important;
            }
            
            .FAQs {
                background: transparent !important;
            }
            
            .question h3,
            .question i {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .answer p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Footer */
            .footer {
                background: ${isDark ? '#000000' : '#f5f5f5'} !important;
            }
            
            /* Mobile Menu */
            .the-menu {
                background: ${isDark ? '#1a1a1a' : '#ffffff'} !important;
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .menu-header h3,
            .menu-header p {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .the-menu ul a li {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .the-menu ul a li:hover {
                background: ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'} !important;
            }
            
            .the-menu ul a li i,
            .the-menu ul a li span {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Language Section in Menu */
            .language-section {
                background: ${isDark ? '#2a2a2a' : '#f5f5f5'} !important;
            }
            
            .language-label {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .language-label i,
            .language-label span {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Language Toggle Buttons */
            .lang-option {
                background: ${isDark ? '#3a3a3a' : '#e0e0e0'} !important;
                color: ${isDark ? '#ffffff' : '#000000'} !important;
                border: ${isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'} !important;
            }
            
            .lang-option:hover {
                background: ${isDark ? '#4a4a4a' : '#d0d0d0'} !important;
            }
            
            .lang-option.active {
                background: ${isDark ? '#1C2582' : '#1C2582'} !important;
                color: #ffffff !important;
            }
            
            /* Login Button */
            .Login {
                background: ${isDark ? '#1C2582' : '#1C2582'} !important;
                color: #ffffff !important;
            }
            
            .Login i,
            .Login span {
                color: #ffffff !important;
            }
            
            .Login:hover {
                background: ${isDark ? '#2a3aa0' : '#2a3aa0'} !important;
            }
            
            .footer-brand p,
            .footer-section h3,
            .footer-section ul li a,
            .copyright {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Navigation */
            .the-navs ul a li {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            /* Language Selector - Keep original styles */
            .language-selector-wrapper,
            .language-trigger,
            .language-dropdown,
            .language-option,
            .option-text,
            .checkmark {
                color: initial !important;
                background: initial !important;
            }
            
            .language-dropdown {
                background: ${isDark ? '#1a1a1a' : '#ffffff'} !important;
                border: ${isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'} !important;
            }
            
            .language-option {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .language-option:hover {
                background: ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'} !important;
            }
            
            .language-option.active {
                background: ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'} !important;
            }
            
            /* Products Page Styling */
            .hero h1 {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .hero p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            /* Product Cards */
            .product-card {
                background: ${isDark ? '#1a1a1a' : '#ffffff'} !important;
                border: ${isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e5e5e5'} !important;
            }
            
            .product-card:hover {
                border-color: ${isDark ? 'rgba(255, 255, 255, 0.3)' : '#000000'} !important;
                box-shadow: ${isDark ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .product-image {
                background: ${isDark ? '#2a2a2a' : '#fafafa'} !important;
            }
            
            .product-card:hover .product-image {
                background: ${isDark ? '#333333' : '#f5f5f5'} !important;
            }
            
            .product-category {
                color: ${isDark ? '#999999' : '#999999'} !important;
            }
            
            .product-title {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .product-description {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .product-footer {
                border-top: ${isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #f0f0f0'} !important;
            }
            
            .product-price {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .product-btn {
                background: ${isDark ? '#ffffff' : '#000000'} !important;
                color: ${isDark ? '#000000' : '#ffffff'} !important;
            }
            
            .product-btn:hover {
                background: ${isDark ? '#e0e0e0' : '#333333'} !important;
            }
            
            .badge {
                background: ${isDark ? '#ffffff' : '#000000'} !important;
                color: ${isDark ? '#000000' : '#ffffff'} !important;
            }
            
            .badge.sale {
                background: ${isDark ? '#000000' : '#ffffff'} !important;
                color: ${isDark ? '#ffffff' : '#000000'} !important;
                border: ${isDark ? '1px solid #ffffff' : '1px solid #000000'} !important;
            }
            
            /* Pricing Page Styles */
            .header h1 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .header p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .header a {
                color: ${isDark ? '#818cf8' : '#4f46e5'} !important;
            }
            
            .pricing-card {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .pricing-card:hover {
                box-shadow: ${isDark ? '0 20px 60px rgba(255, 255, 255, 0.15)' : '0 20px 60px rgba(0, 0, 0, 0.12)'} !important;
            }
            
            .pricing-card.featured {
                border: ${isDark ? '3px solid #818cf8' : '3px solid #1C2582'} !important;
            }
            
            .plan-name {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .plan-description {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .price {
                color: ${isDark ? '#999999' : '#999999'} !important;
            }
            
            .currency,
            .amount {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .period {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .billing-info {
                color: ${isDark ? '#999999' : '#999999'} !important;
            }
            
            .cta-button.primary {
                background: ${isDark ? '#818cf8' : '#1C2582'} !important;
                color: #ffffff !important;
            }
            
            .cta-button.primary:hover {
                background: ${isDark ? '#6366f1' : '#1a2270'} !important;
            }
            
            .cta-button.secondary {
                background: transparent !important;
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
                border: ${isDark ? '2px solid rgba(255, 255, 255, 0.2)' : '2px solid #e5e7eb'} !important;
            }
            
            .cta-button.secondary:hover {
                background: ${isDark ? 'rgba(255, 255, 255, 0.1)' : '#f9fafb'} !important;
                border-color: ${isDark ? 'rgba(255, 255, 255, 0.3)' : '#d1d5db'} !important;
            }
            
            .additional-link a {
                color: ${isDark ? '#818cf8' : '#4f46e5'} !important;
            }
            
            .additional-link a:hover {
                color: ${isDark ? '#6366f1' : '#1C2582'} !important;
            }
            
            .divider {
                background: ${isDark ? 'rgba(255, 255, 255, 0.1)' : '#e5e7eb'} !important;
            }
            
            .highlights-title {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .features-list li {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#4b5563'} !important;
            }
            
            .features-list li:before {
                color: ${isDark ? '#34d399' : '#10b981'} !important;
            }
            
            /* Comparison Table */
            .comparison-container {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .header-section h2 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .header-section p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .comparison-table thead {
                background: ${isDark ? '#1a1a1a' : '#f8f9fa'} !important;
            }
            
            .comparison-table th {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
                border-bottom: ${isDark ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid #e5e7eb'} !important;
            }
            
            .comparison-table th.highlight {
                background: ${isDark ? '#312e81' : '#e0e7ff'} !important;
                color: ${isDark ? '#818cf8' : '#4f46e5'} !important;
            }
            
            .comparison-table tbody tr:hover {
                background: ${isDark ? 'rgba(255, 255, 255, 0.05)' : '#f9fafb'} !important;
            }
            
            .comparison-table td {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#4b5563'} !important;
                border-bottom: ${isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid #f3f4f6'} !important;
            }
            
            .comparison-table td:first-child {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .comparison-table td.highlight {
                background: ${isDark ? 'rgba(129, 140, 248, 0.1)' : '#f5f7ff'} !important;
            }
            
            .category-row td {
                background: ${isDark ? '#1a1a1a' : '#f8f9fa'} !important;
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .checkmark {
                color: ${isDark ? '#34d399' : '#10b981'} !important;
            }
            
            .info-icon {
                border: ${isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #d1d5db'} !important;
                color: ${isDark ? '#999999' : '#9ca3af'} !important;
            }
            
            /* About Us Page Styles */
            .hero-section {
                background: ${isDark ? 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' : 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)'} !important;
            }
            
            .hero-content h1 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .hero-content .subtitle {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .hero-content .description {
                color: ${isDark ? '#818cf8' : '#1C2582'} !important;
            }
            
            /* Stats Section */
            .stats-section {
                background: transparent !important;
            }
            
            .stat-card {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .stat-card:hover {
                box-shadow: ${isDark ? '0 20px 60px rgba(255, 255, 255, 0.15)' : '0 20px 60px rgba(0, 0, 0, 0.12)'} !important;
            }
            
            .stat-number {
                color: ${isDark ? '#818cf8' : '#1C2582'} !important;
            }
            
            .stat-label {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            /* Mission Section */
            .mission-section {
                background: transparent !important;
            }
            
            .mission-content h2 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .mission-content p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#4b5563'} !important;
            }
            
            .mission-image {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            /* Values Section */
            .values-section {
                background: ${isDark ? '#1a1a1a' : '#ffffff'} !important;
            }
            
            .values-header h2 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .values-header p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .value-card {
                background: ${isDark ? 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)' : 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)'} !important;
            }
            
            .value-icon {
                background: ${isDark ? '#818cf8' : '#1C2582'} !important;
            }
            
            .value-card h3 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .value-card p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#4b5563'} !important;
            }
            
            /* Team Section */
            .team-section {
                background: transparent !important;
            }
            
            .team-header h2 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .team-header p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .team-card {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .team-card:hover {
                box-shadow: ${isDark ? '0 20px 60px rgba(255, 255, 255, 0.15)' : '0 20px 60px rgba(0, 0, 0, 0.12)'} !important;
            }
            
            .team-avatar {
                background: ${isDark ? 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)' : 'linear-gradient(135deg, #1C2582 0%, #764ba2 100%)'} !important;
            }
            
            .team-card h3 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .team-card .position {
                color: ${isDark ? '#818cf8' : '#1C2582'} !important;
            }
            
            .team-card p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            /* CTA Section */
            .cta-section {
                background: transparent !important;
            }
            
            .cta-content {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .cta-content h2 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .cta-content p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .cta-button {
                background: ${isDark ? '#818cf8' : '#1C2582'} !important;
                color: #ffffff !important;
            }
            
            .cta-button:hover {
                background: ${isDark ? '#6366f1' : '#1a2270'} !important;
            }
            
            /* Contact Us Page Styles */
            .contact-main-section {
                background: transparent !important;
            }
            
            /* Contact Form */
            .contact-form-container {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .contact-form-container h2 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            .hero-content h1 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }

            .hero-content p {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .contact-form-container .form-subtitle {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .form-group label {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .form-group input,
            .form-group textarea,
            .form-group select {
                background: ${isDark ? '#1a1a1a' : '#f9fafb'} !important;
                border: ${isDark ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid #e5e7eb'} !important;
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .form-group input::placeholder,
            .form-group textarea::placeholder {
                color: ${isDark ? '#999999' : '#9ca3af'} !important;
            }
            
            .form-group input:focus,
            .form-group textarea:focus,
            .form-group select:focus {
                border-color: ${isDark ? '#818cf8' : '#1C2582'} !important;
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
            }
            
            .submit-button {
                background: ${isDark ? '#818cf8' : '#1C2582'} !important;
                color: #ffffff !important;
            }
            
            .submit-button:hover {
                background: ${isDark ? '#6366f1' : '#4338ca'} !important;
            }
            
            /* Contact Info Cards */
            .info-card {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .info-card:hover {
                box-shadow: ${isDark ? '0 20px 60px rgba(255, 255, 255, 0.15)' : '0 20px 60px rgba(0, 0, 0, 0.12)'} !important;
            }
            
            .info-icon {
                background: ${isDark ? '#818cf8' : '#1C2582'} !important;
            }
            
            .info-card h3 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .info-card p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#4b5563'} !important;
            }
            
            .info-card a {
                color: ${isDark ? '#818cf8' : '#4f46e5'} !important;
            }
            
            .info-card a:hover {
                color: ${isDark ? '#6366f1' : '#4338ca'} !important;
            }
            
            /* FAQ Section */
            .faq-section {
                background: ${isDark ? '#1a1a1a' : '#ffffff'} !important;
            }
            
            .faq-header h2 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .faq-header p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .faq-item {
                background: ${isDark ? 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)' : 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)'} !important;
            }
            
            .faq-question {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            .faq-answer {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#4b5563'} !important;
                border-top: ${isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #d1d5db'} !important;
            }
            
            /* Map Section */
            .map-section {
                background: transparent !important;
            }
            
            .map-container {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                box-shadow: ${isDark ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 10px 40px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .map-container h2 {
                color: ${isDark ? '#ffffff' : '#1a1a1a'} !important;
            }
            
            /* Video Page Styles */
            .main-content {
                background: transparent !important;
            }
            
            /* Video Hero */
            .video-hero h1 {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .video-hero p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            /* Video Player Wrapper */
            .video-player-wrapper {
                background: ${isDark ? '#1a1a1a' : '#000000'} !important;
                box-shadow: ${isDark ? '0 30px 60px rgba(0, 0, 0, 0.8)' : '0 30px 60px rgba(0, 0, 0, 0.15)'} !important;
            }
            
            .video-player-wrapper:hover {
                box-shadow: ${isDark ? '0 40px 80px rgba(0, 0, 0, 0.9)' : '0 40px 80px rgba(0, 0, 0, 0.2)'} !important;
            }
            
            .video-player {
                background: ${isDark ? '#000000' : '#000000'} !important;
            }
            
            /* Video Controls */
            .control-btn {
                background: ${isDark ? 'rgba(129, 140, 248, 0.9)' : 'rgba(255, 255, 255, 0.9)'} !important;
                color: ${isDark ? '#ffffff' : '#1C2582'} !important;
            }
            
            .control-btn:hover {
                background: ${isDark ? '#818cf8' : '#ffffff'} !important;
            }
            
            /* Video Info */
            .video-title {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .video-meta {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .video-description {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#444444'} !important;
            }
            
            .video-description ul li {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#444444'} !important;
            }
            
            /* Related Videos */
            .related-videos h2 {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .related-card {
                background: ${isDark ? '#2a2a2a' : '#ffffff'} !important;
                border: ${isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e5e5e5'} !important;
            }
            
            .related-card:hover {
                border-color: ${isDark ? '#818cf8' : '#1C2582'} !important;
                box-shadow: ${isDark ? '0 10px 25px rgba(0, 0, 0, 0.5)' : '0 10px 25px rgba(0, 0, 0, 0.08)'} !important;
            }
            
            .related-thumbnail {
                background: ${isDark ? '#1a1a1a' : '#f0f0f0'} !important;
            }
            
            .play-overlay {
                background: ${isDark ? 'rgba(129, 140, 248, 0.9)' : 'rgba(28, 37, 130, 0.9)'} !important;
            }
            
            .related-info h3 {
                color: ${isDark ? '#ffffff' : '#000000'} !important;
            }
            
            .related-info p {
                color: ${isDark ? 'rgb(203, 203, 203)' : '#666666'} !important;
            }
            
            .related-duration {
                color: ${isDark ? '#818cf8' : '#1C2582'} !important;
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