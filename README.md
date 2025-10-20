# 🚀 Node.js Web App with CI/CD using Docker and GitHub Actions

## 🧩 Project Overview
This project demonstrates a simple **Node.js + Express** web application integrated with a **CI/CD pipeline** using **GitHub Actions** and **Docker**.  
Whenever code is pushed to the `main` branch, GitHub Actions automatically:
1. Builds and tests the Node.js app
2. Creates a Docker image
3. Pushes the image to Docker Hub

---

## 🛠️ Tools Used
- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **Docker** – Containerization
- **GitHub Actions** – CI/CD automation
- **GitHub Secrets** – For secure credential management

---

## ⚙️ Setup Instructions

### 1️⃣ Run locally
```bash
npm install
npm run dev

### 2️⃣ Docker build and run locally
docker build -t node-sample-app .
docker run -p 3000:3000 node-sample-app

### 📷 3️⃣ Screenshots
- `screenshots/workflow_run.png` → a screenshot from your GitHub Actions “workflow run” page  
- `screenshots/dockerhub_image.png` → screenshot of your image on Docker Hub  

---

### ✅ Final Checklist Before Submission
| Item | Status |
|------|--------|
| Node.js app runs locally | ✅ |
| Dockerfile created | ✅ |
| `.github/workflows/ci-cd.yml` added | ✅ |
| Repo initialized with Git | ✅ |
| GitHub secrets (username + token) | 🔜 (to be added once Docker Hub works) |
| README.md included | ✅ |
| Screenshots included | ✅ |
