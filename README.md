# Countering-terrorism-website

An informational resource dedicated to terrorism prevention and counteraction.

## Project Description

This project is a simple informational website containing materials about countering terrorism. The site includes the following sections:
- Main page with general information
- "About Us" page with the mission description and areas of activity
- Information about signs of terrorist attack preparation
- Safety recommendations

## Project Structure

```
├── index.html          # Main page
├── about.html          # About Us page
├── styles.css          # Styles for the entire site
├── .gitignore          # Git exclusions
├── images/             # Images directory
│   └── generate.html   # Placeholder generator for images
└── README.md           # Project documentation
```

## Technologies

- HTML5
- CSS3
- Embedded SVG images

## Installation and Launch

1. Clone the repository:

```
git clone https://github.com/theJorDea/Countering-terrorism-website.git
```

2. Open the index.html file in your browser.

## Features

- Responsive design
- All necessary information is immediately available on the site
- Optimized images via SVG
- Modern design using gradients

## Git Configuration for Cyrillic in Windows

If you encounter problems displaying Cyrillic characters in git log or commits, run the following commands:

```
git config --global core.quotepath off
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
git config --global core.precomposeunicode true
```

For PowerShell, console encoding configuration may also be required:

```
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001
```

Note that when working with Cyrillic in Windows, there may be issues with displaying the first letter in commit messages. This is due to how PowerShell and Git handle encoding in Windows. It's recommended to use English for commit messages.

## License

The project is distributed under an open license. You are free to use, modify, and distribute it.

## Contact

If you have questions or suggestions for improving the site, please contact us.

## Required Images

For the full functionality of the site, you need to download the following images and place them in the `images/` folder:

1. `hero-bg.jpg` - background image for the main page
2. `about-hero.jpg` - background image for the "About Us" page
3. `terrorism-prevention.jpg` - image for the "What is terrorism?" section
4. `safety.jpg` - image for the "What to do in case of a threat" section
5. `mission.jpg` - image for the "Our Mission" section
6. `activities.jpg` - image for the "Areas of Activity" section

## Image Sources

You can use free images from the following websites:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

## Note

Instead of downloading images, you can also use placeholders, for example:
- https://placehold.co/600x400?text=Safety
- https://placehold.co/800x400?text=Terrorism+Prevention
