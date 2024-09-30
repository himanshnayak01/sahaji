ocument.getElementById('getStartedBtn').addEventListener('click', function() {
    alert('Welcome to MarketingTool! Start Optimizing!');
    gtag('event', 'Get Started', { 'event_category': 'Button', 'event_label': 'Get Started Button' });
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for signing up!');
    gtag('event', 'Sign Up', { 'event_category': 'User Engagement', 'event_label': 'Signup Form' });
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Successfully logged in!');
    gtag('event', 'Login', { 'event_category': 'User Engagement', 'event_label': 'Login Form' });
});
