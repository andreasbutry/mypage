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
                                ${data.company ? `<span class="company">(${data.company})</span>` : ''}
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