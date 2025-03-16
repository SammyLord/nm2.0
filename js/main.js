/**
 * Early 2000s style JavaScript functionality
 */

// Random visitor counter (simulated)
document.addEventListener('DOMContentLoaded', function() {
    // Update visitor counter with random number if element exists
    const visitorCount = document.getElementById('visitor-count');
    if (visitorCount) {
        // Generate a random number between 10000 and 99999
        const randomVisitors = Math.floor(Math.random() * 90000) + 10000;
        visitorCount.textContent = randomVisitors.toString();
    }
    
    // Check if this is a modern browser (humor from 2001)
    const isModernBrowser = checkModernBrowser();
    if (!isModernBrowser && window.innerWidth >= 769) {
        showBrowserWarning();
    }
    
    // Calculate fake page size
    updatePageSize();
});

/**
 * Simulates checking for "modern" browsers (by 2001 standards)
 * @returns {boolean} Whether the browser is "modern"
 */
function checkModernBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    // In 2001, these would be considered "modern" browsers
    return (
        userAgent.indexOf('msie 5') !== -1 || 
        userAgent.indexOf('msie 6') !== -1 ||
        userAgent.indexOf('netscape6') !== -1
    );
}

/**
 * Displays a warning for "outdated" browsers
 */
function showBrowserWarning() {
    const warning = document.createElement('div');
    warning.className = 'browser-warning';
    warning.innerHTML = 'This page is best viewed with <b>Netscape Navigator 4.0+</b> or <b>Internet Explorer 5.0+</b> at 800x600 resolution!';
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(warning, container.firstChild);
    }
}

/**
 * Calculates a fake page size (common on early 2000s websites)
 */
function updatePageSize() {
    const pageSizeElement = document.getElementById('page-size');
    if (pageSizeElement) {
        // Generate a random page size between 8 and 24
        const randomSize = Math.floor(Math.random() * 16) + 8;
        pageSizeElement.textContent = randomSize.toString();
    }
}

/**
 * Status bar message on hover (common in early 2000s sites)
 */
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.onmouseover = function() {
        window.status = 'Click to visit: ' + this.href;
        return true;
    };
    link.onmouseout = function() {
        window.status = '';
        return true;
    };
}); 