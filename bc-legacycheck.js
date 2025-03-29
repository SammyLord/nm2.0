// Browser detection and redirect for legacy browsers with obfuscated URL
(function() {
    var mainPageBase64 = "aW5kZXgtbm90YWJvdC5odG1s" // Your main page URL encoded in base64, can be relative ("index-notabot.html" - default) or direct URL (such as "https://example.com/index.html").
    // Base64 decoder implementation for IE5 compatibility
    function decodeBase64(input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        
        // Remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        
        while (i < input.length) {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));
            
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            
            output = output + String.fromCharCode(chr1);
            
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        
        return output;
    }
    
    // Detect IE8 or below
    var isIE = false;
    var isOldIE = false;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        isIE = true;
        var ieVersion = parseInt(RegExp.$1, 10);
        if (ieVersion <= 8) {
            isOldIE = true;
        }
    }
    
    // Detect Netscape 7 or below
    var isOldNetscape = false;
    if (navigator.userAgent.indexOf("Netscape") !== -1) {
        var netscapeMatch = navigator.userAgent.match(/Netscape\/([\d\.]+)/);
        if (netscapeMatch && parseFloat(netscapeMatch[1]) <= 7) {
            isOldNetscape = true;
        }
    }
    
    // Redirect if using an outdated browser
    if (isOldIE || isOldNetscape) {
        // "index-notabot.html" encoded in base64 is "aW5kZXgtbm90YWJvdC5odG1s"
        var redirectURL = decodeBase64(mainPageBase64);
        window.location.href = redirectURL;
    }
})();