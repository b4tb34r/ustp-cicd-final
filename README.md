# USTP CICD Final Tetrisv

[![build](https://github.com/b4tb34r/ustp-cicd-final/actions/workflows/build.yml/badge.svg)](https://github.com/b4tb34r/ustp-cicd-final/actions/workflows/build.yml) 
[![Dependabot Updates](https://github.com/b4tb34r/ustp-cicd-final/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/b4tb34r/ustp-cicd-final/actions/workflows/dependabot/dependabot-updates) 
[![Publish to GitHub Pages](https://github.com/b4tb34r/ustp-cicd-final/actions/workflows/publish.yml/badge.svg)](https://github.com/b4tb34r/ustp-cicd-final/actions/workflows/publish.yml) 
[![Release on tag (use last CI artifacts)](https://github.com/b4tb34r/ustp-cicd-final/actions/workflows/release-on-tag.yml/badge.svg)](https://github.com/b4tb34r/ustp-cicd-final/actions/workflows/release-on-tag.yml)
![coverage](https://img.shields.io/badge/dynamic/json?url=https://b4tb34r.github.io/ustp-cicd-final/coverage/coverage-summary.json&query=$.total.lines.pct&suffix=%25&label=coverage)

A simple Tetris web application used to demonstrate CI/CD best practices with GitHub Actions.

## 🌐 Live Demo

👉 [Tetris](https://b4tb34r.github.io/ustp-cicd-final/)

## 🛠️ Developer Instructions

### Prerequisites
- Node.js 20.x
- npm

### Install dependencies
npm install
# (Optional für saubere, reproduzierbare Installation wie im CI:)
# npm ci

### Build (Production)
npm run build
# ➜ erzeugt das Produktions-Build im Ordner `dist/`

### Run tests (CI mode)
# lokaler Aufruf analog zum CI
npm run test:ci
# optional mit explizitem CI-Flag:
# CI=true npm run test:ci

### (Optional) Dev-Server für lokale Entwicklung
npm run dev
# ➜ startet den Vite-Dev-Server (Port siehe Terminalausgabe)
