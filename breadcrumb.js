(function () {
    var placeholder = document.getElementById('breadcrumb-placeholder');
    if (!placeholder) return;

    var title = placeholder.getAttribute('data-title') || '';
    var parent = placeholder.getAttribute('data-parent') || 'Home';
    var parentUrl = placeholder.getAttribute('data-parent-url') || 'index.html';
    var subparent = placeholder.getAttribute('data-subparent') || '';
    var subparentUrl = placeholder.getAttribute('data-subparent-url') || '';
    var current = placeholder.getAttribute('data-current') || '';

    var html = `
        <style>
            /* Premium Breadcrumb Overlay & Styling */
            .breadcrumb-area {
                position: relative;
                z-index: 1;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                padding: 20px 0 !important;
            }
            
            /* Glassmorphic dark overlay for better contrast */
            .breadcrumb-area::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(11, 19, 36, 0.76) 0%, rgba(15, 23, 42, 0.58) 100%);
                z-index: -1;
            }

            /* Glowing visual effect behind the text */
            .breadcrumb-wrap {
                position: relative;
                z-index: 2;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                animation: breadcrumbFadeIn 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }

            @keyframes breadcrumbFadeIn {
                0% { opacity: 0; transform: translateY(15px); }
                100% { opacity: 1; transform: translateY(0); }
            }

            .breadcrumb-title {
                color: #ffffff !important;
                font-family: 'Montserrat', sans-serif !important;
                font-weight: 700 !important;
                font-size: 36px !important;
                letter-spacing: 1.5px !important;
                text-transform: capitalize !important;
                margin-bottom: 35px !important;
                position: relative !important;
                text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
                padding-bottom: 12px !important;
            }

            /* Custom CSS accent underline to replace the missing shape.png */
            .breadcrumb-title::after {
                content: '' !important;
                position: absolute !important;
                bottom: 0 !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                width: 60px !important;
                height: 3px !important;
                background: #F7941D !important;
                border-radius: 20px !important;
                box-shadow: 0 2px 8px rgba(247, 148, 29, 0.4) !important;
            }

            /* Prevent the old shape.png border from showing */
            .breadcrumb-title::before {
                display: none !important;
            }

            /* Modernized glassmorphic navigation container */
            .breadcrumb-wrap .breadcrumb {
                display: inline-flex !important;
                background: rgba(255, 255, 255, 0.05) !important;
                backdrop-filter: blur(8px) !important;
                -webkit-backdrop-filter: blur(8px) !important;
                border: 1px solid rgba(255, 255, 255, 0.12) !important;
                padding: 10px 24px !important;
                border-radius: 30px !important;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
                margin: 0 !important;
                transition: all 0.3s ease !important;
            }

            .breadcrumb-wrap .breadcrumb:hover {
                border-color: rgba(247, 148, 29, 0.3) !important;
                box-shadow: 0 12px 30px rgba(247, 148, 29, 0.18) !important;
                background: rgba(255, 255, 255, 0.08) !important;
                transform: translateY(-2px);
            }

            .breadcrumb-wrap .breadcrumb .breadcrumb-item {
                display: flex;
                align-items: center;
                font-family: 'Montserrat', sans-serif !important;
                font-size: 14px !important;
                font-weight: 500 !important;
                color: rgba(255, 255, 255, 0.75) !important;
            }

            .breadcrumb-wrap .breadcrumb .breadcrumb-item a {
                color: rgba(255, 255, 255, 0.85) !important;
                font-weight: 500 !important;
                transition: all 0.3s ease !important;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .breadcrumb-wrap .breadcrumb .breadcrumb-item a i {
                color: #F7941D;
                font-size: 13px;
                transition: transform 0.3s ease;
            }

            .breadcrumb-wrap .breadcrumb .breadcrumb-item a:hover {
                color: #F7941D !important;
                text-shadow: 0 0 8px rgba(247, 148, 29, 0.3);
            }

            .breadcrumb-wrap .breadcrumb .breadcrumb-item a:hover i {
                transform: scale(1.15);
            }

            .breadcrumb-wrap .breadcrumb .breadcrumb-item::before {
                color: rgba(255, 255, 255, 0.35) !important;
                font-size: 11px !important;
                font-weight: 400 !important;
                margin: 0 8px !important;
                padding: 0 !important;
            }

            .breadcrumb-wrap .breadcrumb .breadcrumb-item.active {
                color: #F7941D !important;
                font-weight: 600 !important;
            }

            @media only screen and (max-width: 767.98px) {
                .breadcrumb-area {
                    padding: 20px 0 !important;
                }
                .breadcrumb-title {
                    font-size: 28px !important;
                    margin-bottom: 25px !important;
                }
                .breadcrumb-wrap .breadcrumb {
                    padding: 8px 20px !important;
                }
                .breadcrumb-wrap .breadcrumb .breadcrumb-item {
                    font-size: 13px !important;
                }
            }
        </style>
        <div class="breadcrumb-area bg-img" data-bg="assets/img/bg/breadcrumb.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-wrap">
                            <nav aria-label="breadcrumb">
                                <h1 class="breadcrumb-title">${title}</h1>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="${parentUrl}">
                                            <i class="fa fa-home"></i> ${parent}
                                        </a>
                                    </li>
                                    ${subparent ? `<li class="breadcrumb-item"><a href="${subparentUrl}">${subparent}</a></li>` : ''}
                                    ${current ? `<li class="breadcrumb-item active" aria-current="page">${current}</li>` : ''}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    placeholder.outerHTML = html;
})();
