# System Patterns: Counter-Terrorism Website

## Architecture Overview

### Structure
```
├── HTML Pages (5 total)
│   ├── index.html (Homepage)
│   ├── about.html (Organization info)
│   ├── pamyatka.html (Safety guidelines)
│   ├── history.html (Historical context)
│   └── contacts.html (Contact information)
├── CSS Architecture
│   ├── styles.css (Main styles)
│   └── mobile-fixes.css (Mobile-specific fixes)
├── JavaScript Modules
│   ├── script.js (Main functionality)
│   └── scripts.js (Additional utilities)
└── Assets
    ├── images/ (Visual assets)
    └── favicon.svg
```

## Key Design Patterns

### 1. Mobile-First Responsive Design
- **Pattern**: Progressive enhancement from mobile base
- **Implementation**: CSS media queries, flexible layouts
- **Breakpoints**: 480px, 576px, 768px, 992px, 1200px

### 2. Theme System
- **Pattern**: CSS custom properties (variables) for theming
- **States**: Light theme (default), Dark theme
- **Persistence**: localStorage for user preference
- **Transition**: Smooth 0.5s animations between themes

### 3. Mobile Menu Pattern
- **Type**: Full-screen overlay menu
- **Trigger**: Hamburger toggle button
- **Animation**: Fade-in with backdrop blur
- **Accessibility**: ARIA labels, keyboard navigation
- **Scroll Management**: Prevents body scroll when open

### 4. Component Patterns

#### Header Component
- **Fixed positioning** with scroll-based compaction
- **Logo + Navigation** layout pattern
- **Backdrop blur** when scrolled (with fallbacks)
- **Responsive** collapse to mobile menu

#### Emergency Services Pattern
- **Floating Action Button** on homepage only
- **Auto-collapse** behavior (expanded → semi-collapsed)
- **One-click copy** functionality
- **Tooltip feedback** for user actions

#### Section Layout Pattern
- **Container wrapper** for consistent max-width
- **Alternating backgrounds** with transparency/blur
- **Flex-based** content arrangement
- **Hover effects** for interactivity

## Technical Patterns

### 1. CSS Architecture
```css
/* Pattern: CSS Custom Properties for theming */
:root {
    --bg-color: #f7f7f7;
    --text-color: #333;
    /* ... other variables */
}

[data-theme="dark"] {
    --bg-color: #222;
    --text-color: #eee;
    /* ... dark overrides */
}
```

### 2. JavaScript Module Pattern
```javascript
// Pattern: DOMContentLoaded initialization
document.addEventListener('DOMContentLoaded', function() {
    // All initialization code
});

// Pattern: Feature detection and progressive enhancement
if (floatingEmergency) {
    // Enhanced functionality only if element exists
}
```

### 3. Scroll Position Management
- **Pattern**: Preserve scroll position during menu operations
- **Implementation**: Store scroll Y, restore after menu close
- **Use case**: Prevents jarring scroll-to-top behavior

### 4. Animation Patterns
- **Backdrop blur**: Modern browsers with fallbacks
- **Fade transitions**: 0.3s ease for most interactions
- **Transform animations**: Scale and translate for buttons
- **Keyframe animations**: Named animations for complex sequences

## Responsive Patterns

### Navigation Pattern
- **Desktop**: Horizontal navigation bar
- **Mobile**: Full-screen overlay menu
- **Transition**: Hidden display at 768px breakpoint

### Content Layout Pattern
- **Desktop**: Flex-based multi-column layouts
- **Mobile**: Single-column stack
- **Images**: Responsive with max-width: 100%

### Typography Pattern
- **Base**: 16px system font stack
- **Scaling**: Rem-based sizing with media query adjustments
- **Headers**: Responsive size reduction on mobile

## State Management Patterns

### Theme Persistence
```javascript
// Pattern: localStorage with fallback
const savedTheme = localStorage.getItem('theme') || 'light';
```

### Menu State
```javascript
// Pattern: ARIA attributes for accessibility
menuToggle.setAttribute('aria-expanded', !isExpanded);
```

### Scroll State
```javascript
// Pattern: Threshold-based class application
if (window.scrollY > 20) {
    header.classList.add('compact');
}
```

## Performance Patterns

### CSS Loading
- **Critical CSS**: Inline or prioritized
- **Font loading**: System fonts for performance
- **Animations**: GPU-accelerated transforms

### JavaScript Loading
- **Defer attribute**: Non-blocking script loading
- **Feature detection**: Graceful degradation
- **Event delegation**: Efficient event handling

### Image Optimization
- **WebP format**: Modern format with fallbacks
- **Responsive images**: Appropriate sizing
- **Lazy loading**: Could be implemented for performance

## Browser Compatibility Patterns

### Backdrop Blur Support
```css
/* Pattern: Progressive enhancement with fallbacks */
backdrop-filter: blur(8px);
-webkit-backdrop-filter: blur(8px);

/* Firefox fallback */
@-moz-document url-prefix() {
    background-color: var(--header-bg);
    opacity: 0.95;
}
```

### Flexbox Patterns
- **Fallbacks**: Block layout for older browsers
- **Vendor prefixes**: Where necessary
- **Feature queries**: `@supports` for modern features 