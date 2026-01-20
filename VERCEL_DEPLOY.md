# 🚀 דפלוי לVercel - מדריך מהיר

## אופציה 1: דפלוי ישיר מהמחשב (ללא GitHub) ⚡

### דרך A: Vercel CLI (הכי מהיר!)

```bash
# התקנת Vercel CLI
npm install -g vercel

# התחברות
vercel login

# דפלוי!
cd /home/user/repo/arli-studio
vercel
```

זהו! Vercel ישאל כמה שאלות פשוטות ואז ידפלס את האתר.

---

### דרך B: גרור ושחרר (Drag & Drop)

1. **בנה את הפרויקט:**
   ```bash
   cd /home/user/repo/arli-studio
   npm run build
   ```

2. **לך ל-Vercel:**
   https://vercel.com/new

3. **גרור את התיקייה `dist/` ישירות לדפדפן**
   מיקום: `/home/user/repo/arli-studio/dist/`

4. **✅ האתר חי תוך 30 שניות!**

---

## אופציה 2: דפלוי מ-GitHub (מומלץ לטווח ארוך) 🎯

### שלב 1: העלה לGitHub

יש 2 דרכים:

#### א. GitHub Desktop (קל)
1. הורד: https://desktop.github.com/
2. פתח את התיקייה: `/home/user/repo/arli-studio`
3. Publish repository
4. בחר: `Business-by-aRLi/aRLi-3d-website-test`

#### ב. טרמינל (עם Token)
1. צור Personal Access Token: https://github.com/settings/tokens/new
2. הרץ:
```bash
cd /home/user/repo/arli-studio
git remote set-url origin https://YOUR_TOKEN@github.com/Business-by-aRLi/aRLi-3d-website-test.git
git push -u origin main
```

### שלב 2: חבר ל-Vercel

1. **לך ל:** https://vercel.com/new
2. **לחץ:** "Import Git Repository"
3. **בחר:** `Business-by-aRLi/aRLi-3d-website-test`
4. **הגדרות (Vercel יזהה אוטומטית!):**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **לחץ Deploy!**

---

## 🎯 אחרי הדפלוי

### תקבל:
✅ URL חי: `https://arli-3d-website-test.vercel.app`
✅ HTTPS אוטומטי
✅ CDN גלובלי
✅ עדכונים אוטומטיים מ-Git

### דומיין מותאם אישית:
1. Settings → Domains
2. הוסף: `arli.studio` או כל דומיין אחר

---

## 📋 Checklist לפני Deploy

✅ `npm run build` עובד בלי שגיאות
✅ `npm run dev` עובד מקומית
✅ כל הקבצים בפרויקט:
   - ✅ index.html
   - ✅ style.css
   - ✅ main.js
   - ✅ robot-showcase.js
   - ✅ package.json
   - ✅ vite.config.js
   - ✅ vercel.json

---

## 🐛 פתרון בעיות

### Build נכשל?
```bash
# נקה ובנה מחדש
rm -rf node_modules dist
npm install
npm run build
```

### הרובוט לא נראה?
- בדוק Console בדפדפן
- ודא ש-Canvas נטען
- בדוק שאין שגיאות JavaScript

### Spline לא עובד?
- בדוק שה-URL נגיש: https://prod.spline.design/sFuFa0qxPJ1Jubco/scene.splinecode
- ודא שיש חיבור לאינטרנט
- בדוק Console לשגיאות CORS

---

## 🎨 עדכוני עיצוב אחרי Deploy

כל שינוי שתעשה:
1. ערוך את הקבצים
2. `git add .`
3. `git commit -m "תיאור השינוי"`
4. `git push`
5. Vercel יעדכן אוטומטית! ✨

---

## 📊 מה נבנה?

```
Build Output:
├── index.html          10.6 KB
├── assets/
│   ├── index.css       10.9 KB
│   ├── index.js        2.2 MB (Spline + פיזיקה)
│   └── physics.js      2.0 MB
│
Total: ~4.2 MB (gzipped: ~1.4 MB)
```

---

## 🚀 קישורים שימושיים

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **GitHub Repo:** https://github.com/Business-by-aRLi/aRLi-3d-website-test

---

## ⚡ הדרך הכי מהירה (60 שניות!)

```bash
cd /home/user/repo/arli-studio
npm install -g vercel
vercel login
vercel
```

**זהו! האתר שלך חי! 🎉**
