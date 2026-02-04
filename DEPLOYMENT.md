# GitHub Pages Deployment Guide

This guide explains how to deploy the Vejayanthran Education Fund website to GitHub Pages.

## Prerequisites

1. A GitHub repository (create one if you haven't already)
2. GitHub Pages enabled in your repository settings

## Option 1: Automatic Deployment via GitHub Actions (Recommended)

This is the easiest method - it automatically deploys whenever you push to the `main` branch.

### Setup Steps:

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

3. **Update the base path (if needed):**
   - If your repository is named `username.github.io`, the base path should be `/` (default)
   - If your repository has a different name, update the base path in `vite.config.js`:
     ```js
     base: env.VITE_BASE_PATH || '/YOUR_REPO_NAME/',
     ```
   - Or create a `.env` file with:
     ```
     VITE_BASE_PATH=/YOUR_REPO_NAME/
     ```
   - The GitHub Actions workflow automatically sets this based on your repository name

## Option 2: Manual Deployment using gh-pages

If you prefer to deploy manually:

1. **Build and deploy:**
   ```bash
   pnpm deploy
   ```

   This will:
   - Build the production version
   - Deploy to the `gh-pages` branch

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select the `gh-pages` branch
   - Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Important Notes

### Repository Name Matters

- If your repository is named `username.github.io`, the base path should be `/`
- If your repository has any other name (e.g., `vef-website`), the base path should be `/repo-name/`

### Custom Domain

If you want to use a custom domain:
1. Update `vite.config.js` to use `base: '/'`
2. Add a `CNAME` file in the `public` folder with your domain name
3. Configure DNS settings as per GitHub Pages documentation

### Updating the Site

- **With GitHub Actions:** Just push to `main` branch - deployment is automatic
- **With gh-pages:** Run `pnpm deploy` whenever you want to update

## Troubleshooting

### 404 Errors on Routes

If you get 404 errors when navigating to routes like `/mission`:
- Make sure the base path in `vite.config.js` matches your repository name
- Check that `BrowserRouter` has the correct `basename` prop

### Assets Not Loading

- Ensure all assets in the `public` folder are referenced with absolute paths (starting with `/`)
- Check that the base path is correctly configured

### Build Errors

- Make sure all dependencies are installed: `pnpm install`
- Check that the build completes successfully: `pnpm build`
