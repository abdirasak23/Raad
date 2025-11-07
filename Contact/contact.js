// Contact Form Handler with EmailJS Integration
const EMAILJS_SERVICE_ID = 'service_m1eu8cu';
const EMAILJS_TEMPLATE_ID = 'template_99ayf2j';
const EMAILJS_PUBLIC_KEY = 'keinUatIDCLb1QppA';

// Wait for EmailJS
function waitForEmailJS() {
    return new Promise((resolve, reject) => {
        if (typeof emailjs !== 'undefined') {
            resolve();
            return;
        }
        
        let attempts = 0;
        const maxAttempts = 50;
        
        const checkInterval = setInterval(() => {
            attempts++;
            if (typeof emailjs !== 'undefined') {
                clearInterval(checkInterval);
                resolve();
            } else if (attempts >= maxAttempts) {
                clearInterval(checkInterval);
                reject(new Error('EmailJS failed to load'));
            }
        }, 100);
    });
}

// Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    if (!phone) return true;
    const re = /^[\d\s\+\-\(\)]+$/;
    return re.test(phone);
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.fullName || formData.fullName.trim().length < 2) {
        errors.push('Please enter a valid full name');
    }
    
    if (!validateEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!validatePhone(formData.phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    if (!formData.subject || formData.subject === '') {
        errors.push('Please select a subject');
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters');
    }
    
    return errors;
}

// Notifications
function showNotification(message, type = 'success') {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 20px 30px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-family: 'Outfit', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        line-height: 1.5;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function showErrors(errors) {
    errors.forEach((error, index) => {
        setTimeout(() => showNotification(error, 'error'), index * 300);
    });
}

// Get subject text
function getSubjectText(value) {
    const subjects = {
        'sales': 'Sales Inquiry',
        'support': 'Technical Support',
        'billing': 'Billing Question',
        'demo': 'Request a Demo',
        'other': 'Other'
    };
    return subjects[value] || value;
}

// Form Handler
function initContactForm() {
    const contactForm = document.querySelector('.contact-form-container form');
    
    if (!contactForm) {
        console.error('❌ Contact form not found!');
        return;
    }
    
    console.log('✅ Contact form found and initialized');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.submit-button');
        const originalButtonText = submitButton.textContent;
        
        // Collect form data
        const formData = {
            fullName: this.querySelector('input[type="text"]').value.trim(),
            email: this.querySelector('input[type="email"]').value.trim(),
            phone: this.querySelector('input[type="tel"]').value.trim(),
            subject: this.querySelector('select').value,
            message: this.querySelector('textarea').value.trim(),
            timestamp: new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
            })
        };
        
        console.log('📝 Form Data:', formData);
        
        // Validate
        const errors = validateForm(formData);
        if (errors.length > 0) {
            console.log('❌ Validation errors:', errors);
            showErrors(errors);
            return;
        }
        
        // Loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
        submitButton.style.opacity = '0.7';
        
        try {
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS not loaded. Please refresh the page.');
            }
            
            // IMPORTANT: Template parameters EXACTLY matching your template
            const templateParams = {
                from_name: formData.fullName,
                from_email: formData.email,
                phone: formData.phone || 'Not provided',
                subject: getSubjectText(formData.subject),
                message: formData.message,
                timestamp: formData.timestamp
            };
            
            console.log('📧 Sending email with params:', templateParams);
            console.log('Service ID:', EMAILJS_SERVICE_ID);
            console.log('Template ID:', EMAILJS_TEMPLATE_ID);
            
            // Send via EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            
            console.log('✅ SUCCESS! Email sent:', response);
            console.log('Response status:', response.status);
            console.log('Response text:', response.text);
            
            showNotification(
                'Thank you! Your message has been sent successfully. We\'ll respond within 24 hours.',
                'success'
            );
            
            // Reset form
            this.reset();
            
        } catch (error) {
            console.error('❌ SEND FAILED!');
            console.error('Error object:', error);
            console.error('Error status:', error.status);
            console.error('Error text:', error.text);
            console.error('Error message:', error.message);
            
            let errorMessage = 'Failed to send message. ';
            
            if (error.text) {
                errorMessage += error.text;
            } else if (error.message) {
                errorMessage += error.message;
            } else {
                errorMessage += 'Please try again or email us directly at info@raadapp.com';
            }
            
            showNotification(errorMessage, 'error');
            
        } finally {
            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            submitButton.style.cursor = 'pointer';
            submitButton.style.opacity = '1';
        }
    });
    
    addRealtimeValidation(contactForm);
}

// Real-time validation
function addRealtimeValidation(form) {
    const emailInput = form.querySelector('input[type="email"]');
    const nameInput = form.querySelector('input[type="text"]');
    const messageInput = form.querySelector('textarea');
    
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#e5e7eb';
        }
    });
    
    nameInput.addEventListener('blur', function() {
        if (this.value && this.value.trim().length < 2) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#e5e7eb';
        }
    });
    
    messageInput.addEventListener('blur', function() {
        if (this.value && this.value.trim().length < 10) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#e5e7eb';
        }
    });
    
    [emailInput, nameInput, messageInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#1C2582';
        });
    });
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = question.querySelector('span');
        
        answer.style.display = 'none';
        
        question.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';
            
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherToggle = otherItem.querySelector('.faq-question span');
                otherAnswer.style.display = 'none';
                otherToggle.textContent = '+';
            });
            
            if (!isOpen) {
                answer.style.display = 'block';
                toggle.textContent = '−';
            }
        });
    });
    
    console.log('✅ FAQ accordion initialized');
}

// Initialize everything
async function initialize() {
    console.log('🚀 Starting initialization...');
    
    try {
        await waitForEmailJS();
        console.log('✅ EmailJS loaded');
        
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('✅ EmailJS initialized with key:', EMAILJS_PUBLIC_KEY);
        
        initContactForm();
        initFAQAccordion();
        
        console.log('🎉 Everything ready!');
        
    } catch (error) {
        console.error('❌ Init error:', error);
        showNotification(
            'Failed to load email service. Please refresh or contact info@raadapp.com',
            'error'
        );
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}