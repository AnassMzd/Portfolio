# 🚀 Guide de Déploiement sur Vercel

## Guide Complet pour Déployer Votre Portfolio sur Vercel

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir:
- ✅ Un compte GitHub (gratuit)
- ✅ Un compte Vercel (gratuit - vous pouvez vous connecter avec GitHub)
- ✅ Git installé sur votre ordinateur
- ✅ Votre portfolio fonctionnel en local

---

## 🎯 Étape 1: Préparer le Projet

### 1.1 Vérifier que tout fonctionne localement

```bash
# Tester votre projet
npm run dev
```

Ouvrez http://localhost:5174 et vérifiez que tout fonctionne correctement.

### 1.2 Créer un fichier `.gitignore` (si pas déjà présent)

Créez un fichier `.gitignore` à la racine du projet avec ce contenu:

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.production
```

---

## 🎯 Étape 2: Créer un Repository GitHub

### 2.1 Créer un nouveau repository sur GitHub

1. Allez sur https://github.com
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Remplissez les informations:
   - **Repository name**: `portfolio` ou `personal-website`
   - **Description**: "My Cybersecurity Portfolio"
   - **Visibility**: Public (recommandé pour Vercel gratuit)
   - **Ne cochez PAS** "Initialize this repository with a README"
5. Cliquez sur **"Create repository"**

### 2.2 Initialiser Git dans votre projet (si pas déjà fait)

Ouvrez un terminal dans le dossier de votre projet:

```bash
# Aller dans le dossier du projet
cd c:\Users\hp\Portfolio\CascadeProjects\personal-website

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit - Cybersecurity Portfolio"
```

### 2.3 Connecter votre projet au repository GitHub

Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub:

```bash
# Ajouter le remote
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Pousser le code sur GitHub
git push -u origin main
```

**Note**: GitHub vous demandera peut-être de vous authentifier. Utilisez un Personal Access Token si nécessaire.

---

## 🎯 Étape 3: Déployer sur Vercel

### 3.1 Créer un compte Vercel

1. Allez sur https://vercel.com
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub

### 3.2 Importer votre projet

1. Une fois connecté, cliquez sur **"Add New..."**
2. Sélectionnez **"Project"**
3. Vous verrez la liste de vos repositories GitHub
4. Trouvez votre repository `portfolio` et cliquez sur **"Import"**

### 3.3 Configurer le projet

Vercel détectera automatiquement que c'est un projet Vite. Vérifiez les paramètres:

**Framework Preset**: Vite
**Root Directory**: `./` (laisser par défaut)
**Build Command**: `npm run build` (détecté automatiquement)
**Output Directory**: `dist` (détecté automatiquement)
**Install Command**: `npm install` (détecté automatiquement)

### 3.4 Variables d'environnement (optionnel)

Si vous avez des variables d'environnement, ajoutez-les ici. Sinon, passez cette étape.

### 3.5 Déployer!

1. Cliquez sur **"Deploy"**
2. Attendez quelques minutes (généralement 1-2 minutes)
3. 🎉 Votre site est en ligne!

---

## 🌐 Étape 4: Accéder à Votre Site

### 4.1 URL de votre site

Vercel vous donnera une URL comme:
```
https://portfolio-username.vercel.app
```

### 4.2 Configurer un domaine personnalisé (optionnel)

Si vous avez un domaine personnalisé:

1. Dans votre projet Vercel, allez dans **"Settings"**
2. Cliquez sur **"Domains"**
3. Ajoutez votre domaine personnalisé
4. Suivez les instructions pour configurer les DNS

---

## 🔄 Étape 5: Mises à Jour Automatiques

### Comment ça marche?

Chaque fois que vous poussez du code sur GitHub, Vercel redéploiera automatiquement votre site!

### Pour mettre à jour votre site:

```bash
# 1. Faire vos modifications dans le code

# 2. Ajouter les fichiers modifiés
git add .

# 3. Faire un commit
git commit -m "Description de vos modifications"

# 4. Pousser sur GitHub
git push

