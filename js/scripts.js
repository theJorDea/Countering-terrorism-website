document.addEventListener('DOMContentLoaded', () => {
    // ... any existing DOMContentLoaded code ...

    const themeToggleContainer = document.querySelector('.theme-toggle');
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');

    if (themeToggleContainer && themeToggleCheckbox) {
        // Create the theme name label
        const themeNameLabel = document.createElement('span');
        themeNameLabel.classList.add('theme-name-label');
        
        // Function to update the theme name
        const updateThemeName = () => {
            if (document.body.getAttribute('data-theme') === 'dark') {
                themeNameLabel.textContent = 'Темная тема';
            } else {
                themeNameLabel.textContent = 'Светлая тема';
            }
        };

        // Insert the label after the checkbox's visual label
        const visualLabel = themeToggleContainer.querySelector('.theme-toggle-label');
        if (visualLabel && visualLabel.parentNode === themeToggleContainer) {
            visualLabel.insertAdjacentElement('afterend', themeNameLabel);
        } else {
            // Fallback: append to container if specific label not found or structured differently
            themeToggleContainer.appendChild(themeNameLabel);
        }

        // Initial theme name
        updateThemeName();

        // Update theme name on toggle
        themeToggleCheckbox.addEventListener('change', updateThemeName);

        // Ensure the body data-theme attribute is updated if not already handled
        // This part might already exist in your scripts.js
        if (!document.body.hasAttribute('data-theme-updater-attached')) {
            themeToggleCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    document.body.setAttribute('data-theme', 'dark');
                } else {
                    document.body.setAttribute('data-theme', 'light');
                }
                // Call updateThemeName again in case the attribute change itself doesn't trigger it.
                updateThemeName(); 
            });
            // Add a flag to prevent attaching multiple listeners if this script runs multiple times
            document.body.setAttribute('data-theme-updater-attached', 'true');

            // Set initial theme based on checkbox state if body attribute is not set
            if (!document.body.getAttribute('data-theme')) {
                if (themeToggleCheckbox.checked) {
                    document.body.setAttribute('data-theme', 'dark');
                } else {
                    document.body.setAttribute('data-theme', 'light');
                }
                updateThemeName();
            }
        }
    }

    // ... more existing DOMContentLoaded code ...
}); 