# Urvann Mini Plant Store

A **minimal full‑stack web application** (Frontend + Backend) built as part of the **Urvann Software Development Intern Assignment**.

---

## 📌 Overview

This project implements a **Mini Plant Store** where:

- Users can browse a catalog of plants.
- Search plants by name or category keyword.
- Filter by category (Indoor, Outdoor, Succulent, etc.).
- Admins can add new plants via a form.
- Data is stored in **MongoDB**, served via **Express API**, and consumed by a **React + Vite + Tailwind** frontend.
- Includes a **seed script** with 50 sample plants.

The app is intentionally **minimal**, responsive, and implements only the required features as per the assignment.

---

## 🚀 Features

### 1. Plant Catalog

- Displays a grid of plants.
- Shows **Plant Name**, **Price**, **Categories**, and **Stock Availability**.

### 2. Search & Filter

- **Search by name** (case‑insensitive).
- **Search by category keyword** (e.g., `home decor`).
- **Filter by category** from a dropdown (Indoor, Outdoor, Succulent, etc.).

### 3. Add Plant (Admin)

- A form to add a new plant with:

  - Name
  - Price
  - Multiple categories
  - Stock Availability

- Includes **validation** before submission.

### 4. Responsive Frontend

- Works on **desktop and mobile**.
- Uses **reusable React components**.
- Displays **loading** and **error** states.

### 5. Database

- MongoDB collection seeded with **50 plants** with realistic names, prices, and categories.

---

## 🛠️ Tech Stack

### Frontend

- [React](https://reactjs.org/) (with Hooks)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### Deployment

- Frontend → **Vercel**
- Backend → **Render/Heroku**
- Database → **MongoDB Atlas**

---

## 📂 Project Structure

### Backend (`/backend`)

```
backend/
│── models/Plant.js        # Mongoose model
│── routes/plant.js  # Express routes
│── index.js              # Express app
├── seed.js                # Script to seed DB with 50 plants
├── package.json
├── .env.example           # Environment variables
```

### Frontend (`/frontend`)

```
frontend/
├── src/
│   ├── components/
│   │   ├── PlantList.Jsx
│   │   ├── Home.Jsx
│   │   ├── Navbar.Jsx
│   │   ├── PlantModal.Jsx
│   │   └── AddPlantForm.Jsx
│   ├── App.jsx                # Main App
│   ├── index.jsx                # Main Css
│   ├── main.jsx               # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── .env.example               # Environment variables
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/ankit13022/urvann-plant-store.git
cd urvann-plant-store
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env   # Add your MongoDB connection string

# Seed DB with 50 plants
npm run seed

# Start backend
npm run start
```

Backend will run at: `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env   # Add backend API URL (e.g. http://localhost:5000)

# Start frontend
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## 🌍 API Endpoints

### Get All Plants

```http
GET /api/plants
```

**Query Params:**

- `search` → search by name or category keyword
- `category` → filter by category

### Add Plant (Admin)

```http
POST /api/plants
Content-Type: application/json

{
  "name": "Money Plant",
  "price": 250,
  "categories": ["Indoor", "Home Decor"],
  "inStock": true
}
```

---

## 📱 Frontend Screens

1. **Plant Catalog** – shows grid of plants
2. **Search & Filter** – case-insensitive search + category filter
3. **Add Plant Form** – form with validation

---

## 🚀 Deployment Guide

1. **Backend**

   - Deploy on Render/Heroku.
   - Add `MONGO_URI` env variable.

2. **Frontend**

   - Deploy on Vercel/Netlify.
   - Add `VITE_API_URL` env variable pointing to backend.

3. **Database**

   - Use MongoDB Atlas free cluster.

---

## ✅ Evaluation Checklist

- [x] Plant Catalog with Name, Price, Categories, Stock
- [x] Search (name + category keyword)
- [x] Filter by category
- [x] Add Plant form with validation
- [x] Responsive frontend (desktop + mobile)
- [x] Loading & error states
- [x] MongoDB with 50 sample plants
- [x] Deployment ready

---

## 👨‍💻 Author

**Ankit**
[GitHub](https://github.com/ankit13022)

---

## 📜 License

This project is for assignment purposes only.
