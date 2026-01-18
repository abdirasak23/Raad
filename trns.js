// translation.js - Complete Translation System

// Language data
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_products: "Products",
    nav_pricing: "Pricing",
    nav_about: "About Us",
    nav_contact: "Contact Us",
    login: "Login",
    
    // Hero Section
    hero_sell: "Sell. Manage.",
    hero_grow: "Grow.",
    hero_scale: "Scale.",
    hero_thrive: "Thrive.",
    hero_description: "Tired of manual books, scattered inventory, and complex sales? Raad brings your entire business into one app, replacing multiple tools for seamless POS, stock, and credit management, all designed for growth",
    
    // Center Section
    center_title: "From Notebooks to Next-Gen.",
    center_description: "Upgrade from paper notebooks to a next-gen business tool. Raad digitizes your sales, inventory, and customer credit, giving you live insights to run your shop with total confidence.",
    
    // Sides Section
    sides_title: "Your Entire Business, in Your Pocket.",
    sides_description: "Forget messy notebooks and lost records. Raad transforms your smartphone into a powerful Point of Sale system. Instantly track sales, manage your complete inventory, and control customer credit (Dayn) with a few simple taps. Sell faster, work smarter, and reclaim your time.",
    learn_more: "Learn More",
    
    // Demo Section
    demo_title: "Your Smartphone is Now Your Point of Sale.",
    demo_description: "Raad transforms the device you use every day into a complete, intelligent Point of Sale system.",
    
    // Demo Card 1 - Barcode
    demo1_title: "List new products and find existing ones, all by simply scanning a barcode.",
    demo1_description: "Transform your workflow with the power of barcode scanning. Raad turns your phone's camera into an instant business tool, helping you save time and eliminate manual entry errors.",
    demo1_point1: "List new products by scanning barcodes instantly.",
    demo1_point2: "Find any existing product quickly by scanning its barcode.",
    demo1_point3: "Add products to cart effortlessly with a simple barcode scan.",
    
    // Demo Card 2 - Checkout
    demo2_title: "Build a customer's order and finalize the sale, all with a simple, speedy checkout.",
    demo2_description: "Accelerate your entire checkout process from start to finish. Raad turns your phone into a high-speed sales tool, letting you scan items directly to the cart and finalize transactions in just a few taps.",
    demo2_point1: "Tap any product to instantly add it to your customer's cart.",
    demo2_point2: "Easily adjust the quantity of any item directly within the cart.",
    demo2_point3: "Select a payment type, like cash or credit, to complete the sale.",
    
    // Demo Card 3 - Reports
    demo3_title: "Track every single sale and see the big picture, with powerful reports for any date range.",
    demo3_description: "Go beyond just making sales—understand what they mean. Raad gives you the power to see your business from every angle. Drill down into the details of any single order.",
    demo3_point1: "Review the complete details for every single order you make.",
    demo3_point2: "Track all your orders from today, this week, or any month.",
    demo3_point3: "Get powerful reports with real insights to grow your business.",
    
    // About Section
    about_title: "About Us",
    about_heading: "Your Smart Business Book.",
    about_description: "The Raad app helps you manage your business by upgrading your old notebook to a Smart Business Book. Everything you need to run your operations now fits right in your pocket. Instantly track all your sales and manage your complete inventory with ease. Gain powerful insights and maintain total control over your business data. Make smarter decisions and watch your business grow with Raad.",
    
    // YouTube Section
    youtube_title: "Watch Raad Start Growth of your Business",
    youtube_description: "Manage and run your business, all in one app. Get the insights to grow, with a live view of every product that comes in and goes out of your store.",
    
    // FAQ Section
    faq_title: "FAQ",
    faq1_q: "What is Raad?",
    faq1_a: "Raad is an all-in-one Point of Sale (POS) application that turns your smartphone into a complete business management system. It's designed for small to medium businesses to easily track sales, manage inventory, handle customer credit (Dayn), and get powerful insights to grow their business. It replaces your traditional paper notebook with a smart, secure, and simple solution.",
    faq2_q: "Can I use Raad if my internet connection is not stable?",
    faq2_a: "Yes, absolutely. Raad is designed to work offline. You can continue to make sales, add products, and manage your inventory even without an internet connection. All the data is saved securely on your device and will automatically sync with your online account the moment you reconnect to the internet. You never have to worry about losing a sale due to bad connectivity.",
    faq3_q: "What if I sell products that do not have a barcode?",
    faq3_a: "No problem at all. Raad is built for the reality of your shop. While you can use your phone's camera to instantly scan products with barcodes, you can also add any product manually. It's perfect for a business that sells both manufactured goods (like sodas) and local or handmade items (like sambusas or crafts).",
    faq4_q: "How does the Customer Credit (Dayn) feature work?",
    faq4_a: "Our Dayn Tracker is a powerful tool to replace your messy paper debt book. When a customer buys on credit, you can record the sale and link it to their profile. The app securely tracks how much each customer owes you, with a full transaction history. You can also record partial payments and send polite payment reminders via WhatsApp or SMS with a single tap, helping you recover your money faster.",
    faq5_q: "Is my business data safe and private?",
    faq5_a: "Yes, your data's security is our top priority. All your business information is securely stored in the cloud using industry-standard encryption. If your phone is lost, stolen, or broken, you don't lose anything. You can simply download Raad on a new device, log in to your account, and all your sales, products, and customer data will be instantly restored.",
    faq6_q: "What is the \"Level Up\" system for the free plan?",
    faq6_a: "Instead of a heavily restricted free plan, Raad rewards you for using the app and helping our community grow. As a free user, you start at Level 1 with generous limits. By making sales and referring other business owners, you earn experience points (XP). As you gain XP, you \"Level Up\" and unlock higher limits for products, staff accounts, and more, all for free!",
    faq7_q: "How do I print receipts for my customers?",
    faq7_a: "Raad can connect to most standard Bluetooth thermal printers. After a sale is complete, you will have the option to print a professional, physical receipt. You can also choose to save paper by sending a digital receipt directly to your customer via WhatsApp or SMS, giving you and your customers a modern and flexible experience.",
    
    // Footer
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    footer_rights: "© 2025 Raad. All rights reserved."
  },
  
  so: {
    // Navigation
    nav_home: "Guriga",
    nav_products: "Alaabta",
    nav_pricing: "Qiimaha",
    nav_about: "Naga Saabsan",
    nav_contact: "Nala Soo Xiriir",
    login: "Gal",
    
    // Hero Section
    hero_sell: "Iibi. Maamul.",
    hero_grow: "Kobci.",
    hero_scale: "Ballaari.",
    hero_thrive: "Horumari.",
    hero_description: "Ma daaleen buugaag gacmeed, alaab kala firdhay, iyo iibka oo adag? Raad waxay ganacsigaaga oo dhan ku soo koobaysaa hal app, beddela qalabyo badan si aad u hesho POS fudud, kayd, iyo maamulka deynta, oo dhan loo sameeyay koboc",
    
    // Center Section
    center_title: "Ka Soo Buuxo Buugaagta Ilaa Jiilka Cusub.",
    center_description: "Kor u qaad buugaagta warqadda ah ilaa qalab ganacsi oo casri ah. Raad waxay dijitaalaysaa iibkaaga, alaabta, iyo deynta macaamiisha, iyada oo ku siinaysa aragtiyo toos ah si aad ugu maamulto dukaagaaga kalsooni buuxda.",
    
    // Sides Section
    sides_title: "Ganacsigaaga Oo Dhan, Jeebka Ku Jira.",
    sides_description: "Illoow buugaag qashin ah iyo diiwaanno lumay. Raad waxay taleefankaaga casriga ah u beddelaysaa nidaam Point of Sale oo awood leh. Si degdeg ah u raadi iibka, maamul alaabta oo dhan, oo u xakamee deynta macaamiisha (Dayn) dhawr taabashada oo fudud. Iibi si dhakhso leh, u shaqee si caqli ah, oo waqtigaaga soo celi.",
    learn_more: "Baro Wax Dheeraad Ah",
    
    // Demo Section
    demo_title: "Taleefankaaga Waa Point of Sale Hadda.",
    demo_description: "Raad waxay qaybta aad maalin kasta isticmaasho u beddelaysaa nidaam Point of Sale oo dhammaystiran oo caqli leh.",
    
    // Demo Card 1 - Barcode
    demo1_title: "Liisti alaab cusub oo hel kuwa jira, oo dhan kaliya adigoo baadhaya barcode.",
    demo1_description: "U beddel shaqadaada awood baadhista barcode. Raad waxay kaameeradda taleefankaaga u beddelaysaa qalab ganacsi degdeg ah, kaasoo kaa caawinaya inaad wakhti badbaadiso oo aad ka fogaato khaladaadka gelinta gacanta.",
    demo1_point1: "Liisti alaab cusub adigoo si degdeg ah u baadhaya barcode.",
    demo1_point2: "Hel alaab kasta oo jira si dhakhso leh adigoo baadhaya barcode-kiisa.",
    demo1_point3: "Ku dar alaabta cart si fudud oo kaliya barcode baadhis fudud.",
    
    // Demo Card 2 - Checkout
    demo2_title: "Dhis dalabka macmiilka oo dhammaystir iibka, oo dhan oo leh checkout fudud oo dhakhso leh.",
    demo2_description: "Dedejiyay habka checkout-gaaga oo dhan bilowga ilaa dhammaadka. Raad waxay taleefankaaga u beddelaysaa qalab iibis oo aad u dhakhso badan, oo kuu oggolaanaysa inaad alaabta toos ugu baadhato cart-ka oo aad dhammaystirto ganacsiga dhawr taabashada oo keliya.",
    demo2_point1: "Taabo alaab kasta si degdeg ah ugu darno cart-ka macmiilkaaga.",
    demo2_point2: "Si fudud u hagaaji tirada alaab kasta oo toos ah gudaha cart-ka.",
    demo2_point3: "Dooro nooca lacag bixinta, sida lacagta caddaan ah ama deyn, si aad u dhammaystirto iibka.",
    
    // Demo Card 3 - Reports
    demo3_title: "Raadi iib kasta oo aad samayso oo arag sawirka weyn, warbixin awood leh oo wakhti kasta.",
    demo3_description: "Ka bax oo kaliya samaynta iibka—faham waxa ay micnahoodu tahay. Raad waxay ku siinaysaa awoodda aad ugu aragto ganacsigaaga dhanka kasta. Hoos u dhig faahfaahinta dalabasho kasta oo keliya.",
    demo3_point1: "Dib u eeg faahfaahinta oo dhan dalabka kasta oo aad samayso.",
    demo3_point2: "Raadi dhammaan dalabkaaga maanta, usbuucan, ama bil kasta.",
    demo3_point3: "Hel warbixin awood leh oo leh aragtiyo dhabta ah si aad u kobciso ganacsigaaga.",
    
    // About Section
    about_title: "Naga Saabsan",
    about_heading: "Buuggaaga Ganacsiga Ee Caqliga Leh.",
    about_description: "Raad app-ka wuxuu kaa caawinayaa inaad maamusho ganacsigaaga adigoo cusboonaysiinaya buuggaagii hore ee warqadda ah ilaa Buug Ganacsi Oo Caqli Leh. Wax kasta oo aad u baahan tahay inaad ku maamulto hawlahaaga hadda waxay ku jiraan jeebkaaga. Si degdeg ah u raadi dhammaan iibkaaga oo maamul alaabta oo dhan si fudud. Hel aragtiyo awood leh oo xakamee xogta ganacsigaaga oo dhan. Samayso go'aamo caqli ah oo daawado ganacsigaaga oo kobcaya Raad.",
    
    // YouTube Section
    youtube_title: "Daawo Raad Oo Bilaabaya Kobaca Ganacsigaaga",
    youtube_description: "Maamul oo orod ganacsigaaga, oo dhan hal app. Hel aragtiyo si aad u kobciso, iyada oo leh aragtida tooska ah ee alaab kasta oo soo gala oo ka baxa dukaagaaga.",
    
    // FAQ Section
    faq_title: "Su'aalaha Inta Badan La Isweydiiyo",
    faq1_q: "Waa maxay Raad?",
    faq1_a: "Raad waa barnaamij Point of Sale (POS) oo dhamaystiran kaas oo taleefankaaga casriga ah u beddelaya nidaam maaraynta ganacsi oo dhammaystiran. Waxaa loo qoondeeyay ganacsiyada yaryar iyo kuwa dhexe si fudud u raadiyaan iibka, maamulaan alaabta, u maamulaan deynta macaamiisha (Dayn), iyo inay helaan aragtiyo awood leh si ay u kobciyaan ganacsigoodka. Waxay beddesho buuggaaga dhaqameedka warqadda adigoo leh xal caqli leh, ammaan, iyo mid fudud.",
    faq2_q: "Miyaan isticmaali karaa Raad haddii internetkaygu aan ahayn mid xooggan?",
    faq2_a: "Haa, daacad ahaan. Raad waxaa loo qoondeeyay inay offline ka shaqayso. Waad sii wadi kartaa inaad samayso iibka, ku darto alaabta, oo maamusho alaabta xitaa iyadoo aan lahayn xidhiidh internet. Dhammaan xogtu si ammaan leh ayaa loogu kaydiyaa qalabkaaga waxayna si toos ah ugu isku dubi doontaa akoonkaaga online ah isla markii aad dib ugu xidhiidho internetka. Waligaa ma walwalsan kartid inaad lumiso iib sababtoo ah xidhiidh xun.",
    faq3_q: "Maxaa dhacaya haddii aan iibiyo alaab aan lahayn barcode?",
    faq3_a: "Dhibaato ma jirto dhammaan. Raad waxaa loo dhisay xaqiiqda dukaagaaga. Inkasta oo aad isticmaali karto kaameeradda taleefankaaga si degdeg ah u baadhato alaabta leh barcode, waad ku dari kartaa sidoo kale alaab kasta si gacmeed ah. Waa ku habboon ganacsi iibiya alaab soo saaran (sida soda) iyo alaab maxalli ah ama gacanta lagu sameeyay (sida sambusas ama farshaxan).",
    faq4_q: "Sidee bay u shaqaysaa astaanta Deynta Macmiilka (Dayn)?",
    faq4_a: "Dayn Tracker-keennu waa qalab awood leh oo beddelaya buuggaaga qashinka ah ee deynta. Marka macmiilku ku iibsado deyn, waad diiwaan gashan kartaa iibka oo ku xidhi kartaa profile-kooda. App-ku si ammaan leh ayuu u raadiyaa inta qofkasta oo macmiil ahi kuu leeyahay, isagoo leh taariikhda wax kala iibsiga oo dhan. Waad diiwaan gashan kartaa sidoo kale lacag bixinta qayb ahaan oo aad u diri kartaa xusuusinta lacag bixinta si edeb leh iyada oo loo adeegsanayo WhatsApp ama SMS hal taabashada oo keliya, kaa caawinaysa inaad si dhakhso leh u soo celiso lacagtaada.",
    faq5_q: "Xogtayda ganacsigu ma ammaan badan tahay oo qarsoodi ah?",
    faq5_a: "Haa, ammaanka xogtaada ayaa ah mudnaanta ugu sarraysa. Dhammaan macluumaadka ganacsigaaga si ammaan leh ayaa loogu kaydiyaa daruuraha iyada oo la adeegsanayo sirta heerka warshadaha. Haddii taleefankaagu lummo, la xado, ama uu jabto, waxba kuma lumaysid. Si fudud ayaad u soo dejisan kartaa Raad qalab cusub, u gali kartaa akoonkaaga, dhammaan iibkaaga, alaabta, iyo xogta macmiilka ayaa si degdeg ah dib loogu soo celin doonaa.",
    faq6_q: "Waa maxay nidaamka \"Heerka Kor U Qaadida\" ee qorshaha bilaashka ah?",
    faq6_a: "Halkii qorshe bilaash ah oo aad u xaddidan, Raad waxay ku abaalmartaa adiga oo adeegsanaya app-ka oo ka caawinaya koox bulsheenada ay kobcaan. Isticmaalaha bilaashka ah, waxaad ku bilaabtaa Heerka 1 oo leh xadad deeqsanayn. Markaad samaysato iibka iyo tusitaanka ganacsiyada kale ee milkiilayaasha, waaxay u kasbataa dhibco khibradeed (XP). Marka aad hesho XP, waxaad \"Heerka Kor U Qaadidaa\" oo furtaa xad sare oo alaabta, akoonka shaqaalaha, iyo wax dheeraad ah, oo dhan bilaash!",
    faq7_q: "Sideen u daabacaa rasiidhka macaamiishayda?",
    faq7_a: "Raad waxay ku xidhi kartaa inta badan daabacayaasha kulaylka Bluetooth ee caadiga ah. Ka dib marka iibku dhammaado, waxaad yeelan doontaa ikhtiyaarka aad daabacdo rasiidh xirfadeed oo jireed. Sidoo kale waad dooran kartaa inaad badbaadiso warqad adigoo u diraya rasiidh dijitaal ah toos macmiilkaaga iyada oo loo adeegsanayo WhatsApp ama SMS, siinaya adiga iyo macaamiishaada waayo-aragnimo casri ah oo dabacsanaan leh."
  }
};

