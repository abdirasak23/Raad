// Translation Object - All your text in both languages
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_products: "Products",
        nav_pricing: "Pricing",
        nav_about: "About Us",
        nav_contact: "Contact Us",
        
        // Hero Section
        hero_badge: "Sale Smartly",
        hero_title: "Built for Shop Owners. Made to Scale Your",
        hero_title_span: "Business.",
        hero_desc: "Raad POS simplifies sales, invoices,",
        hero_desc_br: "and taxes so you can focus on what matters growing your business.",
        btn_download: "Download App",
        btn_watch: "Watch a video",
        
        // Ways Section
        ways_title: "A New Way of Selling",
        ways_desc: "Selling used to live in notebooks. Today, it lives on your phone.",
        old_way: "Old Way",
        old_way_desc: "Selling used to live in notebooks. Today.",
        new_way: "New Way",
        new_way_desc: "Selling used to live in notebooks. Today.",
        
        // How it Works
        how_title: "How Raad Works",
        how_desc: "Raad POS simplifies sales, invoices, and taxes so you can focus on what matters growing your business.",
        step_1_title: "Install Raad",
        step_1_desc: "Install Raad Pos App from playstore",
        
        // Business Section
        business_title: "Business We Support",
        business_desc: "Tools designed for real shop owners and everyday sellers.",
        bus_grocery: "Grocery / Supermarket",
        bus_grocery_desc: "Daily food and household essentials.",
        bus_clothing: "Clothing & Boutique",
        bus_clothing_desc: "Fashion apparel, accessories, and stylish outfits.",
        bus_cosmetics: "Cosmetics & Beauty",
        bus_cosmetics_desc: "Makeup, skincare, and beauty products.",
        bus_electronics: "Electronics",
        bus_electronics_desc: "Phones, gadgets, and electronic accessories.",
        bus_bookshop: "Bookshop & Stationery",
        bus_bookshop_desc: "Books, notebooks, and writing supplies.",
        
        // FAQ Section
        faq_q1: "What is Raad?",
        faq_a1: "Raad is an all-in-one Point of Sale (POS) application that turns your smartphone into a complete business management system. It's designed for small to medium businesses to easily track sales, manage inventory, handle customer credit (Dayn), and get powerful insights to grow their business. It replaces your traditional paper notebook with a smart, secure, and simple solution.",
        faq_q2: "Can I use Raad if my internet connection is not stable?",
        faq_a2: "Yes, absolutely. Raad is designed to work offline. You can continue to make sales, add products, and manage your inventory even without an internet connection. All the data is saved securely on your device and will automatically sync with your online account the moment you reconnect to the internet. You never have to worry about losing a sale due to bad connectivity.",
        faq_q3: "What if I sell products that do not have a barcode?",
        faq_a3: "No problem at all. Raad is built for the reality of your shop. While you can use your phone's camera to instantly scan products with barcodes, you can also add any product manually. It's perfect for a business that sells both manufactured goods (like sodas) and local or handmade items (like sambusas or crafts).",
        faq_q4: "How does the Customer Credit (Dayn) feature work?",
        faq_a4: "Our Dayn Tracker is a powerful tool to replace your messy paper debt book. When a customer buys on credit, you can record the sale and link it to their profile. The app securely tracks how much each customer owes you, with a full transaction history. You can also record partial payments and send polite payment reminders via WhatsApp or SMS with a single tap, helping you recover your money faster.",
        faq_q5: "Is my business data safe and private?",
        faq_a5: "Yes, your data's security is our top priority. All your business information is securely stored in the cloud using industry-standard encryption. If your phone is lost, stolen, or broken, you don't lose anything. You can simply download Raad on a new device, log in to your account, and all your sales, products, and customer data will be instantly restored.",
        faq_q6: "What is the \"Level Up\" system for the free plan?",
        faq_a6: "Instead of a heavily restricted free plan, Raad rewards you for using the app and helping our community grow. As a free user, you start at Level 1 with generous limits. By making sales and referring other business owners, you earn experience points (XP). As you gain XP, you \"Level Up\" and unlock higher limits for products, staff accounts, and more, all for free!",
        faq_q7: "How do I print receipts for my customers?",
        faq_a7: "Raad can connect to most standard Bluetooth thermal printers. After a sale is complete, you will have the option to print a professional, physical receipt. You can also choose to save paper by sending a digital receipt directly to your customer via WhatsApp or SMS, giving you and your customers a modern and flexible experience.",
        
        // Footer
        footer_desc: "RAAD POS is a smart, fast, and simple point-of-sale app designed for small and medium businesses. Manage sales, track products, and run your shop effortlessly.",
        footer_useful: "Useful Links",
        footer_download: "Download App",
        footer_privacy: "Privacy",
        footer_features: "Features",
        footer_barcode: "Barcode List and Sale",
        footer_management: "Management",
        footer_tracking: "Tracking",
        footer_invoice: "Invoice",
        footer_explore: "Explore",
        footer_about: "About Us",
        footer_mission: "Our Mission",
        footer_how: "How It Work",
        footer_policy: "Policy",
        footer_download_title: "Download App",
        footer_get_it: "GET IT ON",
        footer_google: "Google Play",
        footer_copyright: "© 2026 Raad - Pos Sales Tracker. All Rights Reserved.",
        
        // Language dropdown
        lang_english: "English",
        lang_somali: "Somali"
    },
    so: {
        // Navigation
        nav_home: "Bogga Hore",
        nav_products: "Alaabta",
        nav_pricing: "Qiimaha",
        nav_about: "Naga Aqoonso",
        nav_contact: "Nala Soo Xiriir",
        
        // Hero Section
        hero_badge: "Samee Iib Sareeya.",
        hero_title: "Loo dhisay ganacsatada. Loo sameeyay kobcinta",
        hero_title_span: "Ganacsigaaga.",
        hero_desc: "Raad POS wuxuu fududeeyaa iibka, xisaabaadka,",
        hero_desc_br: "iyo canshuuraha si aad ugu diirada saarto waxa muhiimka ah - koritaanka ganacsigaaga.",
        btn_download: "Soo Deji Abka",
        btn_watch: "Daawo muuqaal",
        
        // Ways Section
        ways_title: "Hab Cusub Oo Iibinta",
        ways_desc: "Iibintu waxay ku noolaatay buugag. Maanta, waxay ku nool tahay taleefankaaga.",
        old_way: "Habka Hore",
        old_way_desc: "Iibintu waxay ku noolaatay buugag. Maanta.",
        new_way: "Habka Cusub",
        new_way_desc: "Iibintu waxay ku noolaatay buugag. Maanta.",
        
        // How it Works
        how_title: "Sida Raad U Shaqeeyo",
        how_desc: "Raad POS wuxuu fududeeyaa iibka, xisaabaadka, iyo canshuuraha si aad ugu diirada saarto waxa muhiimka ah - koritaanka ganacsigaaga.",
        step_1_title: "Ku Rakib Raad",
        step_1_desc: "Ku rakib Raad Pos App ka playstore",
        
        // Business Section
        business_title: "Ganacsiyada Aan Taageerno",
        business_desc: "Qalabka loogu talagalay milkiileyaasha dukaamada dhabta ah iyo iibiyeyaasha caadiga ah.",
        bus_grocery: "Raashinka / Suuqa Weyn",
        bus_grocery_desc: "Cuntada maalinlaha ah iyo waxyaabaha guriga loo isticmaalo.",
        bus_clothing: "Dharka & Boutique",
        bus_clothing_desc: "Dharka moodeelka, qalabyada, iyo dharka quruxda badan.",
        bus_cosmetics: "Quruxda & Jacaylka",
        bus_cosmetics_desc: "Makaabka, daryeelka maqaarka, iyo alaabta quruxda.",
        bus_electronics: "Elektarooniga",
        bus_electronics_desc: "Taleefannada, qalabka casriga ah, iyo qalabyada elektarooniga ah.",
        bus_bookshop: "Dukaamada Buugaagta & Qalabka Qoraalka",
        bus_bookshop_desc: "Buugaag, buugaag yaryar, iyo alaabta qoraalka.",
        
        // FAQ Section
        faq_q1: "Waa maxay Raad?",
        faq_a1: "Raad waa arji dhammaystiran oo Point of Sale (POS) ah oo smartphone-kaaga u roga nidaam dhamaystiran oo maamulka ganacsi. Waxaa loogu talagalay ganacsiyada yaryar ilaa dhexdhexaad si ay si fudud u raadiyaan iibinta, u maamulaan alaabta, u maareeyaan deynta macaamiisha (Dayn), iyo inay helaan aragtiyo awood leh si ay u kordhiyaan ganacsigoodha. Waxay beddesho buuggaaga caadiga ah ee waraaqda oo leh xal caqli gal ah, ammaan ah, oo fudud.",
        faq_q2: "Ma isticmaali karaa Raad haddii xiriirka intarneedka aanu degganayn?",
        faq_a2: "Haa, hubaal. Raad waxaa loogu talagalay inuu ka shaqeeyo internetka la'aan. Waxaad sii wadi kartaa inaad sameyso iibinta, ku darida alaabta, iyo maaraynta alaabta xitaa internetka la'aanta. Dhammaan xogta si aammaan ah ayaa loogu kaydiyaa qalabkaaga waxayna si toos ah ugu isku dubbarid doontaa koontadaada onlaynka marka aad dib ugu xirirto internetka. Weligaa ma qabi doontid welwel ku saabsan luminta iibin xiriirka dartiis.",
        faq_q3: "Maxaa dhacaya haddii aan iibiyo alaabta aan lahayn barcode?",
        faq_a3: "Dhibaato ma jirto. Raad waxaa loo dhisay xaqiiqada dukaamadaada. Intaad isticmaali karto kaameerada taleefankaaga si degdeg ah u skaanka alaabta leh barcode, waxaad sidoo kale ku dari kartaa alaabo kasta si gacanta ah. Waxay ku habboon tahay ganacsi iibiyo labadaba alaabta la soo saaray (sida soodada) iyo alaabta maxalliga ah ama gacanta lagu sameeyay (sida sambuusada ama farshaxanka).",
        faq_q4: "Sida loo isticmaalo muuqa Deynta Macaamiisha (Dayn)?",
        faq_a4: "Raadiyaha Deynta waa qalab awood leh oo beddelaya buuggaaga deynta waraaqda jahwareersan. Marka macmiil uu ku iibsado deyn, waxaad diiwaan galin kartaa iibinta oo ku xiriri kartaa profile-kiisa. Abka si ammaan ah ayuu u raadiyaa inta qadarka ah ee macmiil kastaa uu kugu leeyahay, oo leh taariikh buuxa oo macaamilka ah. Waxaad sidoo kale diiwaan galin kartaa lacag kala mid ah oo dir kartaa xusuusiyeyaal edeb leh lacag bixin iyaga oo adeegsanaya WhatsApp ama SMS hal taabo, kaasoo kaa caawinaya inaad lacagtaada si dhakhso leh u soo cesho.",
        faq_q5: "Ma ammaan baa xogta ganacsigayga?",
        faq_a5: "Haa, amniga xogtaada ayaa ah mudnaanta koowaad. Dhammaan macluumaadka ganacsigaaga si aammaan ah ayaa loogu kaydiyaa daruuraha iyagoo adeegsanaya sirta heerka warshadeed. Haddii taleefankaaga la lumiyo, la xado, ama uu jabo, waxba ma lumin. Si fudud ayaad u soo deji kartaa Raad qalabka cusub, u geli koontadaada, iyo dhammaan iibintaada, alaabta, iyo xogta macaamiisha ayaa si degdeg ah loo soo celin doonaa.",
        faq_q6: "Waa maxay nidaamka \"Level Up\" ee qorshaha bilaashka ah?",
        faq_a6: "Halkii qorshe bilaash ah oo xaddidan, Raad wuxuu ku abaalgudaa isticmaalka abka iyo caawinta bulshadayada inay korodho. Sida isticmaale bilaash ah, waxaad ku bilaabtaa Heerka 1 daryeel deeqsinimo leh. Iyada oo sameysa iibinta iyo tixraacida milkiileyaasha ganacsiyada kale, waxaad kasbanaysaa dhibcaha khibradda (XP). Markaad helaysid XP, waxaad \"Heerka Kordhinaysaa\" oo furaysaa xadudo sare oo alaabta, koontada shaqaalaha, iyo wax kale, dhammaantood bilaash ah!",
        faq_q7: "Sideen u daabacaa rasiidka macaamiishayda?",
        faq_a7: "Raad wuxuu ku xiri karaa inta badan daabacayaasha kulaylka caadiga ah ee Bluetooth. Ka dib markii iibinta dhammaato, waxaad yeelan doontaa ikhtiyaar aad ku daabacdo rasiid xirfad leh, jir ahaan. Waxaad sidoo kale dooran kartaa inaad kaydiso warqad adigoo u diraya rasiid dijitaal ah si toos ah macaamiishaada iyaga oo adeegsanaya WhatsApp ama SMS, siinaya adiga iyo macaamiishaada khibrad casri ah oo dabacsanaan leh.",
        
        // Footer
        footer_desc: "RAAD POS waa ab caqli gal ah, degdeg ah, oo fudud oo loogu talagalay ganacsiyada yaryar iyo kuwa dhexdhexaad ah. Maareey iibinta, raadi alaabta, oo si fudud u maamul dukaamadaada.",
        footer_useful: "Xiriiriyeyaasha Waxtar leh",
        footer_download: "Soo Deji Abka",
        footer_privacy: "Sirta",
        footer_features: "Astaamo",
        footer_barcode: "Liiska Barcode iyo Iibinta",
        footer_management: "Maaraynta",
        footer_tracking: "Raadinta",
        footer_invoice: "Xisaabta",
        footer_explore: "Sahaminta",
        footer_about: "Naga Aqoonso",
        footer_mission: "Hadfkayaga",
        footer_how: "Sida Ay U Shaqeyso",
        footer_policy: "Siyaasadda",
        footer_download_title: "Soo Deji Abka",
        footer_get_it: "KU HELI",
        footer_google: "Google Play",
        footer_copyright: "© 2026 Raad - Raadiye Iibinta Pos. Dhammaan Xuquuqda Way Dhawrsanyihiin.",
        
        // Language dropdown
        lang_english: "Ingiriisi",
        lang_somali: "Soomaali"
    }
};

