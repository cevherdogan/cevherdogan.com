#!/bin/bash

set -e

echo "🔄 Starting deployment..."

# Optional: Run npm install if needed
read -p "🧩 Run npm install? (y/n) " install_choice
if [[ "$install_choice" == "y" ]]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Optional: Run formatter
read -p "🎨 Run prettier or eslint before build? (p/e/skip) " lint_choice
if [[ "$lint_choice" == "p" ]]; then
  echo "🎯 Running prettier..."
  npx prettier --write .
elif [[ "$lint_choice" == "e" ]]; then
  echo "🔍 Running eslint..."
  npx eslint . --fix
fi

# Step 1: Build
echo "🛠️ Building the project..."
npm run build

# Step 2: Check Vercel login
if ! vercel whoami &> /dev/null; then
  echo "🔑 Not logged in to Vercel. Logging in..."
  vercel login
else
  echo "✅ Logged in to Vercel as $(vercel whoami)"
fi

# Step 3: Deploy
echo "🚀 Deploying to Vercel (Production)..."
LIVE_URL=$(vercel --prod --confirm)

# Step 4: Git tagging
if git rev-parse --git-dir > /dev/null 2>&1; then
  GIT_TAG="deploy-$(date +%Y%m%d-%H%M%S)"
  git add .
  git commit -m "🚀 Deployment: ${GIT_TAG}" || echo "🔁 Nothing new to commit"
  git tag "${GIT_TAG}"
  git push && git push --tags
  echo "📌 Git tag created: ${GIT_TAG}"
else
  echo "🟡 Git repo not initialized. Skipping Git tagging."
fi

# Step 5: Open site in browser
echo "🌐 Opening deployed site..."
open "$LIVE_URL" || xdg-open "$LIVE_URL"

echo "✅ Deployment complete: $LIVE_URL"


