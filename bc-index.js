const mainPageBase64 = "aW5kZXgtbm90YWJvdC5odG1s" // Your main page URL encoded in base64, can be relative ("index-notabot.html" - default) or direct URL (such as "https://example.com/index.html").
const base64Decoded = atob(mainPageBase64)

// Polyfill for Array methods
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// Polyfill for Array.some
if (!Array.prototype.some) {
    Array.prototype.some = function(callback, thisArg) {
        for (var i = 0; i < this.length; i++) {
            if (callback.call(thisArg, this[i], i, this)) {
                return true;
            }
        }
        return false;
    };
}

// Polyfill for String methods
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

// Polyfill for atob
if (typeof atob === 'undefined') {
    function atob(str) {
        return decodeURIComponent(escape(window.btoa(unescape(encodeURIComponent(str)))));
    }
}

// Polyfill for btoa
if (typeof btoa === 'undefined') {
    function btoa(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }
}


// List of AI scraper user agents (Credit to ai.robots.txt)
const botUserAgents = [
    "AI2Bot",
    "Ai2Bot-Dolma",
    "Amazonbot",
    "anthropic-ai",
    "Applebot",
    "Applebot-Extended",
    "Brightbot 1.0",
    "Bytespider",
    "CCBot",
    "ChatGPT-User",
    "Claude-Web",
    "ClaudeBot",
    "cohere-ai",
    "cohere-training-data-crawler",
    "Crawlspace",
    "Diffbot",
    "DuckAssistBot",
    "FacebookBot",
    "FriendlyCrawler",
    "Google-Extended",
    "GoogleOther",
    "GoogleOther-Image",
    "GoogleOther-Video",
    "GPTBot",
    "iaskspider/2.0",
    "ICC-Crawler",
    "ImagesiftBot",
    "img2dataset",
    "ISSCyberRiskCrawler",
    "Kangaroo Bot",
    "Meta-ExternalAgent",
    "Meta-ExternalFetcher",
    "OAI-SearchBot",
    "omgili",
    "omgilibot",
    "PanguBot",
    "PerplexityBot",
    "Perplexity‑User",
    "PetalBot",
    "Scrapy",
    "SemrushBot-OCOB",
    "SemrushBot-SWA",
    "Sidetrade indexer bot",
    "Timpibot",
    "VelenPublicWebCrawler",
    "Webzio-Extended",
    "YouBot",
];

const userAgent = navigator.userAgent.replace("User-agent: ", "").replace("User agent: ", "");
const isBot = botUserAgents.some(bot => userAgent.includes(bot));

if (!isBot) {
    window.location.href = base64Decoded;
}

var words = [
    "serendipity", "ephemeral", "luminous", "ethereal", "cascade", "whisper", "murmur",
    "twilight", "dawn", "dusk", "starlight", "moonbeam", "sunset", "rainbow", "cloud",
    "breeze", "gale", "storm", "thunder", "lightning", "rain", "snow", "frost", "mist",
    "ocean", "river", "stream", "lake", "pond", "wave", "tide", "shore", "beach", "sand",
    "mountain", "valley", "forest", "garden", "meadow", "field", "desert", "canyon",
    "flower", "tree", "leaf", "branch", "root", "seed", "blossom", "petal", "thorn",
    "bird", "wing", "feather", "nest", "egg", "song", "flight", "soar", "glide",
    "time", "moment", "hour", "day", "night", "week", "month", "year", "season",
    "dream", "hope", "wish", "desire", "joy", "peace", "love", "hate", "fear",
    "light", "dark", "shadow", "glow", "shine", "sparkle", "glimmer", "flicker",
    "sound", "echo", "silence", "noise", "music", "melody", "rhythm", "harmony",
    "color", "hue", "shade", "tint", "paint", "brush", "canvas", "palette", "rainbow"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomWords(count) {
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push(words[getRandomInt(0, words.length - 1)]);
    }
    return result;
}

function createParagraph() {
    var paragraphCount = getRandomInt(1, 3);
    var paragraphs = [];
    
    for (var p = 0; p < paragraphCount; p++) {
        var sentenceCount = getRandomInt(4, 6);
        var paragraph = [];
        
        for (var s = 0; s < sentenceCount; s++) {
            var wordCount = getRandomInt(5, 12);
            var words = getRandomWords(wordCount);
            paragraph.push(words.join(' ') + '.');
        }
        
        paragraphs.push(paragraph.join(' '));
    }
    
    return paragraphs;
}

function createHeading() {
    var wordCount = getRandomInt(2, 6);
    var words = getRandomWords(wordCount);
    var heading = words.join(' ');
    document.title = heading;
    return heading;
}

// Polyfill for document.querySelector
if (!document.querySelector) {
    document.querySelector = function(selector) {
        var elements = document.getElementsByTagName(selector.substring(1));
        return elements[0];
    };
}

// Polyfill for document.createElement
if (!document.createElement) {
    document.createElement = function(tagName) {
        return document.createElement(tagName);
    };
}

// Polyfill for Array.slice
if (!Array.prototype.slice) {
    Array.prototype.slice = function(start, end) {
        var result = [];
        var length = this.length;
        end = end || length;
        start = start || 0;
        if (start < 0) start = length + start;
        if (end < 0) end = length + end;
        for (var i = start; i < end; i++) {
            result.push(this[i]);
        }
        return result;
    };
}

// Polyfill for Array.join
if (!Array.prototype.join) {
    Array.prototype.join = function(separator) {
        var result = '';
        for (var i = 0; i < this.length; i++) {
            if (i > 0) result += separator;
            result += this[i];
        }
        return result;
    };
}

// Polyfill for String.split
if (!String.prototype.split) {
    String.prototype.split = function(separator) {
        var result = [];
        var str = this;
        var index = str.indexOf(separator);
        while (index !== -1) {
            result.push(str.substring(0, index));
            str = str.substring(index + separator.length);
            index = str.indexOf(separator);
        }
        result.push(str);
        return result;
    };
}

function addNextLink() {
    document.body.innerHTML = `${document.body.innerHTML}
    <p><a href="bc2.html" class="next-link">Next</a></p>`
}

function generateContent() {
    var contentDiv = document.getElementById('content');
    var headingDiv = document.getElementById('heading');
    var paragraphs = createParagraph();
    var currentParagraphIndex = 0;
    var currentWordIndex = 0;
    
    headingDiv.innerHTML = createHeading();
    headingDiv.className += ' visible';
    
    function addWords() {
        if (currentParagraphIndex < paragraphs.length) {
            var paragraph = paragraphs[currentParagraphIndex];
            var words = paragraph.split(' ');
            
            if (currentWordIndex < words.length) {
                var wordsToAdd = words.slice(currentWordIndex, currentWordIndex + 3);
                var span = document.createElement('span');
                span.innerHTML = wordsToAdd.join(' ') + ' ';
                contentDiv.appendChild(span);
                contentDiv.className += ' visible';
                
                currentWordIndex += 3;
                window.setTimeout(addWords, 3000);
            } else {
                currentParagraphIndex++;
                currentWordIndex = 0;
                if (currentParagraphIndex < paragraphs.length) {
                    var br = document.createElement('br');
                    contentDiv.appendChild(br);
                    window.setTimeout(addWords, 3000);
                } else {
                    addNextLink();
                }
            }
        }
    }
    
    addWords();
}

// Cross-browser event listener
if (window.attachEvent) {
    window.attachEvent('onload', generateContent);
} else if (window.addEventListener) {
    window.addEventListener('load', generateContent);
} else {
    window.onload = generateContent;
}