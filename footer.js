(function() {
    var footerHTML = `
    <!-- Custom Modern Footer Styling -->
    <style>
        .premium-footer {
            background-color: #0b0f19;
            color: #a0aec0;
            font-family: 'Montserrat', sans-serif;
            border-top: 4px solid #F7941D;
            padding-top: 80px;
            position: relative;
            overflow: hidden;
        }
        .premium-footer::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(247, 148, 29, 0.05) 0%, transparent 70%);
            pointer-events: none;
            z-index: 1;
        }
        .premium-footer .container {
            position: relative;
            z-index: 2;
        }
        .premium-footer .footer-logo-container {
            background: #ffffff;
            padding: 12px 20px;
            border-radius: 12px;
            display: inline-block;
            margin-bottom: 25px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
        }
        .premium-footer .footer-logo-container:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(247, 148, 29, 0.2);
        }
        .premium-footer .footer-logo-container img {
            max-height: 60px;
            display: block;
        }
        .premium-footer .desc-text {
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            line-height: 1.8;
            color: #a0aec0;
            margin-bottom: 25px;
        }
        .premium-footer .footer-widget-title {
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 30px;
            position: relative;
            padding-bottom: 12px;
        }
        .premium-footer .footer-widget-title::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 40px;
            height: 3px;
            background-color: #F7941D;
            border-radius: 2px;
            transition: width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .premium-footer .footer-single-widget:hover .footer-widget-title::after {
            width: 60px;
        }
        .premium-footer .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .premium-footer .footer-links li {
            margin-bottom: 14px;
        }
        .premium-footer .footer-links li a {
            color: #a0aec0;
            font-size: 14px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
            font-family: 'Open Sans', sans-serif;
        }
        .premium-footer .footer-links li a i {
            color: #F7941D;
            font-size: 12px;
            transition: transform 0.3s ease;
        }
        .premium-footer .footer-links li a:hover {
            color: #F7941D;
            padding-left: 5px;
        }
        .premium-footer .footer-links li a:hover i {
            transform: translateX(4px);
        }
        .premium-footer .footer-contact-info {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .premium-footer .footer-contact-info li {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 20px;
            color: #a0aec0;
            font-size: 14px;
            line-height: 1.6;
            font-family: 'Open Sans', sans-serif;
        }
        .premium-footer .footer-contact-info li i {
            color: #F7941D;
            font-size: 18px;
            margin-top: 4px;
            width: 20px;
            text-align: center;
        }
        .premium-footer .footer-contact-info li .contact-label {
            color: #ffffff;
            font-weight: 700;
            display: block;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 2px;
        }
        .premium-footer .footer-contact-info li a {
            color: #a0aec0;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .premium-footer .footer-contact-info li a:hover {
            color: #F7941D;
        }
        .premium-footer .footer-social-wrapper {
            margin-top: 25px;
        }
        .premium-footer .footer-social-links {
            display: flex;
            gap: 12px;
        }
        .premium-footer .footer-social-links a {
            width: 38px;
            height: 38px;
            background-color: rgba(255, 255, 255, 0.05);
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
            text-decoration: none;
        }
        .premium-footer .footer-social-links a:hover {
            background-color: #F7941D;
            color: #ffffff;
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(247, 148, 29, 0.35);
        }
        .premium-footer-bottom {
            background-color: #070a11;
            padding: 25px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            margin-top: 50px;
        }
        .premium-footer-bottom .copyright-text p {
            margin: 0;
            font-size: 13px;
            color: #718096;
            font-family: 'Open Sans', sans-serif;
        }
        .premium-footer-bottom .copyright-text p a {
            color: #a0aec0;
            text-decoration: none;
            transition: color 0.3s ease;
            font-weight: 600;
        }
        .premium-footer-bottom .copyright-text p a:hover {
            color: #F7941D;
        }
    </style>

    <footer class="premium-footer">
        <div class="container">
            <div class="row">
                <!-- Col 1: About -->
                <div class="col-lg-4 col-md-6">
                    <div class="footer-single-widget">
                        <a href="index.html" class="footer-logo-container">
                            <img src="assets/img/logo/starfumigation-logo.png" alt="Star Fumigation">
                        </a>
                        <p class="desc-text">STAR FUMIGATION AGENCIES is one of India's leading, highly reliable, and certified providers of professional fumigation and quarantine pest management services. Operating under strict global compliance protocols, we protect your cargo, facilities, and commodities.</p>
                        
                        <div class="footer-social-wrapper">
                            <div class="footer-social-links">
                                <a href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" aria-label="Pinterest"><i class="fa fa-pinterest"></i></a>
                                <a href="#" aria-label="Vimeo"><i class="fa fa-vimeo"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Col 2: Quick Links -->
                <div class="col-lg-4 col-md-6">
                    <div class="footer-single-widget" style="padding-left: 15%; padding-right: 5%;">
                        <h5 class="footer-widget-title">Quick Links</h5>
                        <ul class="footer-links">
                            <li><a href="about.html"><i class="fa fa-angle-right"></i> Our Company</a></li>
                            <li><a href="cargo_fumigation.html"><i class="fa fa-angle-right"></i> Our Services</a></li>
                            <li><a href="fumigation.html"><i class="fa fa-angle-right"></i> Technical Info</a></li>
                            <li><a href="contact.html"><i class="fa fa-angle-right"></i> Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Col 3: Contact Info -->
                <div class="col-lg-4 col-md-6">
                    <div class="footer-single-widget">
                        <h5 class="footer-widget-title">Contact Us</h5>
                        <ul class="footer-contact-info">
                            <li>
                                <i class="fa fa-map-marker"></i>
                                <div>
                                    <span class="contact-label">Head Office</span>
                                    No. 42/87, 3rd Floor, Linghi Chetty Street,<br>Chennai - 600001, Tamil Nadu, India
                                </div>
                            </li>
                            <li>
                                <i class="fa fa-phone"></i>
                                <div>
                                    <span class="contact-label">Call Support</span>
                                    <a href="tel:044-25220065">044-25220065</a>, <a href="tel:044-25220075">25220075</a>, <a href="tel:044-25220076">25220076</a>
                                </div>
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                <div>
                                    <span class="contact-label">Email Support</span>
                                    <a href="mailto:info@starfumigation.com">info@starfumigation.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="premium-footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="copyright-text">
                            <p>&copy; 2026 Star Fumigation. All rights reserved. Developed by <a href="https://www.aatheshsoft.com/" target="_blank">Aathesh Soft Solutions.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
    
    var placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
})();
