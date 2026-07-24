

# 🚗 Auto UELA – Car Sales Website

Auto UELA is a modern, responsive car sales website built using **HTML, CSS, and JavaScript**, showcasing luxury cars and upcoming motorcycles. The project is designed as a practice and portfolio piece for web development skills.





---

## 📸 Project Overview

This website includes:
- Luxury car listings with specifications and pricing
- Responsive navigation menu
- Search functionality UI
- About section with company info
- “Coming soon” motorcycle section
- Interactive buttons and UI animations

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox + Responsive Design)
- JavaScript (DOM manipulation)
- Boxicons (icons library)

---

## 📁 Project Structure
.
├── index.html
├── style.css
├── main.js
├── Dockerfile 
└── nginx
├── images/
└── README.md
└──Continuous Deployment
└──Cloud hosting (GitHub Pages)



---

## ✨ Features

- 📱 Fully responsive design
- 🚘 Car catalog with details (engine, speed, model, price)
- 🔍 Search bar UI toggle
- 🧭 Mobile-friendly navigation menu
- 🏍️ Motorcycle section (coming soon)
- 🎯 Interactive "Buy Now" buttons
- 🐳 Docker support for deployment

---

## 🐳 Docker Deployment

This project can be deployed using Docker with Nginx:

### Build image
```bash
docker build -t auto-uela .

Run container
docker run -d -p 80:80 auto-uela

Then open:

http://localhost
```
📦 Dockerfile
```bash


FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```
### GitHub Actions Features

- Automatic deployment on every push
- Static website hosting with GitHub Pages
- Continuous Deployment (CD) pipeline
- No manual upload required

### Deployment Workflow

The workflow:
1. Checks out the repository code
2. Configures GitHub Pages
3. Uploads website files
4. Deploys the website automatically
