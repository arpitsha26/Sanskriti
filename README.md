# 🌸 Sanskriti – Backend  

![Node.js](https://img.shields.io/badge/Node.js-16.x-green?logo=node.js)  
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)  
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)  
![License](https://img.shields.io/badge/License-MIT-blue)  
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange)  

> **Sanskriti** is a cultural mobile/web app designed to make **India’s rich heritage accessible, engaging, and interactive** for users across the world.  
> This repository contains the **Node.js + Express backend** that powers APIs for cultural exploration, marketplace, events, AR scans, and AI trip planning.  

---

## 📖 Project Overview  

Sanskriti brings together **monuments, festivals, foods, art, music, dance, and folk stories** in one platform.  

- **Frontend (Android app)** → separate repository  
- **Machine Learning APIs (FastAPI)** → separate repository  
- **Backend (this repo)** → REST APIs built using **Node.js, Express, MongoDB**  

---

## ✨ Features  

- 🕌 **Heritage Explorer** – Discover Indian monuments (filter by district)  
- 🎉 **Festivals & Foods of India** – Explore cultural cuisines & celebrations  
- 🎨 **Arts, Music & Dance** – Access India’s creative heritage  
- 📖 **Sacred Stories** – Folk tales, epics, and myths  
- 🛍️ **Sanskriti Bazar** – Buy traditional handicrafts, paintings, sculptures, jewelry  
- 📅 **Festival Calendar** – API-powered festival & holiday calendar  
- 📌 **Upcoming Events** – Stay updated on cultural happenings  
- 🤝 **Community Hub** – Upload images, like, share, and comment  
- 📷 **AR Scan (Monuments)** – Identify monuments via ML image recognition  
- 💬 **Chatbot** – Conversational guide for culture & travel  
- 🤖 **AI Trip Planner** – Personalized cultural journeys  

---

## 📂 Repository Structure  

```
Sanskriti/
├── .gitignore
├── config/
│   ├── calendarific.js
│   ├── cloudinary.js
│   ├── db.js
│   ├── generateToken.js
│   └── mail.js
├── controllers/
│   ├── Art.controller.js
│   ├── calender.js
│   ├── cart.controller.js
│   ├── Dance.controller.js
│   ├── event.controller.js
│   ├── Festival.controller.js
│   ├── Food.controller.js
│   ├── item.controller.js
│   ├── Monument.controller.js
│   ├── Music.controller.js
│   ├── Post.controller.js
│   ├── predict.js
│   ├── Story.controller.js
│   └── user.controller.js
├── dataset/
│   ├── art.csv
│   ├── dance.csv
│   ├── festivals.csv
│   ├── food.csv
│   ├── foods.csv
│   ├── india_200_monuments.csv
│   ├── music.csv
│   └── story.csv
├── index.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── isAdmin.js
│   ├── multer.js
│   └── validateRequest.js
├── models/
│   ├── art.js
│   ├── cart.js
│   ├── dance.js
│   ├── Festival.js
│   ├── food.js
│   ├── item.js
│   ├── Monument.js
│   ├── music.js
│   ├── post.js
│   ├── story.js
│   └── user.js
├── package-lock.json
├── package.json
├── public/
│   └── .gitkeep
├── routes/
│   ├── art.route.js
│   ├── calender.route.js
│   ├── cart.route.js
│   ├── dance.route.js
│   ├── event.route.js
│   ├── festival.route.js
│   ├── food.route.js
│   ├── item.route.js
│   ├── monument.route.js
│   ├── music.route.js
│   ├── post.route.js
│   ├── predict.route.js
│   ├── story.route.js
│   └── user.route.js
└── validation/
    └── userValidation.js

```


## ⚙️ Tech Stack  

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB + Mongoose  
- **Auth:** JWT (JSON Web Tokens)  
- **Cloud Storage:** Cloudinary  
- **Mailing:** Nodemailer  
- **File Uploads:** Multer  
- **Validation:** Custom & Joi  

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/arpitsha26/Sanskriti.git
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Environment Variables
Create a .env file with:
```bash
MONGODB_URL=your_mongodb_connection_string
PORT=5000

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CALENDARIFIC_API_KEY=your_calendarific_api_key
GOOGLE_CLIENT_ID=your_google_client_id

EMAIL=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```
### 4️⃣ Run the backend server
```bash
npm run dev
```
## 📡 API Endpoints  

Base URL: `http://localhost:8080/`

| Module       | Endpoint             | Description                                |
|--------------|----------------------|--------------------------------------------|
| Monuments    | `/api/monument`      | Explore monuments (filter by district, etc.) |
| Festivals    | `/api/festival`      | Get details of Indian festivals             |
| Foods        | `/api/food`          | Discover traditional foods                  |
| Stories      | `/api/story`         | Access folk tales, epics, and myths         |
| Dance        | `/api/dance`         | Explore Indian classical & folk dances      |
| Art          | `/api/art`           | View traditional paintings & artforms       |
| Music        | `/api/music`         | Access Indian music heritage                |
| Calendar     | `/api/cal`           | Festival & holiday calendar (Calendarific API) |
| Users        | `/api/user`          | User registration, login, profile, auth     |
| Posts        | `/api/post`          | Community hub – upload, like, comment       |
| Predict      | `/api/predict`       | ML-powered monument recognition (AR Scan)   |
| Events       | `/api/event`         | Upcoming cultural events                    |
| Items        | `/api/item`          | Marketplace items (handicrafts, etc.)       |
| Cart         | `/api/cart`          | Shopping cart for Sanskriti Bazar           |

---

---

## 🛠️ Future Enhancements  

- 📑 **Swagger API Docs** – Auto-generated API documentation for easier testing & integration  
- 🧪 **Unit & Integration Tests** – Ensure reliability & maintainability of backend services  
- 🔑 **Role-Based Access Control (RBAC)** – Different roles for `admin`, `vendor`, and `user`  
- 💳 **Payment Gateway Integration** – Enable secure online payments in **Sanskriti Bazar**  
- 🐳 **Docker Containerization** – Simplify deployment & scaling across environments  

---

---

## 📜 License  

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

---

---

## 🤝 Contributing  

Contributions are welcome! 🎉 If you’d like to help improve **Sanskriti Backend**, please follow these steps:  

1. **Fork** the repository  
2. **Create a new branch** (`git checkout -b feature/YourFeatureName`)  
3. **Commit your changes** (`git commit -m "Add some feature"`)  
4. **Push to your branch** (`git push origin feature/YourFeatureName`)  
5. **Open a Pull Request** describing your changes  

### Contribution Guidelines  
- Follow the existing **code style & folder structure**  
- Write **clear commit messages**  
- Add **comments/documentation** where necessary  
- Ensure that all existing tests (if any) pass before submitting a PR  
- Be respectful and collaborative in discussions 🙏  

By contributing, you agree that your contributions will be licensed under the same **MIT License** as the project.  

