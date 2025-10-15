# Anass El Mazdougui - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern and minimal design with smooth animations
- 🌓 Dark/Light mode toggle with persistent theme preference
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎨 Custom color palette (Teal, Navy, Amber)
- 🚀 Fast performance with Vite
- 💼 Sections: Hero, About, Skills, Experience, Projects, Education, Contact
- 📧 Contact form with mailto integration
- 🎯 Smooth scrolling navigation

## Color Palette

- **Primary (Teal)**: #1ABC9C
- **Secondary (Deep Navy)**: #2C3E50
- **Accent (Warm Amber)**: #F39C12
- **Neutral (Light Gray)**: #ECF0F1

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
personal-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Adding Your Profile Photo

Place your profile photo in the `public` directory and name it `profile.jpg`. The About section will automatically display it.

### Updating Content

All content can be updated directly in the component files:

- **Personal Info**: Update in `Hero.jsx` and `About.jsx`
- **Skills**: Modify the `skillCategories` array in `Skills.jsx`
- **Experience**: Update the `experience` object in `Experience.jsx`
- **Projects**: Modify the `projects` array in `Projects.jsx`
- **Education**: Update the `education` array in `Education.jsx`
- **Contact Info**: Update in `Contact.jsx`

### Changing Colors

Edit the color values in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1ABC9C',
  secondary: '#2C3E50',
  accent: '#F39C12',
  neutral: '#ECF0F1',
}
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Contact

- **Email**: anasselmazdougui@gmail.com
- **LinkedIn**: [Anass El Mazdougui](https://linkedin.com/in/anass-el-mazdougui)
- **GitHub**: [tarq45](https://github.com/tarq45)
- **Location**: Tetouan, Morocco

## License

This project is open source and available for personal use.

---

Made with ❤️ and React by Anass El Mazdougui
