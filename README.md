# 🚀 Portfolio de Saif Eddine RIDENE - Ingénieur Logiciel & Cloud/DevOps

Ce portfolio moderne et performant est développé avec **React 18**, **Vite** et **Tailwind CSS**. Il met en valeur :
- 🏆 **Major de Promotion** en Licence Électromécanique (2020) et Diplôme d'Ingénieur en Génie Logiciel (**TEK-UP**, 2026).
- 🦊 **Responsable Repositories & Tech Lead GitLab** pour 2 équipes et 2 projets PFE :
  - **DocuCheck Backend** ([GitLab](https://gitlab.com/RIDENESAIF/docuchek-backend)) : Microservices Spring Boot, Angular, Camunda BPMN, OCR Tesseract, Docker, CI/CD GitLab.
  - **PMA Backend** ([GitLab](https://gitlab.com/RIDENESAIF/pma-backend)) : Plateforme de Maintenance Aéronautique, Spring Boot, architecture distribuée.
- 🐙 Projets Open Source & Académiques sur **GitHub** ([github.com/saifridenetek](https://github.com/saifridenetek)).
- 📄 Téléchargement direct des CVs (Français et Anglais) et contact direct par e-mail / LinkedIn / Téléphone.

---

## 🛠️ Lancer le projet en local

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement** :
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173`.

3. **Compiler pour la production** :
   ```bash
   npm run build
   ```

---

## 🌐 Déploiement sur Vercel (En 2 minutes)

### Étape 1 : Créer un nouveau dépôt sur GitHub
1. Rendez-vous sur [github.com/new](https://github.com/new).
2. Nommez le repository : `portfolio` (ou `saif-portfolio`).
3. Laissez-le en **Public** et ne cochez PAS "Add README".
4. Cliquez sur **Create repository**.

### Étape 2 : Pousser le code depuis votre machine
Ouvrez votre terminal dans ce dossier `portfolio` et lancez :
```bash
git init
git add .
git commit -m "feat: portfolio initial commit"
git branch -M main
git remote add origin https://github.com/saifridenetek/portfolio.git
git push -u origin main
```

### Étape 3 : Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub.
2. Cliquez sur **"Add New..."** > **"Project"**.
3. Sélectionnez le dépôt `portfolio` et cliquez sur **Import**.
4. Vercel détecte automatiquement :
   - **Framework Preset** : `Vite`
   - **Build Command** : `vite build`
   - **Output Directory** : `dist`
5. Cliquez sur **Deploy** !
6. En moins d'une minute, votre portfolio est en ligne avec un lien mondial HTTPS (ex: `https://saif-ridene.vercel.app`).
