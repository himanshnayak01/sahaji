// Check if the 'Get Started' button exists and add an event listener
const getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function () {
        alert('Welcome to MarketingTool! Start Optimizing!');
        
        // Check if gtag function is available before using it
        if (typeof gtag === 'function') {
            gtag('event', 'Get Started', { 
                'event_category': 'Button', 
                'event_label': 'Get Started Button' 
            });
        } else {
            console.error('Google Analytics not initialized');
        }
    });
}

// Check if the signup form exists and add an event listener
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for signing up!');
        
        // Check if gtag function is available before using it
        if (typeof gtag === 'function') {
            gtag('event', 'Sign Up', { 
                'event_category': 'User Engagement', 
                'event_label': 'Signup Form' 
            });
        } else {
            console.error('Google Analytics not initialized');
        }
        
        // Further actions like form submission via AJAX can be added here
    });
}

// Check if the login form exists and add an event listener
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Successfully logged in!');
        
        // Check if gtag function is available before using it
        if (typeof gtag === 'function') {
            gtag('event', 'Login', { 
                'event_category': 'User Engagement', 
                'event_label': 'Login Form' 
            });
        } else {
            console.error('Google Analytics not initialized');
        }
        
        // Further actions like authentication can be added here
    });
}
