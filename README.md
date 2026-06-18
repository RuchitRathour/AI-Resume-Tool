# AI Resume Tool

An AI-powered Resume Generator built using Java, Spring Boot, Spring AI, React, and REST APIs. It helps users generate professional resumes quickly with AI assistance.

##  Live Demo

🔗 https://ai-resume-ruchit.netlify.app

##  Features

* AI-powered resume generation
* Responsive and user-friendly UI
* REST API integration
* React frontend with Vite
* Spring Boot backend
* Download professional resumes

##  Tech Stack

### Backend

* Java
* Spring Boot
* Spring AI
* Maven

### Frontend

* React
* Vite
* Tailwind CSS
  
🏗 Architecture
                +--------------------+
                |     React Frontend |
                +----------+---------+
                           |
                           | HTTP Requests
                           ▼
                +--------------------+
                | Spring Boot Backend |
                +----------+---------+
                           |
                           | Spring AI
                           ▼
                +--------------------+
                |     AI Model/API    |
                +--------------------+
📂 Project Structure
AI-Resume-Generator
│
├── resume_frontend
│     ├── src
│     ├── public
│     └── package.json
│
└── resume-ai-backend
      ├── src/main/java
      ├── src/main/resources
      └── pom.xml

##  Installation

### Backend

```bash
cd resume-ai-backend
mvn spring-boot:run
```

### Frontend

```bash
cd resume_frontend
npm install
npm run dev
```

##  Author

**Ruchit Kumar**

GitHub: https://github.com/RuchitRathour

Live Demo: https://ai-resume-ruchit.netlify.app

