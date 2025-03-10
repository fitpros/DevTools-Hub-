// Tool Categories Data
const categories = [
    {
        name: "Developer Tools",
        description: "Essential tools for developers including formatters, validators, and encoders",
        url: "categories/developer-tools.html",
        icon: "bi-code-square"
    },
    {
        name: "SEO Tools",
        description: "Tools for improving website visibility and search engine optimization",
        url: "categories/seo-tools.html",
        icon: "bi-graph-up"
    },
    {
        name: "Calculators",
        description: "Various calculators for different types of computations",
        url: "categories/calculators.html",
        icon: "bi-calculator"
    }
];

// Popular Tools Data
const popularTools = [
    {
        name: "Code Formatter",
        description: "Format and beautify code in various programming languages",
        url: "tools/code-formatter.html",
        icon: "bi-code"
    },
    {
        name: "Hash Generator",
        description: "Generate various types of hash values",
        url: "tools/hash-generator.html",
        icon: "bi-key"
    },
    {
        name: "JSON Validator",
        description: "Validate and format JSON data",
        url: "tools/json-validator.html",
        icon: "bi-braces"
    },
    {
        name: "AI Content Detector",
        description: "Detect and humanize AI-generated content",
        url: "tools/ai-content-detector.html",
        icon: "bi-shield-check"
    }
];

// Function to get the correct path prefix based on current location
function getPathPrefix() {
    const path = window.location.pathname;
    // If we're in a subdirectory (tools/ or categories/), return the path to root
    if (path.includes('/tools/') || path.includes('/categories/')) {
        return '../';
    }
    // If we're at root level, use relative path
    return '';
}

