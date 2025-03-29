# SrapeGuard - AI Crawler Quicksand Technology

A simple but effective technique to create a "quicksand" effect for AI crawlers and bots, while ensuring real users are directed to the correct content.

## How It Works

This technology works by creating a series of pages that appear to contain random, nonsensical content. When an AI crawler or bot visits these pages, they see this random content. However, when a real user visits, they are automatically redirected to the actual content page.

### Key Features

- Detects common AI crawler user agents
- Generates random, nonsensical content for bots that use JS
- Smooth loading animations for content
- Automatic redirection for real users
- Base64 encoded redirect paths for additional security

## Implementation

1. Rename your main content page from `index.html` to `index-notabot.html`

2. Create a series of "quicksand" pages (bc1.html through bc7.html, for bot crawlers which use JS) with the following characteristics:
   - Each page generates random content from a predefined word list
   - Content loads gradually with smooth animations
   - Pages link to each other in sequence
   - The last page (bc7.html) links back to bc1.html
   - The "index.html" file includes a user agent check that redirects non-bots to index-notabot.html

3. The user agent check looks for common AI crawler identifiers:
   - anthropic-ai
   - Claude-Web
   - Applebot-Extended
   - Bytespider
   - CCBot
   - ChatGPT-User
   - cohere-ai
   - Diffbot
   - FacebookBot
   - GoogleOther
   - Google-Extended
   - GPTBot
   - ImagesiftBot
   - PerplexityBot
   - OmigiliBot
   - Omigili

   and more....

## File Structure

```
your-website/
├── index-notabot.html   # Your actual main page.
├── index.html           # Quicksand page 1
├── bc2.html             # Quicksand page 2
├── bc3.html             # Quicksand page 3
├── bc4.html             # Quicksand page 4
├── bc5.html             # Quicksand page 5
├── bc6.html             # Quicksand page 6
└── bc7.html             # Quicksand page 7
```

## How to Use

1. Rename your main content page to `index-notabot.html`
2. Copy all the provided HTML files to your website directory
3. Ensure all files are in the same directory
4. The system will automatically:
   - Show random content to AI crawlers
   - Redirect real users to your actual content

## Technical Details

- Uses JavaScript for user agent detection
- Base64 encoding for redirect paths
- CSS transitions for smooth content loading
- Random word generation from a predefined list
- Asynchronous content loading with delays

## Security Considerations

- The redirect path is base64 encoded to make it less obvious
- User agent checks are performed before any content is generated
- No sensitive information is exposed in the quicksand pages

## Customization

You can customize the following aspects without breaking the LICENSE:
- Word list for random content generation
- Loading animation timing
- Number of paragraphs per page
- Visual styling
- User agent detection list
- File names and refrences therein

## Notes

- This technology is designed to work with modern web browsers, but should also work with older brwosers.
- Some AI crawlers might still be able to bypass the detection (if they're smart enough.)
- Regular updates to the user agent list may likely be necessary
- The effectiveness may vary depending on the specific AI crawler