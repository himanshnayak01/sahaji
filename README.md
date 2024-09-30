<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketing Tool</title>
    
    <!-- Google Analytics Script -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_TRACKING_ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID');
    </script>
    
    <!-- CallRail Tracking Script -->
    <script type="text/javascript">
        (function(i,s,o,g,r,a,m){i['CallRailObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://cdn.callrail.com/companies/YOUR_COMPANY_ID/abcdef123456/12/callrail.js','cr');
    </script>
    
</head>
<body>
    <header>
        <div class="container">
            <h1>MarketingTool</h1>
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#signup">Sign Up</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero" id="home">
            <div class="container">
                <h2>Optimize Your Marketing with Call Tracking</h2>
                <p>Track phone calls, texts, and form submissions effectively!</p>
                <button id="getStartedBtn">Get Started</button>
            </div>
        </section>

        <section class="features" id="features">
            <div class="container">
                <h2>Features</h2>
                <ul>
                    <li><strong>Call Tracking:</strong> Track phone calls, texts, and form submissions.</li>
                    <li><strong>Analytics and Reporting:</strong> Provide detailed reports.</li>
                    <li><strong>Integrations:</strong> AWS, Google Analytics, CRMs.</li>
                    <li><strong>Call Recording:</strong> Features with transcription and keyword spotting.</li>
                    <li><strong>Dynamic Number Insertion:</strong> Unique phone numbers for each campaign.</li>
                </ul>
            </div>
        </section>

        <section class="pricing" id="pricing">
            <div class="container">
                <h2>Pricing</h2>
                <div class="pricing-tier">
                    <div>
                        <h3>Basic</h3>
                        <p>$29/month</p>
                    </div>
                    <div>
                        <h3>Pro</h3>
                        <p>$59/month</p>
                    </div>
                    <div>
                        <h3>Enterprise</h3>
                        <p>Contact for pricing</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="signup" id="signup">
            <div class="container">
                <h2>Create an Account</h2>
                <form id="signupForm">
                    <input type="text" placeholder="Your Name" required >
                    <input type="email" placeholder="Your Email" required >
                    <input type="password" placeholder="Password" required >
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </section>

        <section class="login" id="login">
            <div class="container">
                <h2>Log In</h2>
                <form id="loginForm">
                    <input type="email" placeholder="Your Email" required >
                    <input type="password" placeholder="Password" required >
                    <button type="submit">Log In</button>
                </form>
            </div>
        </section>

    </main>

    <footer>
        <div class="container">
            <p>&copy; 2023 MarketingTool. All rights reserved.</p>
        </div>
    </footer>
    
</body>
</html>
