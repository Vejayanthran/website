# Vejayanthran Education Fund - React Website

A modern, responsive React website for the Vejayanthran Education Fund, built with React, Vite, and Tailwind CSS.

## Features

- **Modern React Architecture** - Built with React 19 and Vite for fast development
- **React Router** - Multi-page navigation with routing support
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Responsive Design** - Mobile-first approach that works on all devices
- **Real-time Funding Progress** - Live data from Google Sheets API
- **Hero Background Image** - Beautiful landscape image from container03.jpg
- **Enhanced Donors Section** - Slick, modern design with gradient cards and hover effects
- **Google Analytics** - Integrated tracking with GA4
- **GitHub Pages Deployment** - Automated deployment via GitHub Actions
- **Brand Colors** - Yellow (#ffcd42), Dark Gray (#252523), and White

## Tech Stack

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **PostCSS** - CSS processing
- **Google Analytics** - Website analytics
- **GitHub Actions** - CI/CD for automated deployment

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
.
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── FundingProgress.jsx
│   │   ├── Mission.jsx
│   │   ├── About.jsx
│   │   ├── EducationCrisis.jsx
│   │   ├── Scholarship.jsx
│   │   ├── Fellows.jsx
│   │   ├── Donors.jsx
│   │   ├── Support.jsx
│   │   ├── Footer.jsx
│   │   └── SocialIcons.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── MissionPage.jsx
│   ├── utils/
│   │   └── analytics.js
│   ├── assets/
│   │   └── images/
│   │       ├── container03.jpg (hero background)
│   │       ├── image02.jpg
│   │       ├── image04.jpg
│   │       └── image05.jpg
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── vejayanthran_favicon.png
│   └── vejayanthran_transparent.png
├── .github/
│   └── workflows/
│       └── deploy.yml
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
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
Mission statement with stats cards (20 Teachers, R100K, #1 University) and "Our Solution" section.

### About
Section about Vejayanthran Naidoo and the foundation of the Education Fund.

### EducationCrisis
Section explaining South Africa's education crisis and challenges.

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

This project is configured for automatic deployment to **GitHub Pages** using GitHub Actions.

### GitHub Pages Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys the site whenever you push to the `main` branch.

#### Quick Setup:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on the next push to `main`

3. **Configure Base Path (if needed):**
   - If your repository is named `username.github.io`, the base path is `/` (default)
   - If your repository has a different name, the GitHub Actions workflow automatically sets the base path based on your repository name
   - For local development, you can create a `.env` file with:
     ```
     VITE_BASE_PATH=/YOUR_REPO_NAME/
     ```

#### Manual Deployment:

If you prefer to deploy manually using the `gh-pages` package:

```bash
pnpm deploy
```

This will build the production version and deploy to the `gh-pages` branch.

### Other Deployment Options

The site can also be deployed to other static hosting services:

- **Vercel:** `vercel deploy`
- **Netlify:** Drag and drop the `dist` folder or connect your GitHub repo
- **AWS S3:** Upload the `dist` folder

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## License

Private project for Vejayanthran Education Fund.
