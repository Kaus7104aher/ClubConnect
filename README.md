# 🎓 ClubConnect – College Club & Event Management System

**ClubConnect** is a full-stack web application that simplifies how college students interact with clubs and events. Built with the **MERN stack (MongoDB, Express, React, Node.js)**, it enables students to join clubs, register for events, and view updates — while club admins can manage club posts, events, and registrations. 🔗

---

## 🚀 Features

### 👤 Authentication & User Management
- Secure **Sign Up / Login** using JWT
- Email verification flow
- Role-based access: **Super Admin**, **Club Admin**, and **Student**

### 🏢 Club Management
- Create and manage college clubs
- Club Admins can:
  - Post announcements for their club
  - View members
  - Accept new members
- Students can:
  - Browse all clubs
  - Join/follow clubs
  - View club-specific posts

### 📅 Event Management
- Create, edit, and delete events (Club Admins only)
- Events linked to a specific club
- Set **registration limits** for events

### 📝 Event Registration
- Students can register for events with:
  - Name
  - Email
  - Department (e.g., Computer, ENTC, IT, ECE, AIDS)
  - Roll number & division
- Club Admins can view a list of registered users
- Auto-disable registration after limit is reached

### 📢 Club Posts
- Club Admins can create posts (text + image)
- All users can view, like, and comment on posts
- Like functionality stored per user

### 📬 Email Notifications (Planned / Optional)
- Registered users receive an email **one day before** the event

---

## 🧱 Tech Stack

| Frontend     | Backend      | Database | Auth        | File Uploads |
|--------------|--------------|----------|-------------|---------------|
| React (Vite) | Node.js + Express | MongoDB   | JWT + Middleware | Cloudinary       |

- State management using React Context API
- Protected routes for different roles
- RESTful API architecture
- Responsive UI (Tailwind or custom CSS)
---

## 📂 Folder Structure (Server)

server/
├── config/
│ └── db.js
├── controllers/
│ ├── authController.js
│ ├── clubController.js
│ ├── eventController.js
│ └── postController.js
├── middleware/
│ ├── authMiddleware.js
│ └── checkAdmin.js
├── models/
│ ├── User.js
│ ├── Club.js
│ ├── Post.js
│ └── Event.js
├── routes/
│ ├── authRoutes.js
│ ├── clubRoutes.js
│ ├── postRoutes.js
│ └── eventRoutes.js
├── .env
└── server.js


---

## 🌐 Frontend Pages & Components

client/
├── src/
│ ├── api/
│ │ └── axiosInstance.js
│ ├── components/
│ │ ├── EventForm.jsx
│ │ └── ...
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── hooks/
│ │ └── useFetchEvents.js
│ ├── pages/
│ │ ├── Events.jsx
│ │ ├── MyEvents.jsx
│ │ ├── RegisteredUsers.jsx
│ │ └── ...
│ └── App.jsx

