(function () {
    var placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    var path = window.location.pathname;
    var page = path.split("/").pop() || 'index.html';

    // Normalize empty page or root page to index.html
    if (page === '' || page === '/') {
        page = 'index.html';
    }

    // Determine active tabs
    var isHomeActive = (page === 'index.html');
    var isAboutActive = (page === 'about.html');
    var isGalleryActive = (page === 'gallery.html');
    var isContactActive = (page === 'contact.html');

    var servicePages = [
        'cargo_fumigation.html',
        'storage_fumigation.html',
        'food_processing.html',
        'craft_paper.html',
        'pallet_fumigation.html',
        'organic_fumigation.html',
        'ispm_fumigation.html',
        'phytosanitary.html'
    ];
    var isServicesActive = servicePages.includes(page);

    var technicalPages = [
        'fumigation.html',
        'technology.html',
        'types.html',
        'safety.html'
    ];
    var isTechnicalActive = technicalPages.includes(page);

    var html = `
    <style>
        /* ==========================================================================
           Custom Modern & Premium Navbar Styling
           ========================================================================== */
        
        .header-area {
            position: relative !important;
            z-index: 99 !important;
        }

        /* Top Utility Banner */
        .header-top {
            background-color: #0b0f19 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            padding: 8px 0 !important;
            font-family: 'Montserrat', sans-serif !important;
        }

        .header-top-left {
            display: flex !important;
            align-items: center !important;
            margin: 0 !important;
            padding: 0 !important;
            list-style: none !important;
        }

        .header-top-left li {
            font-size: 13px !important;
            color: #cbd5e1 !important;
            font-weight: 500 !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 8px !important;
            margin-right: 25px !important;
        }

        .header-top-left li i {
            color: #F7941D !important;
            font-size: 14px !important;
        }

        .header-top-left li a {
            color: #cbd5e1 !important;
            transition: all 0.3s ease !important;
            text-decoration: none !important;
        }

        .header-top-left li a:hover {
            color: #F7941D !important;
            text-shadow: 0 0 10px rgba(247, 148, 29, 0.3) !important;
        }

        .header-social-link {
            display: flex !important;
            justify-content: flex-end !important;
            align-items: center !important;
            gap: 15px !important;
        }

        .header-social-link a {
            color: #cbd5e1 !important;
            font-size: 13px !important;
            width: 28px !important;
            height: 28px !important;
            border-radius: 50% !important;
            background: rgba(255, 255, 255, 0.04) !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            text-decoration: none !important;
        }

        .header-social-link a:hover {
            color: #ffffff !important;
            background: #F7941D !important;
            border-color: #F7941D !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 4px 10px rgba(247, 148, 29, 0.3) !important;
        }

        /* Main Menu Navbar area */
        .header-main-area {
            background: rgba(255, 255, 255, 0.96) !important;
            backdrop-filter: blur(15px) !important;
            -webkit-backdrop-filter: blur(15px) !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.04) !important;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
            padding: 16px 0 !important;
        }

        .header-main-area.is-sticky {
            background: rgba(255, 255, 255, 0.98) !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06) !important;
            padding: 12px 0 !important;
        }

        .brand-logo img {
            max-height: 80px !important;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
        }

        .brand-logo a:hover img {
            transform: scale(1.04) translateY(-1px) !important;
            filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08)) !important;
        }

        .header-main-area.is-sticky .brand-logo img {
            max-height: 66px !important;
        }

        /* Nav links & Active states */
        .main-menu {
            display: flex !important;
            justify-content: flex-end !important;
        }

        .main-menu ul {
            display: flex !important;
            align-items: center !important;
            list-style: none !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        .main-menu ul li {
            position: relative !important;
            padding: 8px 0 !important;
            margin: 0 16px !important;
        }

        .main-menu ul li a {
            font-family: 'Montserrat', sans-serif !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            color: #1e293b !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            padding: 8px 0 !important;
            transition: all 0.3s ease !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 6px !important;
            text-decoration: none !important;
        }

        .main-menu ul li a i {
            font-size: 11px !important;
            transition: transform 0.3s ease !important;
            margin-top: 1px !important;
        }

        .main-menu ul li:hover > a {
            color: #F7941D !important;
        }

        .main-menu ul li:hover > a i {
            transform: rotate(180deg) !important;
        }

        /* Hover underline indicator slides out from center */
        .main-menu ul li::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 3px;
            background-color: #F7941D;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
            transform: translateX(-50%);
            border-radius: 2px;
        }

        .main-menu ul li.active::after,
        .main-menu ul li:hover::after {
            width: 80%;
        }

        .main-menu ul li.active > a {
            color: #F7941D !important;
        }

        /* Modernized drop-downs cards */
        .main-menu ul li ul.dropdown {
            background: #ffffff !important;
            border-radius: 14px !important;
            border: 1px solid rgba(0, 0, 0, 0.05) !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08) !important;
            padding: 15px 10px !important;
            width: 290px !important;
            top: 100% !important;
            left: 0 !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            transform: translateY(15px) !important;
            transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
            position: absolute !important;
            z-index: 99999 !important;
            display: block !important;
        }

        .main-menu ul li:hover ul.dropdown {
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
            transform: translateY(0) !important;
        }

        .main-menu ul li ul.dropdown li {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        .main-menu ul li ul.dropdown li::after {
            display: none !important; /* Hide indicator line on submenu */
        }

        .main-menu ul li ul.dropdown li a {
            font-family: 'Open Sans', sans-serif !important;
            font-size: 13.5px !important;
            font-weight: 600 !important;
            color: #475569 !important;
            text-transform: capitalize !important;
            letter-spacing: 0px !important;
            padding: 10px 18px !important;
            border-radius: 8px !important;
            display: block !important;
            transition: all 0.25s ease !important;
            border-left: 3px solid transparent !important;
        }

        .main-menu ul li ul.dropdown li a:hover {
            color: #F7941D !important;
            background: rgba(247, 148, 29, 0.05) !important;
            border-left-color: #F7941D !important;
            transform: translateX(4px) !important;
        }

        .main-menu ul li ul.dropdown li.active > a {
            color: #F7941D !important;
            background: rgba(247, 148, 29, 0.04) !important;
            border-left-color: #F7941D !important;
        }

        /* Mobile Header styling */
        .mobile-header {
            background: rgba(255, 255, 255, 0.96) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
            padding: 12px 0 !important;
            transition: all 0.3s ease !important;
        }

        .mobile-logo img {
            max-height: 60px !important;
            transition: all 0.4s ease !important;
        }

        .mobile-logo a:hover img {
            transform: scale(1.03) !important;
        }

        .mobile-menu-btn span {
            background-color: #1e293b !important;
        }

        /* Mobile Navigation Side Drawer (Off-canvas) */
        .off-canvas-inner-content {
            background-color: #0b0f19 !important;
            color: #cbd5e1 !important;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.4) !important;
            box-sizing: border-box !important;
            height: 100vh !important;
            max-height: 100vh !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
            -webkit-overflow-scrolling: touch !important;
            padding: 20px !important;
        }

        .btn-close-off-canvas {
            position: absolute !important;
            top: 15px !important;
            right: 15px !important;
            left: auto !important;
            color: #ffffff !important;
            background: rgba(255, 255, 255, 0.06) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            width: 36px !important;
            height: 36px !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.3s ease !important;
            cursor: pointer !important;
            z-index: 999 !important;
        }

        .btn-close-off-canvas:hover {
            background: #F7941D !important;
            border-color: #F7941D !important;
            transform: rotate(90deg) !important;
        }

        .off-canvas-inner {
            box-sizing: border-box !important;
            padding-top: 40px !important;
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
        }

        .off-canvas-inner-content::-webkit-scrollbar {
            width: 4px !important;
        }

        .off-canvas-inner-content::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02) !important;
        }

        .off-canvas-inner-content::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.15) !important;
            border-radius: 10px !important;
        }

        .off-canvas-inner-content::-webkit-scrollbar-thumb:hover {
            background: #F7941D !important;
        }

        .mobile-navigation {
            max-height: none !important;
            overflow: visible !important;
        }

        .mobile-navigation ul li a {
            color: #cbd5e1 !important;
            font-family: 'Montserrat', sans-serif !important;
            font-weight: 600 !important;
            font-size: 15px !important;
            padding: 12px 0 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
            transition: all 0.3s ease !important;
            text-decoration: none !important;
            display: block !important;
        }

        .mobile-navigation ul li.active > a,
        .mobile-navigation ul li a:hover {
            color: #F7941D !important;
        }

        .mobile-navigation ul li.menu-item-has-children .menu-expand {
            color: #cbd5e1 !important;
        }

        .mobile-navigation ul li.menu-item-has-children:hover .menu-expand {
            color: #F7941D !important;
        }
    </style>

    <header class="header-area">
        <div class="main-header d-none d-lg-block">
            <!-- header top start -->
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <ul class="header-top-left">
                                <li><i class="fa fa-headphones"></i><a href="tel:25240082">044-25220065, 25220075, 25220076</a></li>
                                <li><i class="fa fa-envelope-open"></i><a href="mailto:info@starfumigation.com">info@starfumigation.com</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <div class="header-social-link text-end">
                                <a href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" aria-label="Pinterest"><i class="fa fa-pinterest"></i></a>
                                <a href="#" aria-label="Vimeo"><i class="fa fa-vimeo"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header top start -->

            <!-- main menu start -->
            <div class="header-main-area sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3">
                            <!-- logo area start -->
                            <div class="brand-logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/starfumigation-logo.png" alt="Star Fumigation">
                                </a>
                            </div>
                            <!-- logo area end -->
                        </div>
                        <div class="col-lg-9">
                            <div class="main-menu-inner">
                                <!-- main menu navbar start -->
                                <nav class="main-menu">
                                    <ul>
                                        <li class="${isHomeActive ? 'active' : ''}"><a href="index.html">Home</a></li>
                                        <li class="${isAboutActive ? 'active' : ''}"><a href="about.html">About Us</a></li>
                                        <li class="${isGalleryActive ? 'active' : ''}"><a href="gallery.html">Gallery</a></li>
                                        <li class="${isServicesActive ? 'active' : ''}"><a href="#">Services <i class="fa fa-angle-down"></i></a>
                                            <ul class="dropdown">
                                                <li class="${page === 'cargo_fumigation.html' ? 'active' : ''}"><a href="cargo_fumigation.html">Cargo Fumigation</a></li>
                                                <li class="${page === 'storage_fumigation.html' ? 'active' : ''}"><a href="storage_fumigation.html">Storage Fumigation</a></li>
                                                <li class="${page === 'food_processing.html' ? 'active' : ''}"><a href="food_processing.html">Food Processing</a></li>
                                                <li class="${page === 'craft_paper.html' ? 'active' : ''}"><a href="craft_paper.html">Craft paper pasting & Desiccant</a></li>
                                                <li class="${page === 'pallet_fumigation.html' ? 'active' : ''}"><a href="pallet_fumigation.html">Pallet Cover Fumigatim</a></li>
                                                <li class="${page === 'organic_fumigation.html' ? 'active' : ''}"><a href="organic_fumigation.html">Pest Mangement & Organic Fumigation</a></li>
                                                <li class="${page === 'ispm_fumigation.html' ? 'active' : ''}"><a href="ispm_fumigation.html">ISPM-15 Fumigation</a></li>
                                                <li class="${page === 'phytosanitary.html' ? 'active' : ''}"><a href="phytosanitary.html">Phytosanitary Assitance</a></li>
                                            </ul>
                                        </li>
                                        <li class="${isTechnicalActive ? 'active' : ''}"><a href="#"> Technical Infomation <i class="fa fa-angle-down"></i></a>
                                            <ul class="dropdown">
                                                <li class="${page === 'fumigation.html' ? 'active' : ''}"><a href="fumigation.html">Define Fumigation</a></li>
                                                <li class="${page === 'technology.html' ? 'active' : ''}"><a href="technology.html">Technology of Fumigation</a></li>
                                                <li class="${page === 'types.html' ? 'active' : ''}"><a href="types.html">Types of Pest</a></li>
                                                <li class="${page === 'safety.html' ? 'active' : ''}"><a href="safety.html">Safety Pratices</a></li>
                                            </ul>
                                        </li>
                                        <li class="${isContactActive ? 'active' : ''}"><a href="contact.html">Contact us</a></li>
                                    </ul>
                                </nav>
                                <!-- main menu navbar end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- main menu end -->
        </div>

        <!-- mobile header start -->
        <div class="mobile-header d-lg-none d-md-block sticky">
            <!--mobile header top start -->
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div class="mobile-main-header">
                            <div class="mobile-logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/starfumigation-logo.png" alt="Star Fumigation">
                                </a>
                            </div>
                            <div class="mobile-menu-toggler">
                                <button class="mobile-menu-btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- mobile header top start -->
        </div>
        <!-- mobile header end -->

        <!-- off-canvas mobile menu start -->
        <aside class="off-canvas-wrapper">
            <div class="off-canvas-overlay"></div>
            <div class="off-canvas-inner-content">
                <div class="btn-close-off-canvas">
                    <i class="fa fa-close"></i>
                </div>

                <div class="off-canvas-inner">
                    <!-- mobile menu start -->
                    <div class="mobile-navigation">
                        <!-- mobile menu navigation start -->
                        <nav>
                            <ul class="mobile-menu">
                                <li class="${isHomeActive ? 'active' : ''}"><a href="index.html">Home</a></li>
                                        <li class="${isAboutActive ? 'active' : ''}"><a href="about.html">About Us</a></li>
                                        <li class="${isGalleryActive ? 'active' : ''}"><a href="gallery.html">Gallery</a></li>
                                <li class="menu-item-has-children ${isServicesActive ? 'active' : ''}"><a href="#">Services </a>
                                    <ul class="dropdown">
                                        <li class="${page === 'cargo_fumigation.html' ? 'active' : ''}"><a href="cargo_fumigation.html">Cargo Fumigation</a></li>
                                        <li class="${page === 'storage_fumigation.html' ? 'active' : ''}"><a href="storage_fumigation.html">Storage Fumigation</a></li>
                                        <li class="${page === 'food_processing.html' ? 'active' : ''}"><a href="food_processing.html">Food Processing</a></li>
                                        <li class="${page === 'craft_paper.html' ? 'active' : ''}"><a href="craft_paper.html">Craft paper pasting & Desiccant</a></li>
                                        <li class="${page === 'pallet_fumigation.html' ? 'active' : ''}"><a href="pallet_fumigation.html">Pallet Cover Fumigatim</a></li>
                                        <li class="${page === 'organic_fumigation.html' ? 'active' : ''}"><a href="organic_fumigation.html">Pest Mangement & Organic Fumigation</a></li>
                                        <li class="${page === 'ispm_fumigation.html' ? 'active' : ''}"><a href="ispm_fumigation.html">ISPM-15 Fumigation</a></li>
                                        <li class="${page === 'phytosanitary.html' ? 'active' : ''}"><a href="phytosanitary.html">Phytosanitary Assitance</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children ${isTechnicalActive ? 'active' : ''}"><a href="#"> Technical Infomation</a>
                                    <ul class="dropdown">
                                        <li class="${page === 'fumigation.html' ? 'active' : ''}"><a href="fumigation.html">Define Fumigation</a></li>
                                        <li class="${page === 'technology.html' ? 'active' : ''}"><a href="technology.html">Technology of Fumigation</a></li>
                                        <li class="${page === 'types.html' ? 'active' : ''}"><a href="types.html">Types of Pest</a></li>
                                        <li class="${page === 'safety.html' ? 'active' : ''}"><a href="safety.html">Safety Pratices</a></li>
                                    </ul>
                                </li>
                                <li class="${isContactActive ? 'active' : ''}"><a href="contact.html">Contact us</a></li>
                            </ul>
                        </nav>
                        <!-- mobile menu navigation end -->
                    </div>
                    <!-- mobile menu end -->
                </div>
            </div>
        </aside>
    </header>
    `;

    placeholder.outerHTML = html;
})();