// Get saved language from localStorage or default to 'so' (Somali)
let currentLanguage = localStorage.getItem('selectedLanguage') || 'so';

// Function to translate the page
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save the selected language
    localStorage.setItem('selectedLanguage', lang);
    currentLanguage = lang;
}

// Initialize translation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Apply saved language
    translatePage(currentLanguage);
    
    // Update dropdown to show correct language
    updateDropdownDisplay(currentLanguage);
});

// Update the language dropdown display
function updateDropdownDisplay(lang) {
    const languageOptions = document.querySelectorAll('.language-option');
    const currentFlag = document.getElementById('currentFlag');
    
    languageOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        
        if (optionLang === lang) {
            option.classList.add('active');
            const flag = option.getAttribute('data-flag');
            
            if (currentFlag) {
                currentFlag.src = flag;
                currentFlag.alt = lang === 'so' ? 'Somali' : 'English';
            }
        } else {
            option.classList.remove('active');
        }
    });
}

// Existing dropdown functionality
const languageTrigger = document.getElementById('languageTrigger');
const languageDropdown = document.getElementById('languageDropdown');
const currentFlag = document.getElementById('currentFlag');
const languageOptions = document.querySelectorAll('.language-option');

// Toggle dropdown visibility
if (languageTrigger) {
    languageTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        languageTrigger.classList.toggle('active');
        languageDropdown.classList.toggle('show');
    });
}

// Handle language selection
languageOptions.forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        const flag = this.getAttribute('data-flag');

        // Update current flag
        if (currentFlag) {
            currentFlag.src = flag;
            currentFlag.alt = lang === 'so' ? 'Somali' : 'English';
        }

        // Update active state
        languageOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');

        // Close dropdown
        if (languageTrigger && languageDropdown) {
            languageTrigger.classList.remove('active');
            languageDropdown.classList.remove('show');
        }

        // Translate the page
        translatePage(lang);
        
        console.log(`Language changed to: ${lang === 'so' ? 'Somali' : 'English'} (${lang})`);
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (languageTrigger && languageDropdown && 
        !languageTrigger.contains(e.target) && 
        !languageDropdown.contains(e.target)) {
        languageTrigger.classList.remove('active');
        languageDropdown.classList.remove('show');
    }
});

// FAQ functionality
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('i');

        answer.classList.toggle('show');

        if (answer.classList.contains('show')) {
            icon.classList.remove('bx-chevron-down');
            icon.classList.add('bx-chevron-up');
        } else {
            icon.classList.remove('bx-chevron-up');
            icon.classList.add('bx-chevron-down');
        }
    });
});