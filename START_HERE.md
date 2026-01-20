# 🎯 התחל כאן - דפלוי aRLi ל-Vercel

## ⚡ הדרך הכי מהירה (2 דקות!)

### אופציה 1: Vercel CLI (מומלץ!)

פתח טרמינל והרץ:

```bash
# 1. התקן Vercel CLI
npm install -g vercel

# 2. היכנס לתיקייה
cd /home/user/repo/arli-studio

# 3. התחבר ל-Vercel
vercel login

# 4. דפלס!
vercel
```

Vercel ישאל אותך:
- **Set up and deploy?** → Y
- **Which scope?** → בחר את החשבון שלך
- **Link to existing project?** → N
- **Project name?** → arli-3d-website (או כל שם)
- **Directory?** → לחץ Enter (. = תיקייה נוכחית)
- **Override settings?** → N

**✅ תוך 30-60 שניות תקבל קישור לאתר החי!**

---

### אופציה 2: גרור ושחרר (Drag & Drop)

#### שלב 1: בנה את הפרויקט
```bash
cd /home/user/repo/arli-studio
npm install
npm run build
```

#### שלב 2: העלה ל-Vercel
1. לך ל: **https://vercel.com/new**
2. התחבר עם GitHub / Email
3. **גרור את התיקייה `dist/`** ישירות לחלון הדפדפן
4. ✅ האתר חי!

מיקום התיקייה:
```
/home/user/repo/arli-studio/dist/
```

---

### אופציה 3: חיבור ל-GitHub (לעדכונים אוטומטיים)

#### שלב 1: העלה ל-GitHub

**דרך מהירה - העתק-הדבק:**

1. לך ל: https://github.com/Business-by-aRLi/aRLi-3d-website-test
2. לחץ: **"Add file" → "Upload files"**
3. העלה את הקבצים האלה:
   ```
   index.html
   style.css
   main.js
   robot-showcase.js
   package.json
   package-lock.json
   vite.config.js
   vercel.json
   .gitignore
   README.md
   ```
4. Commit message: `Initial commit: aRLi 3D Website ✨`
5. לחץ: **"Commit changes"**

**או בטרמינל (אם יש GitHub CLI):**
```bash
cd /home/user/repo/arli-studio
gh auth login
git push -u origin main
```

#### שלב 2: דפלס מ-GitHub ל-Vercel

1. לך ל: **https://vercel.com/new**
2. לחץ: **"Import Git Repository"**
3. בחר: **`Business-by-aRLi/aRLi-3d-website-test`**
4. הגדרות (Vercel יזהה אוטומטית):
   - Framework: **Vite** ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
5. לחץ: **Deploy**
6. ✅ חי תוך דקה!

---

## 🎉 אחרי הדפלוי

### תקבל:
- ✅ **URL חי:** `https://arli-3d-website-xxx.vercel.app`
- ✅ **HTTPS אוטומטי**
- ✅ **CDN גלובלי** (מהיר בכל העולם)
- ✅ **עדכונים אוטומטיים** (אם חיברת ל-GitHub)

### הוסף דומיין מותאם:
1. Vercel → Settings → Domains
2. הוסף: `arli.studio` או כל דומיין

---

## 📂 מה בפרויקט?

```
arli-studio/
├── index.html              ← עמוד ראשי (RTL עברית)
├── style.css              ← עיצוב מלא
├── main.js                ← JavaScript מרכזי
├── robot-showcase.js      ← הרובוט המותאם
├── package.json           ← תלויות
├── vite.config.js         ← קונפיגורציה
├── vercel.json           ← הגדרות Vercel
└── README.md              ← תיעוד
```

---

## 🎨 מה האתר כולל?

✨ **Hero Section** - טקסט גדול + סצנת Spline 3D
🤖 **Robot Entity** - רובוט מותאם בCanvas
📜 **Scroll Animations** - אנימציות GSAP מתקדמות
🇮🇱 **RTL Hebrew** - תמיכה מלאה בעברית
💜 **Orchid Purple** - צבע מותג (#C48FD6)
📱 **Responsive** - עובד על כל מכשיר

---

## 🆘 צריך עזרה?

### Build נכשל?
```bash
rm -rf node_modules dist
npm install
npm run build
```

### האתר לא נטען?
- בדוק Console (F12)
- ודא שכל הקבצים הועלו
- נסה Build מחדש

### רוצה לשנות משהו?
- ערוך את הקובץ
- `npm run dev` לבדיקה מקומית
- העלה שוב ל-Vercel

---

## 📚 מסמכים נוספים

- **VERCEL_DEPLOY.md** - מדריך מפורט לדפלוי
- **DEPLOYMENT.md** - אפשרויות דפלוי נוספות
- **DESIGN_SPECS.md** - מפרט עיצוב מלא
- **GETTING_STARTED.md** - מדריך התחלה

---

## 🚀 תתחיל עכשיו!

```bash
cd /home/user/repo/arli-studio
vercel
```

**או פשוט גרור את `dist/` ל-Vercel! 🎯**

האתר שלך ממתין... בואי נעלה אותו! ✨
