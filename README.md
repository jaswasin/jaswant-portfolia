# Portfolio Website

A professional, modern portfolio website template based on the design of https://www.bksaini.com/

## Features

✨ **Clean & Modern Design** - Professional layout inspired by industry standards
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
🎨 **Customizable** - Easy to personalize with your own content and colors
⚡ **Lightweight** - Fast loading, no dependencies required
🔗 **Easy Navigation** - Smooth scrolling and intuitive section navigation
✉️ **Contact Section** - Social media links and contact information
📝 **Blog/Thinking Section** - Share your latest articles and insights

## Sections Included

1. **Navigation Bar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching introduction with profile picture
3. **About Section** - Detailed bio and key skills
4. **Work Experience** - Professional background and roles
5. **Featured Projects** - Showcase your best work
6. **Publications & Achievements** - Highlight your accomplishments
7. **Latest Thinking/Blog** - Share your thoughts and insights
8. **Contact Section** - Call-to-action for visitors to reach out
9. **Footer** - Copyright and social links

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and responsive design
- `script.js` - Interactive features and animations
- `README.md` - This file

## Getting Started

1. **Edit Your Information**
   - Open `index.html` and replace placeholder text with your information
   - Update your name, title, bio, and description
   - Add your profile picture (replace `profile.jpg`)

2. **Customize Colors**
   - Open `style.css`
   - Find the `:root` section at the top
   - Modify the color variables:
     ```css
     --primary-color: #0066cc;      /* Main brand color */
     --secondary-color: #f0f2f5;    /* Light background */
     --accent-color: #00a651;       /* Accent color */
     ```

3. **Add Your Content**
   - Update all sections with your real information
   - Add project descriptions and links
   - Update work experience details
   - Add your blog posts
   - Update social media links

4. **Test Locally**
   ```bash
   # Open index.html in a browser
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Customization Tips

### Change Colors
All colors are defined in the `:root` selector in `style.css`. Update these to match your brand:
- `--primary-color`: Your main brand color
- `--secondary-color`: Light background color
- `--accent-color`: Highlight color
- `--text-dark`: Dark text color
- `--text-light`: Light text color

### Add a Profile Picture
1. Place your profile image (e.g., `profile.jpg`) in the same directory
2. Update the image path in the hero section:
   ```html
   <img src="your-image.jpg" alt="Your Profile Picture">
   ```

### Update Navigation Links
Edit the sections in `index.html` to add or remove navigation items.

### Add More Projects
Copy and paste the project card structure to add more projects:
```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Title</h3>
    </div>
    <p>Description of your project.</p>
    <div class="project-links">
        <a href="#" class="link-btn">View Project →</a>
    </div>
</div>
```

### Update Social Links
Replace placeholder links in:
- Hero section
- Contact section
- Footer

Common platforms:
- LinkedIn: `https://linkedin.com/in/your-profile`
- GitHub: `https://github.com/your-username`
- Twitter: `https://twitter.com/your-handle`
- Email: `mailto:your.email@example.com`

## Features Included

### Responsive Design
- Works on screens as small as 320px
- Optimized layout for mobile, tablet, and desktop
- Flexible grid system

### Interactive Elements
- Smooth scrolling navigation
- Active section highlighting in navbar
- Hover effects on cards and buttons
- Scroll-to-top button appears after scrolling 300px
- Fade-in animations on scroll

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard accessible navigation

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload your portfolio files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your folder to Netlify
2. Configure custom domain (optional)
3. Done!

### Traditional Hosting
Upload files to your web host via FTP/SFTP:
- Upload `index.html`, `style.css`, and `script.js`
- Upload your profile picture

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Version History

- **v1.0** - Initial release with all core sections

## License

Free to use and modify for personal projects.

## Notes

- Keep image file sizes optimized for web (under 200KB)
- Test your site on mobile devices before deployment
- Update content regularly to keep your portfolio fresh
- Consider adding a blog or writing articles to improve SEO

---

**Ready to launch?** Update all the placeholder text, add your content, and share your portfolio with the world! 🚀
