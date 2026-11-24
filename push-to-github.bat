@echo off
git init
git branch -M main
git add .gitignore index.html package.json package-lock.json vite.config.js
git commit -m "Project setup with Vite and React"
git add src/data
git commit -m "Add product data"
git add src/components
git commit -m "Add ProductCard component with props and conditional rendering"
git add .
git commit -m "Add callback, cart message, and styling"
git remote add origin https://github.com/Sauce2882/laboratory-3-.git
git push -u origin main
pause
