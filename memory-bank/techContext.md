# Technical Context: Counter-Terrorism Website

## Technology Stack

### Frontend Technologies
- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Modern styling with custom properties, flexbox, animations
- **Vanilla JavaScript**: No frameworks, pure DOM manipulation
- **Font Awesome 6.4.0**: Icon library for UI elements

### Development Tools
- **Git**: Version control with GitHub hosting
- **VS Code/Cursor**: Primary development environment
- **PowerShell**: Windows command line interface
- **Browser DevTools**: Testing and debugging

## Technical Architecture

### File Structure
```
site/
├── index.html              # Homepage
├── about.html              # About page
├── pamyatka.html           # Safety guidelines
├── history.html            # Historical context
├── contacts.html           # Contact information
├── css/
│   ├── styles.css          # Main stylesheet (2175 lines)
│   └── mobile-fixes.css    # Mobile-specific fixes (176 lines)
├── js/
│   ├── script.js           # Main JavaScript (398 lines)
│   └── scripts.js          # Additional utilities (64 lines)
├── images/
│   └── sticker.webp        # Logo image
├── favicon.svg             # Site favicon
└── README.md               # Project documentation
```

### Dependencies
- **Font Awesome CDN**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
- **No build tools**: Direct browser-compatible code
- **No package managers**: Pure HTML/CSS/JS

## Browser Support

### Target Browsers
- **Chrome/Chromium**: Full feature support
- **Safari**: Full support with webkit prefixes
- **Firefox**: Support with backdrop-filter fallbacks
- **Edge**: Modern Edge with Chromium engine
- **Mobile browsers**: iOS Safari, Chrome Mobile

### Feature Support Matrix
| Feature | Chrome | Safari | Firefox | Edge |
|---------|--------|--------|---------|------|
| CSS Custom Properties | ✅ | ✅ | ✅ | ✅ |
| Backdrop Filter | ✅ | ✅ | ❌* | ✅ |
| Flexbox | ✅ | ✅ | ✅ | ✅ |
| CSS Grid | ✅ | ✅ | ✅ | ✅ |
| localStorage | ✅ | ✅ | ✅ | ✅ |

*Firefox uses opacity fallback

### Polyfills & Fallbacks
- **Backdrop blur**: Opacity-based fallback for Firefox
- **Custom properties**: Supported in all target browsers
- **Flexbox**: Fallback to block layouts where needed

## Development Setup

### Local Development
```bash
# Clone repository
git clone https://github.com/theJorDea/Countering-terrorism-website.git

# Serve locally (Python method)
python -m http.server 8000

# Or simple file:// protocol for basic testing
```

### Git Configuration (Windows/Cyrillic)
```bash
git config --global core.quotepath off
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
git config --global core.precomposeunicode true
```

### PowerShell Encoding
```powershell
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001
```

## Technical Constraints

### Static Website Limitations
- **No server-side processing**: Pure client-side functionality
- **No database**: All content is static HTML
- **No user authentication**: Public access only
- **No form processing**: Contact forms are display-only

### Performance Requirements
- **Fast loading**: Minimize HTTP requests
- **Mobile performance**: Optimize for mobile devices
- **Offline capability**: Could work without internet after first load

### Security Considerations
- **No sensitive data**: All content is public
- **XSS prevention**: Minimal dynamic content
- **HTTPS recommended**: For production deployment

## Code Organization

### CSS Architecture
```css
/* 1. CSS Variables (theming) */
:root { /* variables */ }
[data-theme="dark"] { /* dark theme overrides */ }

/* 2. Base styles */
*, body, html { /* resets and base */ }

/* 3. Components */
header, nav, main, footer { /* component styles */ }

/* 4. Responsive */
@media (max-width: 768px) { /* mobile styles */ }
```

### JavaScript Structure
```javascript
// 1. DOMContentLoaded wrapper
document.addEventListener('DOMContentLoaded', function() {
    // 2. Feature detection
    // 3. Theme management
    // 4. Navigation handling
    // 5. Emergency button functionality
    // 6. Event listeners
});

// 7. Utility functions
function copyNumber() { /* clipboard functionality */ }
```

## Version Control Strategy

### Branch Structure
- **main**: Stable production code
- **version-1.0**: First stable release
- **version-1.5**: Current development with mobile improvements
- **mobile-menu-improvements**: Feature branch (merged)

### Git Workflow
1. Feature branches for new functionality
2. Merge to version branches for testing
3. Production releases from stable version branches

## Deployment Considerations

### Static Hosting Options
- **GitHub Pages**: Direct from repository
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Git-based deployment
- **Traditional hosting**: Upload to any web server

### Build Process
- **No build step required**: Direct HTML/CSS/JS
- **Optional optimization**: CSS/JS minification
- **Image optimization**: WebP format already used

## Performance Optimization

### Current Optimizations
- **System fonts**: No web font loading
- **CSS custom properties**: Efficient theming
- **Minimal JavaScript**: No framework overhead
- **Compressed images**: WebP format

### Potential Improvements
- **CSS minification**: For production builds
- **JavaScript minification**: Reduce file size
- **Image lazy loading**: For better initial load
- **Service worker**: For offline capability

## Accessibility Standards

### Current Implementation
- **ARIA labels**: Screen reader support
- **Semantic HTML**: Proper heading structure
- **Keyboard navigation**: Focus management
- **Color contrast**: High contrast in both themes
- **Responsive text**: Scalable font sizes

### Compliance Target
- **WCAG 2.1 AA**: Web Content Accessibility Guidelines
- **Section 508**: US accessibility standards
- **EN 301 549**: European accessibility standard 