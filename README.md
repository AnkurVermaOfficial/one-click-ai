# 🚀 One Click AI

**One Click AI** is a fully frontend-based web application built using **React.js**, **HTML**, **CSS**, and **JavaScript**. It integrates two powerful AI features:  
- 🖼️ **AI Image Generator** using the Hugging Face API  
- 💬 **Ask AI (Q&A)** using the Google Gemini API  

This project operates without a backend or database, relying solely on client-side logic and external APIs for all its functionality.

---

## 📌 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Use Case Diagram](#use-case-diagram)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Development Environment](#development-environment)
- [Performance & Limitations](#performance--limitations)
- [Future Enhancements](#future-enhancements)
- [References](#references)

---

## ✅ Features

- AI-based image generation from user prompts
- Natural language question-answering module
- Fast and responsive UI built with React
- Fully functional without a backend
- Real-time API interaction and dynamic output rendering

---

## 🧰 Tech Stack

- **Frontend:** React.js, HTML, CSS, JavaScript
- **APIs:** Hugging Face (Image Generation), Google Gemini (Q&A)
- **IDE:** Visual Studio Code
- **Design Tools:** Draw.io, Visily, ChatGPT

---

## 🧱 System Architecture

The system is designed as a single-page application. All processing is done in-browser using API calls. The structure includes:
- User Interface (React components)
- API Interaction Layer (Fetch to external services)
- Output Renderer (Displays text/image responses)

![System Architecture](./assets/system-architecture.png)

---

## 🎯 Use Case Diagram

This diagram outlines how users interact with the AI services.

![Use Case Diagram](./assets/use-case-diagram.png)

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/one-click-ai.git
cd one-click-ai


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Add your hugging face API KEY to the generate.js file.
Add your Gemini API KEY to the askai.js file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


