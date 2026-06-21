(function () {
    function initGallery() {
        var placeholders = document.querySelectorAll('.service-image-placeholder');
        if (!placeholders || placeholders.length === 0) return;

        // Service folder name to clean capitalized service title mapping
        var serviceTitlesMap = {
            'cargo_fumigation': 'Cargo Fumigation',
            'storage_fumigation': 'Storage Fumigation',
            'food_processing': 'Food Processing',
            'craft_paper': 'Craft Paper & Desiccant',
            'pallet_fumigation': 'Pallet Cover Fumigation',
            'organic_fumigation': 'Pest Management & Organic',
            'ispm_fumigation': 'ISPM-15 Fumigation',
            'phytosanitary': 'Phytosanitary Assistance'
        };

        // Inject the gallery overlay CSS styles dynamically
        var styleId = 'service-gallery-injected-styles';
        if (!document.getElementById(styleId)) {
            var styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.innerHTML = `
                .service-image-container-wrapper {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    background: #000;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                    border: 1px solid rgba(0, 0, 0, 0.04);
                    height: 380px;
                    margin-bottom: 40px;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .service-image-container-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                    opacity: 0.9;
                    display: block;
                }

                .service-image-container-wrapper:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 15px 35px rgba(247, 148, 29, 0.15);
                    border-color: rgba(247, 148, 29, 0.2);
                }

                .service-image-container-wrapper:hover img {
                    transform: scale(1.08);
                    opacity: 0.7;
                }

                .service-gallery-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to top, rgba(11, 15, 25, 0.85) 0%, rgba(11, 15, 25, 0.2) 70%, transparent 100%);
                    display: flex;
                    align-items: flex-end;
                    padding: 25px;
                    opacity: 0;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    z-index: 2;
                }

                .service-image-container-wrapper:hover .service-gallery-overlay {
                    opacity: 1;
                }

                .service-gallery-info {
                    transform: translateY(15px);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    width: 100%;
                }

                .service-image-container-wrapper:hover .service-gallery-info {
                    transform: translateY(0);
                }

                .service-gallery-info h5 {
                    color: #ffffff !important;
                    font-size: 18px;
                    font-weight: 700;
                    margin: 0 0 8px 0 !important;
                    font-family: 'Montserrat', sans-serif;
                }

                .service-gallery-info p {
                    color: #cbd5e1 !important;
                    font-size: 13px !important;
                    margin: 0 !important;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .service-gallery-zoom-icon {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 48px;
                    height: 48px;
                    background: #F7941D;
                    color: #ffffff !important;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    opacity: 0;
                    transform: scale(0.8);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    z-index: 3;
                    box-shadow: 0 4px 15px rgba(247, 148, 29, 0.4);
                    text-decoration: none;
                }

                .service-image-container-wrapper:hover .service-gallery-zoom-icon {
                    opacity: 1;
                    transform: scale(1);
                }

                .service-gallery-zoom-icon:hover {
                    background: #ffffff !important;
                    color: #F7941D !important;
                }
            `;
            document.head.appendChild(styleEl);
        }

        placeholders.forEach(function (el) {
            var service = el.getAttribute('data-service') || '';
            var index = el.getAttribute('data-index') || '1';
            var alt = el.getAttribute('data-alt') || 'Service Image';
            var imgPath = 'assets/images/services/' + service + '/' + index + '.jpg';

            // Override overlay title with clean, mapped service name
            var cleanTitle = serviceTitlesMap[service] || alt;

            var img = new Image();
            img.src = imgPath;

            img.onload = function () {
                // Render with clean mapped service name
                el.innerHTML = `
                    <div class="service-image-container-wrapper">
                        <img src="${img.src}" alt="${cleanTitle}" />
                        <a href="${img.src}" class="service-gallery-zoom-icon img-popup" title="${cleanTitle}">
                            <i class="fa fa-search-plus"></i>
                        </a>
                        <div class="service-gallery-overlay">
                            <div class="service-gallery-info">
                                <h5>${cleanTitle}</h5>
                                <p><i class="fa fa-picture-o"></i> Click to enlarge picture</p>
                            </div>
                        </div>
                    </div>
                `;
            };

            img.onerror = function () {
                if (index === '1') {
                    // For the primary image, show the graphic fallback placeholder
                    el.innerHTML = `
                        <div class="premium-image-wrapper">
                            <div class="placeholder-cross" style="display: flex;">
                                <div class="placeholder-inner">
                                    <div class="placeholder-icon">
                                        <i class="fa fa-picture-o"></i>
                                    </div>
                                    <span class="placeholder-text">Image Placeholder</span>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    // For secondary images (2, 3), hide the element completely to avoid empty spaces
                    el.style.display = 'none';
                }
            };
        });

        // Initialize Magnific Popup delegating from the body to group all page popups together as a gallery
        if (typeof $ !== 'undefined' && $.fn.magnificPopup) {
            $('body').magnificPopup({
                delegate: '.img-popup',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                image: {
                    titleSrc: function(item) {
                        return item.el.attr('title');
                    }
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGallery);
    } else {
        initGallery();
    }
})();
