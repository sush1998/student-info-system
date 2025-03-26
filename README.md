# 🧾 Student Information System 

This is a simple web application built with **Node.js** that demonstrates dynamic webpage interaction using **AJAX**, styled interfaces with **CSS**, and backend integration. It allows users to retrieve student records without refreshing the entire page.

This project is containerized with **Docker**, making it easy to run anywhere.

---

## 📁 Features

- Node.js local web server (no frameworks)
- AJAX-based data retrieval without page reload
- Clean and responsive HTML/CSS interface
- Students data served as JSON or HTML (based on config)
- Easily deployable using Docker

---

## 🚀 How to Run Locally

### 🛠 Prerequisites

- [Node.js](https://nodejs.org/) installed
- Or [Docker Desktop](https://www.docker.com/products/docker-desktop) if running in a container

### ▶️ Option 1: Run Using Node.js

```bash
# Install dependencies (if package.json is available)
npm install

# Run the server
node server.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

### 🐳 Option 2: Run Using Docker

```bash
# Build Docker image
docker build -t student-info-app .

# Run container (map port 3000)
docker run --rm -p 3000:3000 student-info-app
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Application Preview

When you click the "Retrieve Student Records" button:
- Button background changes
- A heading appears
- A table is dynamically populated with student data using AJAX

---

## 📦 Project Structure

```
├── server.js          # Node.js HTTP server
├── index.html         # Main UI page
├── students.html      # Static version of student data (served on request)
├── Dockerfile         # Docker container instructions
├── .gitignore
└── README.md          # You're here!
```

---

## 📚 Technologies Used

- Node.js (http module)
- HTML, CSS, JavaScript (vanilla)
- AJAX (XMLHttpRequest)
- Docker (for containerization)
- Wireshark (for traffic analysis)

---

## ✍️ Author

- **Name:** Sushant Mahalle
- **Drexel ID:** scm364
- **GitHub:** [@sush1998](https://github.com/sush1998)

---

## 📖 Assignment Context

This project was developed as part of **INFO 600 - Web Systems & Architecture** coursework. It showcases understanding of HTTP servers, AJAX, dynamic DOM manipulation, and containerized deployment using Docker.

---

## ✅ Future Improvements

- Add ability to add/edit student records via form
- Store data in a real database (e.g., MongoDB, SQLite)
- Use a modern frontend framework (React, Vue)
- Add RESTful API endpoints

---

## 📄 License

This project is for academic use only.
