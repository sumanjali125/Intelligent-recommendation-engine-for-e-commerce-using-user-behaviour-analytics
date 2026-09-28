# 🚀 Deployment Guide - GitHub Pages

## Quick Deploy in 5 Minutes ⚡

### Step 1: Prepare Your Repository

1. **Create a new repository on GitHub**:
   - Name it `ecommerce-recommender` (or any name you want)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Push your code**:
   ```bash
   cd ecommerce-recommender
   git init
   git add .
   git commit -m "Initial commit: SmartCart Recommendation System"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ecommerce-recommender.git
   git push -u origin main
   ```

### Step 2: Configure for GitHub Pages

1. **Update `vite.config.js`**:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/ecommerce-recommender/',  // ← Change this to your repo name
     // ... rest of config
   })
   ```

2. **Update `App.jsx` Router basename**:
   ```jsx
   <Router basename="/ecommerce-recommender">  {/* ← Change this to your repo name */}
     <AppContent />
   </Router>
   ```

### Step 3: Deploy

```bash
cd frontend
npm install
npm run deploy
```

This command will:
1. Build your React app
2. Create a `gh-pages` branch
3. Push the built files to GitHub

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source":
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
4. Click **Save**

### Step 5: Visit Your Site! 🎉

Your site will be live at:
```
https://YOUR_USERNAME.github.io/ecommerce-recommender/
```

*Note: It may take 2-3 minutes for the first deployment*

---

## Troubleshooting

### Issue: 404 Error or Blank Page

**Solution**: Check your `vite.config.js` and `App.jsx` Router basename match your repo name exactly.

```js
// vite.config.js
base: '/ecommerce-recommender/',  // Must match repo name with slashes

// App.jsx
<Router basename="/ecommerce-recommender">  // Must match repo name
```

### Issue: Images or Assets Not Loading

**Solution**: Ensure all assets are in the `public/` folder or imported properly in components.

### Issue: Deploy Command Not Found

**Solution**: Install gh-pages:
```bash
npm install --save-dev gh-pages
```

---

## Advanced: Custom Domain

1. Add a `CNAME` file in `frontend/public/`:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. In GitHub Settings → Pages, add your custom domain

---

## Updating Your Site

After making changes:

```bash
cd frontend
npm run build
npm run deploy
```

---

## Local Development

```bash
cd frontend
npm run dev
```

Opens at `http://localhost:3000`

---

## Adding Backend (Optional)

### Deploy Backend to Render

1. Create `render.yaml` in project root:
   ```yaml
   services:
     - type: web
       name: smartcart-api
       env: python
       buildCommand: pip install -r backend/requirements.txt
       startCommand: cd backend && gunicorn app:app
   ```

2. Add `gunicorn` to `backend/requirements.txt`:
   ```
   gunicorn==21.2.0
   ```

3. Connect GitHub repo to Render
4. Deploy!

### Update Frontend to Use Backend

In your data fetching code, update API URL:
```js
const API_URL = 'https://your-app.onrender.com/api';
```

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

---

## Need Help?

Common issues and solutions:
- **Blank page**: Check browser console for errors
- **404 on refresh**: This is normal for SPAs on GitHub Pages
- **Slow loading**: First deploy takes longer, subsequent ones are faster

---

**You're all set! 🎊**

Show your amazing project to your reviewers!
