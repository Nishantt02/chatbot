# 🤖 Chatbot Application

A full-stack **AI-powered Chatbot Application** built with a modern tech stack. This project provides secure authentication, real-time chat functionality, and a clean, responsive UI. It is designed to be **production-ready**, easy to run locally, and simple to deploy.

---

## ✨ Features

* 🔐 **Authentication** (Register & Login)
* 🧠 **AI Chatbot Integration** (Gemini / LLM / Dummy bot supported)
* 💬 **Real-time Chat Interface**
* ⏳ Loading indicators & auto-scroll
* 🌙 Light / Dark mode UI
* 📱 Fully responsive design
* 🧩 Context-based global state management
* 🚀 Production-ready project structure

---

## 🛠️ Tech Stack

### Frontend

* **React.js** (Vite)
* **React Router DOM**
* **Context API** for state management
* **Axios** for API calls
* **Tailwind CSS** for styling

### Backend

* **Node.js** with **Express.js** *(or FastAPI if applicable)*
* **JWT Authentication**
* **REST APIs**

### AI Integration

* **Gemini API / LLM API**

### Database

* **MongoDB** (User & Chat data)

---

## 📂 Project Structure

```
chatbot-app/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/chatbot-app.git
cd chatbot-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_api_key
```

Run backend server:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔁 API Endpoints (Sample)

### Authentication

* `POST /api/auth/register` – Register user
* `POST /api/auth/login` – Login user

### Chat

* `POST /api/chat` – Send message to chatbot
* `GET /api/chat/:chatId` – Fetch chat history

---

## 🧪 Demo Flow

1. User registers or logs in
2. Token is stored securely
3. User types a message
4. Message is sent to backend
5. Backend forwards it to AI API
6. AI response is displayed in chat UI

---

## 🚀 Deployment

* **Frontend**: Render / Vercel / Netlify
* **Backend**: Render / Railway / AWS
* Ensure correct API base URLs in production

---

## 🔒 Security Notes

* Do NOT expose API keys in frontend code
* Always keep secrets on the backend
* Use HTTPS in production

---

## 📌 Future Improvements

* Voice input 🎙️
* Chat export 📄
* Conversation history 📜
* Admin analytics dashboard 📊

---

## 👨‍💻 Author

**Nishant Chauhan**
Full Stack Developer (MERN)

---

## 📜 License

This project is licensed under the **MIT License**.

---

⭐ If you like this project, don’t forget to star the repository!
