🚀 Assignment 5 - React Routing App

A simple React application demonstrating routing, navigation, and protected routes using React Router DOM.

────────────────────────────

📌 Overview

This project includes multiple pages and navigation using React Router:
- Home Page
- About Page
- Contact Page
- Dashboard Page (Protected)

Users can navigate between pages using a navbar. The dashboard is accessible only if the user is authenticated.

────────────────────────────

✨ Features

📍 React Router Setup
- BrowserRouter
- Routes & Route
- Nested routing structure

📍 Pages
- Home
- About
- Contact
- Dashboard

📍 Navigation
- Responsive Navbar
- React Router Links

📍 Protected Route (Bonus)
- Dashboard is protected
- Redirects to Home if not authenticated

────────────────────────────

🧩 Components

- Navbar
- ProtectedRoute

────────────────────────────

📁 Pages

- Home.jsx
- About.jsx
- Contact.jsx
- Dashboard.jsx

────────────────────────────

🛠️ Tech Stack

- React.js
- React Router DOM
- Bootstrap 5

────────────────────────────

📂 Project Structure

src/
 ├── components/
 │    ├── Navbar.jsx
 │    └── ProtectedRoute.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── About.jsx
 │    ├── Contact.jsx
 │    └── Dashboard.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css

────────────────────────────

⚙️ How to Run

1. Install dependencies:
   npm install

2. Start project:
   npm run dev

────────────────────────────

🔐 Protected Route Logic

Dashboard is wrapped inside ProtectedRoute:

If user is NOT logged in:
→ Redirect to "/"

If user IS logged in:
→ Show Dashboard

────────────────────────────

👨‍💻 Author

Karan Choudhary

────────────────────────────

📄 License

This project is for learning and assignment purposes only.
