# ⚡ QUICKSTART - Get Running in 2 Minutes

## For Your Demo/Review TODAY

### Option 1: Run Locally (Fastest)

```bash
# 1. Navigate to project
cd ecommerce-recommender/frontend

# 2. Install dependencies (one-time, ~1 minute)
npm install

# 3. Start development server
npm run dev
```

**That's it!** Open http://localhost:3000 in your browser.

---

### Option 2: Deploy to GitHub Pages (Show Live URL)

```bash
# 1. Create GitHub repo named 'ecommerce-recommender'

# 2. Push code
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-recommender.git
git push -u origin main

# 3. Deploy
cd frontend
npm install
npm run deploy

# 4. Enable GitHub Pages
# Go to repo → Settings → Pages → Source: gh-pages → Save
```

**Live in 2-3 minutes at:** `https://YOUR_USERNAME.github.io/ecommerce-recommender/`

---

## What You'll See

✅ **Dashboard** - Beautiful charts with analytics  
✅ **Products** - 12 real products with search/filter  
✅ **Recommendations** - AI suggestions with confidence scores  
✅ **Purchase History** - Order tracking and insights  

---

## For the Backend (Optional - Not Needed for Demo)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Backend runs at http://localhost:5000

---

## Troubleshooting

**"npm not found"**: Install Node.js from https://nodejs.org

**"Port 3000 already in use"**: Kill the process or it will use 3001

**Blank page on GitHub Pages**: 
- Check `vite.config.js` base matches your repo name
- Wait 2-3 minutes after first deploy

---

## Show Your Reviewers

1. **Open the live site** (or localhost)
2. **Start at Dashboard** - point out the charts
3. **Go to Recommendations** - this is your main feature!
4. **Show search/filter** on Products page
5. **Mention**: "Backend API is ready, database designed, ML algorithms 40% done"

---

**That's all you need! Now go ace that review! 🚀**

*For detailed info, see README.md and DEMO_GUIDE.md*
