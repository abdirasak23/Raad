const translationBtn = document.querySelector('.translation');
const dropdown = document.createElement('div');

// Style the dropdown
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
`;

// Create dropdown content
dropdown.innerHTML = `
  <div class="dropdown-item" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #eee;">
    <img src="assets/images/somalia.png" alt="Somali" style="width: 24px; height: 16px; object-fit: cover;">
    <span>Somali</span>
  </div>
  <div class="dropdown-item" style="padding: 12px 16px; cursor: pointer; display: flex; align-items: center; gap: 10px;">
    <img src="assets/images/usa.jpg" alt="United States" style="width: 24px; height: 16px; object-fit: cover;">
    <span>United States</span>
  </div>
`;

// Append dropdown to translation button's parent
translationBtn.parentElement.style.position = 'relative';
translationBtn.parentElement.appendChild(dropdown);

// Toggle dropdown on button click
translationBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isVisible = dropdown.style.display === 'block';
  dropdown.style.display = isVisible ? 'none' : 'block';
});

// Add hover effects to dropdown items
const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = '#f5f5f5';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = 'white';
  });
  
  item.addEventListener('click', () => {
    const lang = item.querySelector('span').textContent;
    console.log('Selected language:', lang);
    dropdown.style.display = 'none';
    // Add your translation logic here
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  dropdown.style.display = 'none';
});