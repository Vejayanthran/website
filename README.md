# Vejayanthran Education Fund - React Website

A modern, responsive React website for the Vejayanthran Education Fund, built with React, Vite, and Tailwind CSS.

## Features

- **Modern React Architecture** - Built with React 19 and Vite for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Responsive Design** - Mobile-first approach that works on all devices
- **Real-time Funding Progress** - Live data from Google Sheets API
- **Hero Background Image** - Beautiful landscape image from container03.jpg
- **Enhanced Donors Section** - Slick, modern design with gradient cards and hover effects
- **Brand Colors** - Yellow (#ffcd42), Dark Gray (#252523), and White

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (install with `npm install -g pnpm`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
vef-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── FundingProgress.jsx
│   │   ├── Mission.jsx
│   │   ├── Scholarship.jsx
│   │   ├── Fellows.jsx
│   │   ├── Donors.jsx
│   │   ├── Support.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── images/
│   │       ├── container03.jpg (hero background)
│   │       ├── image02.jpg
│   │       ├── image04.jpg
│   │       └── image05.jpg
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Components

### Navigation
Fixed navigation bar with smooth scroll links and prominent Donate button.

### Hero
Full-screen hero section with background image (container03.jpg) and call-to-action buttons.

### FundingProgress
Real-time funding progress bars that fetch data from Google Sheets API.

### Mission
Mission statement with stats cards and split-screen content layout.

### Scholarship
Scholarship details and eligibility criteria in a card-based grid.

### Fellows
Profile section for candidate fellows with image and biography.

### Donors
Enhanced donors section with:
- Gradient cards for each tier (Platinum, Gold, Silver)
- Hover effects and animations
- Responsive grid layout
- Clickable links for organizations

### Support
Call-to-action section for the Aspiring Teachers Support Group.

### Footer
Contact information and trust acknowledgment.

## Color Scheme

- **Primary (Dark Gray):** `#252523`
- **Yellow (Accent):** `#ffcd42`
- **White:** `#ffffff`

Colors are defined in `tailwind.config.js` and can be customized there.

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: '#252523',
  yellow: '#ffcd42',
  accent: '#ffcd42',
}
```

### Content
Edit the component files in `src/components/` to update content.

### Images
Replace images in `src/assets/images/` or update the import paths in components.

## Deployment

The site can be deployed to any static hosting service:

- **Vercel:** `vercel deploy`
- **Netlify:** Drag and drop the `dist` folder
- **GitHub Pages:** Use the `dist` folder
- **AWS S3:** Upload the `dist` folder

## License

Private project for Vejayanthran Education Fund.
