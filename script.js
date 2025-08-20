document.addEventListener('DOMContentLoaded', function () {
    // =====================
    // Navigation and Smooth Scrolling
    // =====================
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            updateActiveNav();
        });
    });

    function updateActiveNav() {
        const sections = document.querySelectorAll('.section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= (sectionTop - 100) &&
                window.scrollY < (sectionTop + sectionHeight - 100)) {
                currentSection = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // =====================
    // Firebase Initialization
    // =====================
    const firebaseConfig = {
        apiKey: "AIzaSyDaF9O6VI2KqmKCDOqw0G9MOTzvoTeNZLE",
        authDomain: "andreas-butry-mypage.firebaseapp.com",
        projectId: "andreas-butry-mypage",
        storageBucket: "andreas-butry-mypage.firebasestorage.app",
        messagingSenderId: "997854178541",
        appId: "1:997854178541:web:5dc89c8701c1a6f37370e4"
    };

    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    // =====================
    // Recommendations System
    // =====================
    const form = document.getElementById('recommendation-form');
    const recommendationsList = document.getElementById('recommendations-list');

    // Load recommendations from Firestore
    async function loadRecommendations() {
        try {
            recommendationsList.innerHTML = '<div class="loading">Loading recommendations...</div>';

            const snapshot = await db.collection('recommendations')
                .orderBy('timestamp', 'desc')
                .limit(10)
                .get();

            if (snapshot.empty) {
                recommendationsList.innerHTML = '<p class="no-recommendations">No recommendations yet. Be the first to submit one!</p>';
                return;
            }

            recommendationsList.innerHTML = '';
            snapshot.forEach(doc => {
                const data = doc.data();
                const date = new Date();

                recommendationsList.innerHTML += `
                    <div class="recommendation-item">
                        <div class="recommendation-header">
                            <h4>${data.name || 'Anonymous'}</h4>
                            <div class="recommendation-meta">
                                <span class="role">${data.role || ''}</span>
                                ${data.company ? `<span class="company">${data.company}</span>` : ''}
                            </div>
                        </div>
                        <blockquote class="recommendation-text">"${data.message}"</blockquote>
                    </div>
                `;
            });
        } catch (error) {
            console.error("Error loading recommendations:", error);
            recommendationsList.innerHTML = `
                <div class="error">
                    <p>Error loading recommendations. Please try again later.</p>
                    ${error.message ? `<small>${error.message}</small>` : ''}
                </div>
            `;
        }
    }

    // Handle form submission
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        try {
            // Disable button during submission
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';

            const recommendation = {
                name: document.getElementById('name').value.trim(),
                role: document.getElementById('role').value.trim(),
                company: document.getElementById('company').value.trim(),
                message: document.getElementById('message').value.trim(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            };

            // Basic validation
            if (!recommendation.message) {
                throw new Error('Recommendation message is required');
            }

            // Save to Firestore
            await db.collection('recommendations').add(recommendation);

            // Reset form
            form.reset();

            // Reload recommendations
            await loadRecommendations();

            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = 'Thank you for your recommendation!';
            form.parentNode.insertBefore(successMsg, form.nextSibling);

            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 3000);

        } catch (error) {
            console.error("Error submitting recommendation:", error);
            alert(`Error: ${error.message || 'Failed to submit recommendation'}`);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });

    // =====================
    // Initialize everything
    // =====================
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
    loadRecommendations();
});
// =====================
// Form Validation Functions
// =====================
function validateName(name) {
    const errors = [];
    if (!name || name.trim().length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    if (name.length > 50) {
        errors.push('Name must be less than 50 characters');
    }
    if (!/^[a-zA-ZäöüÄÖÜß\s\-]+$/.test(name)) {
        errors.push('Name can only contain letters, spaces, and hyphens');
    }
    return errors;
}

function validateOptionalField(value, fieldName, maxLength = 50) {
    const errors = [];
    if (value && value.length > maxLength) {
        errors.push(`${fieldName} must be less than ${maxLength} characters`);
    }
    return errors;
}

function validateMessage(message) {
    const errors = [];
    if (!message || message.trim().length < 10) {
        errors.push('Message must be at least 10 characters');
    }
    if (message.length > 1000) {
        errors.push('Message must be less than 1000 characters');
    }
    return errors;
}

function showError(fieldId, errors) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);

    if (errors.length > 0) {
        errorElement.textContent = errors[0];
        errorElement.classList.add('show');
        inputElement.classList.add('error');
        inputElement.classList.remove('success');
    } else {
        errorElement.classList.remove('show');
        inputElement.classList.remove('error');
        inputElement.classList.add('success');
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
    });
    document.querySelectorAll('input, textarea').forEach(el => {
        el.classList.remove('error', 'success');
    });
}

