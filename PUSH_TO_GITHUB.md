# 🚀 איך לדחוף את הפרויקט לגיטהאב

הפרויקט מוכן לחלוטין! יש לך 3 אופציות:

---

## ✅ אופציה 1: GitHub Desktop (הכי פשוט)

1. הורד GitHub Desktop: https://desktop.github.com/
2. פתח את התיקייה: `/home/user/repo/arli-studio`
3. לחץ "Publish repository"
4. בחר: `Business-by-aRLi/aRLi-3d-website-test`
5. לחץ Push

---

## ✅ אופציה 2: טרמינל עם Personal Access Token

### שלב 1: צור Token
1. לך ל: https://github.com/settings/tokens/new
2. שם: "aRLi Studio Deploy"
3. Expiration: 90 days
4. בחר: ✅ `repo` (כל האפשרויות)
5. לחץ "Generate token"
6. **העתק את ה-Token** (תראה אותו פעם אחת בלבד!)

### שלב 2: הרץ בטרמינל
```bash
cd /home/user/repo/arli-studio

# החלף YOUR_TOKEN ב-token שהעתקת
git remote set-url origin https://YOUR_TOKEN@github.com/Business-by-aRLi/aRLi-3d-website-test.git

# Push!
git push -u origin main
```

---

## ✅ אופציה 3: GitHub CLI (מומלץ למתקדמים)

```bash
# התקנה (Mac)
brew install gh

# התקנה (Windows)
winget install --id GitHub.cli

# התקנה (Linux)
sudo apt install gh

# התחברות
gh auth login

# Push
cd /home/user/repo/arli-studio
git push -u origin main
```

---

## 📦 מה כבר מוכן?

✅ Git repository initialized
✅ All files committed (14 files, 4,955 lines)
✅ Remote configured: Business-by-aRLi/aRLi-3d-website-test
✅ Branch: main
✅ Ready to push!

---

## 🎯 אחרי ה-Push

האתר שלך יהיה ב:
https://github.com/Business-by-aRLi/aRLi-3d-website-test

ותוכל לפרוס אותו ב:
- **Vercel** (מומלץ): https://vercel.com/new
- **Netlify**: https://app.netlify.com/
- **GitHub Pages**

---

## 💡 צריך עזרה?

אם זה לא עובד, תן לי לדעת איזו שגיאה אתה רואה!
