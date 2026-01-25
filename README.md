# USTP CICD Final Tetris

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
