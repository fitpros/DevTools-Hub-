// Categories data
const categories = [
    {
        id: 'image-tools',
        name: 'Image Tools',
        description: 'Convert, resize, and manipulate images with our collection of image processing tools.',
        url: 'categories/image-tools.html'
    },
    {
        id: 'seo-tools',
        name: 'SEO Tools',
        description: 'Optimize your website with our comprehensive SEO tools and utilities.',
        url: 'categories/seo-tools.html'
    },
    {
        id: 'text-tools',
        name: 'Text Tools',
        description: 'Process and analyze text with our text manipulation tools.',
        url: 'categories/text-tools.html'
    },
    {
        id: 'developer-tools',
        name: 'Developer Tools',
        description: 'Essential tools for web developers and programmers.',
        url: 'categories/developer-tools.html'
    },
    {
        id: 'calculators',
        name: 'Calculators',
        description: 'Various calculators for different mathematical operations and conversions.',
        url: 'categories/calculators.html'
    }
];

// Tools data
const tools = [
    // Image Tools
    {
        id: 'image-to-png',
        name: 'Image to PNG Converter',
        description: 'Convert images to PNG format while maintaining quality.',
        category: 'image-tools',
        url: 'tools/image-to-png.html'
    },
    {
        id: 'image-to-jpg',
        name: 'Image to JPG Converter',
        description: 'Convert images to JPG format with compression options.',
        category: 'image-tools',
        url: 'tools/image-to-jpg.html'
    },
    {
        id: 'image-resizer',
        name: 'Image Resizer',
        description: 'Resize images to specific dimensions or by percentage.',
        category: 'image-tools',
        url: 'tools/image-resizer.html'
    },
    // SEO Tools
    {
        id: 'meta-tag-generator',
        name: 'Meta Tag Generator',
        description: 'Generate optimized meta tags for better SEO.',
        category: 'seo-tools',
        url: 'tools/meta-tag-generator.html'
    },
    {
        id: 'keyword-density',
        name: 'Keyword Density Checker',
        description: 'Analyze keyword density in your content.',
        category: 'seo-tools',
        url: 'tools/keyword-density.html'
    },
    // Text Tools
    {
        id: 'word-counter',
        name: 'Word Counter',
        description: 'Count words, characters, and paragraphs in your text.',
        category: 'text-tools',
        url: 'tools/word-counter.html'
    },
    {
        id: 'case-converter',
        name: 'Case Converter',
        description: 'Convert text between different letter cases.',
        category: 'text-tools',
        url: 'tools/case-converter.html'
    }
];

// Initialize data when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateCategories(categories);
    populateToolsGrid(tools);
}); 