# 5. Vercel redéploiera automatiquement! ✨
```

---

## 🎨 Étape 6: Personnalisation Vercel

### 6.1 Renommer votre projet

1. Allez dans **"Settings"** de votre projet
2. Dans **"General"**, changez le **"Project Name"**
3. Votre URL deviendra: `https://nouveau-nom.vercel.app`

### 6.2 Configurer les redirections (optionnel)

Pour que toutes les routes fonctionnent correctement avec React Router (si vous l'utilisez):

Créez un fichier `vercel.json` à la racine:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📊 Commandes Git Utiles

### Vérifier le statut
```bash
git status
```

### Voir l'historique des commits
```bash
git log --oneline
```

### Annuler des modifications non commitées
```bash
git checkout -- .
```

### Créer une nouvelle branche
```bash
git checkout -b nouvelle-branche
```

### Revenir à la branche main
```bash
git checkout main
```

---

## 🐛 Résolution de Problèmes

### Problème 1: Build échoue sur Vercel

**Solution**: Vérifiez les logs de build dans Vercel. Souvent c'est:
- Des dépendances manquantes
- Des erreurs TypeScript/ESLint
- Des chemins de fichiers incorrects

**Fix rapide**: Assurez-vous que `npm run build` fonctionne en local.

### Problème 2: Page blanche après déploiement

**Solution**: 
- Vérifiez la console du navigateur (F12)
- Assurez-vous que tous les chemins sont relatifs
- Vérifiez que `dist` contient bien les fichiers

### Problème 3: Git push refusé

**Solution**:
```bash
# Forcer le push (attention, utilisez avec précaution)
git push -f origin main
```

### Problème 4: Authentification GitHub

**Solution**: Créez un Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Sélectionnez les scopes: `repo`, `workflow`
4. Utilisez le token comme mot de passe

---

## ✅ Checklist de Déploiement

Avant de déployer, vérifiez:

- [ ] Le projet fonctionne en local (`npm run dev`)
- [ ] Le build fonctionne (`npm run build`)
- [ ] Tous les fichiers sont committés
- [ ] Le `.gitignore` est configuré
- [ ] Le repository GitHub est créé
- [ ] Le code est poussé sur GitHub
- [ ] Le projet est importé dans Vercel
- [ ] Le déploiement est réussi
- [ ] Le site est accessible via l'URL Vercel
- [ ] Toutes les sections fonctionnent
- [ ] Les liens externes fonctionnent
- [ ] Le site est responsive (mobile, tablet, desktop)

---

## 🎯 Commandes Rapides - Résumé

```bash
# 1. Initialiser Git (première fois seulement)
git init
git add .
git commit -m "Initial commit"

# 2. Connecter à GitHub (première fois seulement)
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git branch -M main
git push -u origin main

# 3. Mises à jour futures
git add .
git commit -m "Votre message"
git push

# 4. Vercel redéploie automatiquement!
```

---

## 📱 Partager Votre Portfolio

Une fois déployé, partagez votre portfolio:

- 📧 **Email**: Ajoutez le lien dans votre signature
- 💼 **LinkedIn**: Mettez le lien dans votre profil
- 📄 **CV**: Ajoutez l'URL de votre portfolio
- 🐦 **Réseaux sociaux**: Partagez votre travail!

**Votre URL**: `https://votre-portfolio.vercel.app`

---

## 🎉 Félicitations!

Votre portfolio cybersécurité est maintenant en ligne et accessible au monde entier! 🚀

### Prochaines étapes:
1. ✅ Testez votre site sur différents appareils
2. ✅ Partagez-le avec vos contacts
3. ✅ Ajoutez-le à votre CV et LinkedIn
4. ✅ Continuez à l'améliorer et à le mettre à jour

---

## 📚 Ressources Utiles

- **Vercel Documentation**: https://vercel.com/docs
- **GitHub Guides**: https://guides.github.com
- **Vite Documentation**: https://vitejs.dev
- **Git Documentation**: https://git-scm.com/doc

---

**Créé**: 15 Octobre 2025  
**Statut**: ✅ Guide Complet  
**Plateforme**: Vercel (Gratuit)
