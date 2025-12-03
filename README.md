# ROOTS — BRUTALIST DESIGN AGENCY

A bold, unapologetically different design agency website built with Vite, React, React Router, and Tailwind CSS. This is not your typical agency site—it features a **brutalist-editorial aesthetic** with expressive typography, high-contrast colors, and purposeful design decisions.

## 🎨 Design Philosophy

This project **actively avoids** the generic "AI slop aesthetic" by embracing:

- **Bold, Character-Rich Typography**: Fraunces (display serif) + Archivo (sans-serif) + JetBrains Mono
- **High-Contrast Color Palette**: Cream paper (`#f5f1e8`), deep ink (`#0a0a0a`), hot pink accent (`#ff3366`), electric yellow highlight (`#ffeb3b`)
- **Brutalist Design Elements**: Hard borders, dramatic shadows, geometric shapes, and intentional roughness
- **Textured Backgrounds**: Grid patterns, noise overlays, and layered atmospheres
- **Purposeful Motion**: CSS-based animations with intentional timing and choreography

## ✨ Features

- **Modern Tech Stack**: Vite, React 18, React Router v6, Tailwind CSS 3
- **Fully Responsive**: Optimized for all devices with brutalist design intact
- **Art-Directed Pages**: Each page has unique visual treatments
- **Custom Design System**: Brutalist borders, hover lifts, hard shadows
- **Zero Generic UI**: Every component is custom-designed for this aesthetic

## 📄 Pages

### Home (`/`)
- Large-scale hero with animated slide-up entrance
- Service cards with numbered badges and varied color treatments
- Featured work with color-blocked project previews
- Layered CTA sections with atmospheric backgrounds

### Work (`/work`)
- Asymmetric project grid (mixing regular and large cards)
- Bold color blocks for project imagery
- Filter pills with brutalist styling
- Hover states with purposeful transitions

### Team (`/team`)
- Philosophy cards with dark/accent treatments
- Numbered team member cards with badge icons
- Career CTA with border treatment
- Editorial typography hierarchy

### Contact (`/contact`)
- Brutalist form design with bold borders
- Sidebar info cards with varied color treatments
- Social links with arrow indicators
- Multiple CTA touchpoints

## 🎯 Design System

### Colors (CSS Variables)
```css
--color-ink: #0a0a0a       /* Primary text & borders */
--color-paper: #f5f1e8     /* Background */
--color-accent: #ff3366    /* Primary accent */
--color-muted: #8b8680     /* Secondary text */
--color-highlight: #ffeb3b /* Secondary accent */
```

### Typography
- **Display**: Fraunces (bold, italic variants for impact)
- **Body**: Archivo (clean, legible, wide weight range)
- **Code**: JetBrains Mono (for technical elements)

### Key Components

#### Brutalist Border
```css
border: 3px solid var(--color-ink);
box-shadow: 8px 8px 0 var(--color-ink);
```

#### Hover Lift
```css
transform: translate(-4px, -4px);
box-shadow: 12px 12px 0 var(--color-ink);
```

#### Section Grid
```css
background-size: 40px 40px;
/* Creates subtle geometric background */
```

## 🛠 Tech Stack

- **Vite**: Lightning-fast build tool
- **React**: UI library
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS (heavily customized)
- **Google Fonts**: Fraunces, Archivo, JetBrains Mono

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Visit `http://localhost:5173`

### Build
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Core UI components
│   ├── Button.jsx      # Brutalist button with variants
│   ├── Card.jsx        # Card with hover-lift effect
│   └── Container.jsx   # Max-width wrapper
├── layouts/            # Layout components
│   ├── Layout.jsx      # Main wrapper
│   ├── Navbar.jsx      # Bold navigation with active states
│   └── Footer.jsx      # Editorial footer with mono styling
├── pages/              # Page components
│   ├── Home.jsx        # Landing with hero + sections
│   ├── Work.jsx        # Portfolio grid
│   ├── Team.jsx        # Team members + culture
│   └── Contact.jsx     # Contact form + info
├── App.jsx             # Router setup
├── main.jsx            # Entry point
└── index.css           # Custom CSS + Tailwind
```

## 🎨 Customization

### Change the Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  ink: '#your-color',
  paper: '#your-color',
  accent: '#your-color',
  muted: '#your-color',
  highlight: '#your-color',
}
```

### Adjust Typography

Change the font imports in `src/index.css` and update the font families in `tailwind.config.js`.

### Modify Brutalist Effects

Edit the utility classes in `src/index.css`:
- `.brutalist-border` - Adjust border width and shadow offset
- `.hover-lift` - Change transform and shadow on hover
- `.section-grid` - Modify grid size and opacity

## 🎭 Design Principles Applied

This project demonstrates:

1. **Avoiding Generic Aesthetics**: No blue gradients, no Space Grotesk, no safe defaults
2. **Bold Typography Choices**: Display fonts that define the aesthetic
3. **Opinionated Color Palette**: High contrast, memorable, unconventional
4. **Purposeful Motion**: Animations that enhance, not decorate
5. **Textured Depth**: Backgrounds that add atmosphere and identity
6. **Unexpected Interactions**: Hover effects that surprise and delight
7. **Art Direction**: Each page feels intentionally designed, not templated

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires support for CSS custom properties and modern Flexbox/Grid

## 📝 License

MIT License - Feel free to use this as inspiration for your own projects!

## 💌 Contact

Questions? Feedback? Reach out at **hello@roots.agency**

---

**Note**: This is a demonstration project showcasing how to create distinctive, art-directed frontends that break free from generic AI design patterns. Use it as inspiration to create your own unique aesthetic.
