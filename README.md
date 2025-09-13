# SilverConnect

SilverConnect is a social networking app I built with **Node.js/Express**, **React**, and **MongoDB**.  
The goal of the project is simple: give users a place to share stories, send messages, and organize events in one platform.  

---

## ✨ What it does
- Users can **sign up and log in** securely (JWT auth).  
- Post and view short **stories**.  
- Send and receive **messages**.  
- Create and browse **community events**.  
- REST API for handling users, stories, messages, and events.  

---

## 🛠 Tech Used
- **Frontend**: React (Vite) + TailwindCSS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (Mongoose)  
- **Deployment**: Render (server) + Vercel/Render (frontend)  

---

## ⚡ Getting Started

### Clone the repo
```bash
git clone https://github.com/NOUAIM98/Silverconnect.git
cd Silverconnect
Backend
bash
Copy code
cd server
npm install
Create a .env file inside server/:

env
Copy code
MONGO_URI=mongodb://localhost:27017/silverconnect
JWT_SECRET=your_secret_key
PORT=5000
Run it:

bash
Copy code
npm run dev
Backend will be up at 👉 http://localhost:5000

Frontend
bash
Copy code
cd ../client
npm install
npm run dev
Frontend will be up at 👉 http://localhost:5173

📂 Project Structure
pgsql
Copy code
server/               → backend (Express + MongoDB)
  ├── models/         → User, Event, Message, Story
  ├── routes/         → API routes
  ├── server.js       → main entry
  └── seed.js         → seeding script for DB

client/               → frontend (React)
  └── src/            → pages, components, assets
📡 API Overview
Users
POST /api/users/register → Register

POST /api/users/login → Login

Events
GET /api/events → Get events

POST /api/events → Create event

Messages
GET /api/messages → Get messages

POST /api/messages → Send a message

Stories
GET /api/stories → Get stories

POST /api/stories → Post story

🚀 Deployment
Backend runs on Render

Frontend can be deployed on Vercel or Render (static hosting)

Make sure to add environment variables (MONGO_URI, JWT_SECRET, PORT) in the host dashboard