// Function to fix URLs in the component HTML
function fixUrls(html) {
    const prefix = getPathPrefix();
    return html.replace(/(href="|src=")((?!http|#|mailto:).*?)(">)/g, (match, p1, p2, p3) => {
        // Remove any existing ./ or ../ from the start of the URL
        const cleanUrl = p2.replace(/^\.\/|^\.\.\//, '');
        return `${p1}${prefix}${cleanUrl}${p3}`;
    });
}

// Function to load component
function loadComponent(elementId, html) {
    const element = document.getElementById(elementId);
    if (element) {
        // Fix URLs before inserting HTML
        element.innerHTML = fixUrls(html);
        
        // Initialize dropdowns if this is the header
        if (elementId === 'header-placeholder') {
            const dropdowns = element.querySelectorAll('.dropdown-toggle');
            dropdowns.forEach(dropdown => {
                new bootstrap.Dropdown(dropdown);
            });
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    loadComponent('header-placeholder', `
        <nav class="navbar navbar-expand-lg navbar-light bg-gradient-primary">
            <div class="container">
                <!-- Logo -->
                <a class="navbar-brand d-flex align-items-center" href="index.html">
                    <div class="logo-container me-2">
                        <svg width="45" height="45" viewBox="0 0 120 120">
                            <!-- Main Circle -->
                            <circle cx="60" cy="60" r="50" fill="url(#circle-gradient)" />
                            
                            <!-- Gear Icon -->
                            <path d="M60 30c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30zm0 55c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25z" fill="white"/>
                            <path d="M78.5 57.5l8-4.5v-6l-8-4.5-4.5-7.5L70.5 27h-6l-4.5 8-7.5 4.5L44.5 35v6l8 4.5v9l-8 4.5v6l8 4.5 4.5 7.5 3.5 8h6l4.5-8 7.5-4.5 8-4.5v-6l-8-4.5v-9z" fill="white"/>
                            
                            <!-- Code Symbol -->
                            <path d="M45 75l-10-10 10-10M75 75l10-10-10-10" stroke="white" stroke-width="5" fill="none"/>
                            
                            <!-- Gradients -->
                            <defs>
                                <linearGradient id="circle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#4CAF50"/>
                                    <stop offset="50%" style="stop-color:#2196F3"/>
                                    <stop offset="100%" style="stop-color:#673AB7"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="brand-text">
                        <h1 class="mb-0 h3">DevTools Hub</h1>
                        <small class="text-white-50">Professional Developer Utilities</small>
                    </div>
                </a>

                <!-- Mobile Toggle -->
                <button class="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navigation -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="index.html"><i class="bi bi-house-door-fill"></i> Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                                <i class="bi bi-tools"></i> Tools
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="categories/developer-tools.html">Developer Tools</a></li>
                                <li><a class="dropdown-item" href="categories/seo-tools.html">SEO Tools</a></li>
                                <li><a class="dropdown-item" href="categories/calculators.html">Calculators</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="about.html"><i class="bi bi-info-circle-fill"></i> About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="contact.html"><i class="bi bi-envelope-fill"></i> Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `);

    // Load footer
    loadComponent('footer-placeholder', `
        <footer class="bg-gradient-dark text-white py-5 mt-5">
            <div class="container">
                <div class="row">
                    <!-- Logo and Description -->
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <div class="d-flex align-items-center mb-3">
                            <div class="logo-container me-2">
                                <svg width="35" height="35" viewBox="0 0 120 120">
                                    <use href="#circle-gradient"/>
                                    <circle cx="60" cy="60" r="50" fill="url(#circle-gradient)" />
                                    <path d="M60 30c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30zm0 55c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25z" fill="white"/>
                                    <path d="M78.5 57.5l8-4.5v-6l-8-4.5-4.5-7.5L70.5 27h-6l-4.5 8-7.5 4.5L44.5 35v6l8 4.5v9l-8 4.5v6l8 4.5 4.5 7.5 3.5 8h6l4.5-8 7.5-4.5 8-4.5v-6l-8-4.5v-9z" fill="white"/>
                                    <path d="M45 75l-10-10 10-10M75 75l10-10-10-10" stroke="white" stroke-width="5" fill="none"/>
                                </svg>
                            </div>
                            <h5 class="mb-0 text-gradient">DevTools Hub</h5>
                        </div>
                        <p class="text-light">Empowering developers with professional tools and utilities for efficient development.</p>
                    </div>

                    <!-- Quick Links -->
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <h5 class="mb-3 text-gradient">Quick Links</h5>
                        <ul class="list-unstyled footer-links">
                            <li><a href="categories/developer-tools.html" class="text-light text-decoration-none"><i class="bi bi-chevron-right"></i> Developer Tools</a></li>
                            <li><a href="categories/seo-tools.html" class="text-light text-decoration-none"><i class="bi bi-chevron-right"></i> SEO Tools</a></li>
                            <li><a href="categories/calculators.html" class="text-light text-decoration-none"><i class="bi bi-chevron-right"></i> Calculators</a></li>
                            <li><a href="about.html" class="text-light text-decoration-none"><i class="bi bi-chevron-right"></i> About Us</a></li>
                            <li><a href="contact.html" class="text-light text-decoration-none"><i class="bi bi-chevron-right"></i> Contact</a></li>
                        </ul>
                    </div>

                    <!-- Legal Links -->
                    <div class="col-lg-4">
                        <h5 class="mb-3 text-gradient">Legal & Social</h5>
                        <ul class="list-unstyled footer-links mb-4">
                            <li><a href="terms.html" class="text-light text-decoration-none"><i class="bi bi-shield-check"></i> Terms of Service</a></li>
                            <li><a href="privacy-policy.html" class="text-light text-decoration-none"><i class="bi bi-lock"></i> Privacy Policy</a></li>
                        </ul>
                        <div class="social-links">
                            <a href="#" class="social-link"><i class="bi bi-github"></i></a>
                            <a href="#" class="social-link"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
                            <a href="#" class="social-link"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="border-top border-light border-opacity-25 pt-4 mt-4">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="mb-0">&copy; 2024 DevTools Hub. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <small class="text-light">Made with <i class="bi bi-heart-fill text-danger"></i> for developers worldwide</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `);

    // Populate categories
    const categoriesContainer = document.getElementById('categories-container');
    if (categoriesContainer) {
        categoriesContainer.innerHTML = categories.map(category => createCategoryCard(category)).join('');
    }

    // Populate tools
    const toolsContainer = document.getElementById('tools-container');
    if (toolsContainer) {
        toolsContainer.innerHTML = popularTools.map(tool => createToolCard(tool)).join('');
    }

    // Initialize search functionality
    const searchInput = document.getElementById('searchTools');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const toolCards = document.querySelectorAll('.tool-card');
            
            toolCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const description = card.querySelector('.card-text').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.closest('.col-md-4').style.display = '';
                } else {
                    card.closest('.col-md-4').style.display = 'none';
                }
            });
        });
    }
});

// Create category card with path prefix
function createCategoryCard(category) {
    const prefix = getPathPrefix();
    return `
        <div class="col-md-4 mb-4">
            <div class="card h-100 category-card">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <i class="bi ${category.icon} fs-3 text-primary me-2"></i>
                        <h3 class="card-title h5 mb-0">${category.name}</h3>
                    </div>
                    <p class="card-text">${category.description}</p>
                    <a href="${prefix}${category.url}" class="btn btn-outline-primary">View Tools</a>
                </div>
            </div>
        </div>
    `;
}

// Create tool card with path prefix
function createToolCard(tool) {
    const prefix = getPathPrefix();
    return `
        <div class="col-md-4 mb-4">
            <div class="card h-100 tool-card">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <i class="bi ${tool.icon} fs-3 text-primary me-2"></i>
                        <h3 class="card-title h5 mb-0">${tool.name}</h3>
                    </div>
                    <p class="card-text">${tool.description}</p>
                    <a href="${prefix}${tool.url}" class="btn btn-primary">Use Tool</a>
                </div>
            </div>
        </div>
    `;
} 