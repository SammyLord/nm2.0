/**
 * Mobile Redirect Script
 * 
 * Detects if the user is on a mobile device and redirects to the mobile version of the site.
 * Users can bypass this by adding ?forceDesktop=true to the URL.
 */
(function() {
    // Run this immediately when the script loads
    redirectIfMobile();
    
    /**
     * Main function to check if redirect is needed and perform the redirect
     */
    function redirectIfMobile() {
        // Check if we should skip redirection
        if (getUrlParameter('forceDesktop') === 'true') {
            console.log('Desktop view forced by URL parameter');
            return;
        }
        
        // If we're on a mobile device, redirect to the mobile version
        if (isMobileDevice()) {
            console.log('Mobile device detected, redirecting...');
            const currentPage = getCurrentPageName();
            const mobileUrl = getMobileVersionUrl(currentPage);
            
            // Redirect to mobile version
            window.location.href = mobileUrl;
        }
    }
    
    /**
     * Determine if the current device is mobile
     * 
     * @returns {boolean} True if mobile device detected
     */
    function isMobileDevice() {
        // Screen width check - most reliable method
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth <= 768) {
            console.log('Mobile device detected by screen width:', screenWidth);
            return true;
        }
        
        // User agent check (fallback)
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone', 'Mobile', 'mobile'];
        
        // Return true if any mobile keyword is found in user agent
        for (let keyword of mobileKeywords) {
            if (userAgent.indexOf(keyword) !== -1) {
                console.log('Mobile device detected by user agent keyword:', keyword);
                return true;
            }
        }
        
        // Touch capability check (additional fallback)
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            // Check if it's not an iPad with desktop mode
            if (userAgent.indexOf('iPad') === -1 && screenWidth < 1024) {
                console.log('Mobile device detected by touch capability');
                return true;
            }
        }
        
        // Not a mobile device
        console.log('Desktop device detected');
        return false;
    }
    
    /**
     * Get the filename of the current page without extension
     * 
     * @returns {string} The current page name (e.g., "index", "about")
     */
    function getCurrentPageName() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);
        
        // Remove file extension
        if (filename.indexOf('.') !== -1) {
            return filename.substring(0, filename.lastIndexOf('.'));
        }
        
        return filename || 'index';
    }
    
    /**
     * Construct the appropriate mobile URL based on current page
     * 
     * @param {string} currentPage - The current page name
     * @returns {string} The mobile version URL
     */
    function getMobileVersionUrl(currentPage) {
        // Special case for the index/home page
        if (currentPage === 'index' || currentPage === '' || currentPage === 'home') {
            return 'mobile.html';
        }
        
        // For other pages, prefix with "mobile-"
        return `mobile-${currentPage}.html`;
    }
    
    /**
     * Get a URL parameter value by name
     * 
     * @param {string} name - The parameter name to look for
     * @returns {string|null} The parameter value or null if not found
     */
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
})(); 