// Get current language from localStorage or default to English
let currentLanguage = localStorage.getItem('raad_language') || 'en';

// Initialize translation system
function initTranslation() {
  // Create and setup dropdown
  const translationBtn = document.querySelector('.translation');
  if (!translationBtn) return;
  
  const dropdown = document.createElement('div');
  dropdown.className = 'translation-dropdown';
  dropdown.style.cssText = `
    position: absolute;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: none;
    margin-top: 10px;
    min-width: 180px;
    z-index: 1000;
    right: 0;
  `;
  
  dropdown.innerHTML = `
    <div class="dropdown-item" data-lang="so" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #eee;">
      <img src="assets/images/somalia.png" alt="Somali" style="width: 24px; height: 16px; object-fit: cover;">
      <span>Somali</span>
    </div>
    <div class="dropdown-item" data-lang="en" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 10px;">
      <img src="assets/images/usa.jpg" alt="English" style="width: 24px; height: 16px; object-fit: cover;">
      <span>English</span>
    </div>
  `;
  
  translationBtn.parentElement.style.position = 'relative';
  translationBtn.parentElement.appendChild(dropdown);
  
  // Update flag in button based on current language
  updateTranslationButton(currentLanguage);
  
  // Toggle dropdown
  translationBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Handle language selection
  const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#f5f5f5';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'white';
    });
    
    item.addEventListener('click', () => {
      const selectedLang = item.getAttribute('data-lang');
      changeLanguage(selectedLang);
      dropdown.style.display = 'none';
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdown.style.display = 'none';
  });
  
  // Apply initial translation
  translatePage();
}

// Update the flag in translation button
function updateTranslationButton(lang) {
  const translationBtn = document.querySelector('.translation img');
  if (!translationBtn) return;
  
  if (lang === 'so') {
    translationBtn.src = 'assets/images/somalia.png';
    translationBtn.alt = 'Somali';
  } else {
    translationBtn.src = 'assets/images/usa.jpg';
    translationBtn.alt = 'English';
  }
}

// Change language
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('raad_language', lang);
  updateTranslationButton(lang);
  translatePage();
}

// Translate the entire page
function translatePage() {
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslation);
} else {
  initTranslation();
}

// Export for use in other scripts
window.RaadTranslation = {
  changeLanguage,
  getCurrentLanguage: () => currentLanguage,
  translate: (key) => translations[currentLanguage]?.[key] || key
};