function showFormFeedback(message, type = 'success') {
    const feedback = document.getElementById('form-feedback');
    feedback.textContent = message;
    feedback.className = type;
    feedback.style.display = 'block';

    setTimeout(() => {
        feedback.style.display = 'none';
    }, 5000);
}

// Character counter for message textarea
function setupCharCounter() {
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');

    messageTextarea.addEventListener('input', function () {
        const length = this.value.length;
        charCount.textContent = length;

        const counter = this.nextElementSibling.nextElementSibling;
        if (length > 900) {
            counter.classList.add('error');
            counter.classList.remove('warning');
        } else if (length > 800) {
            counter.classList.add('warning');
            counter.classList.remove('error');
        } else {
            counter.classList.remove('warning', 'error');
        }
    });
}

// Real-time validation
function setupRealTimeValidation() {
    const fields = [
        { id: 'name', validator: validateName },
        { id: 'role', validator: (value) => validateOptionalField(value, 'Role') },
        { id: 'company', validator: (value) => validateOptionalField(value, 'Company') },
        { id: 'message', validator: validateMessage }
    ];

    fields.forEach(({ id, validator }) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('blur', function () {
                const errors = validator(this.value);
                showError(id, errors);
            });

            element.addEventListener('input', function () {
                const errors = validator(this.value);
                showError(id, errors);
            });
        }
    });
}

// =====================
// Updated Form Submission
// =====================
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const originalBtnText = submitBtn.textContent;

    // Validate all fields
    const name = document.getElementById('name').value.trim();
    const role = document.getElementById('role').value.trim();
    const company = document.getElementById('company').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameErrors = validateName(name);
    const roleErrors = validateOptionalField(role, 'Role');
    const companyErrors = validateOptionalField(company, 'Company');
    const messageErrors = validateMessage(message);

    // Show all errors
    showError('name', nameErrors);
    showError('role', roleErrors);
    showError('company', companyErrors);
    showError('message', messageErrors);

    // Check if any errors exist
    const hasErrors = nameErrors.length > 0 || roleErrors.length > 0 ||
        companyErrors.length > 0 || messageErrors.length > 0;

    if (hasErrors) {
        showFormFeedback('Please fix the errors before submitting.', 'error');
        return;
    }

    try {
        // Disable button during submission
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="loading-spinner"></div>Submitting...';

        const recommendation = {
            name: name,
            role: role,
            company: company,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };

        // Save to Firestore
        await db.collection('recommendations').add(recommendation);

        // Reset form and clear errors
        form.reset();
        clearErrors();
        document.getElementById('char-count').textContent = '0';

        // Reload recommendations
        await loadRecommendations();

        // Show success message
        showFormFeedback('Thank you for your recommendation! It has been submitted successfully.');

    } catch (error) {
        console.error("Error submitting recommendation:", error);
        showFormFeedback('Error: Failed to submit recommendation. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
});


// =====================
// Initialize validation
// =====================
document.addEventListener('DOMContentLoaded', function () {
    setupRealTimeValidation();
    setupCharCounter();
});