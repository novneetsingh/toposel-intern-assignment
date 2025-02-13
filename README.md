# 🛠 User Management

The **User Management** is a backend web application built with **Express.js** and **MongoDB**. It provides user registration, authentication, and search functionality with JWT-based authentication.

---

## 🎥 **Project Deployed Link**

https://toposel-intern-assignment.onrender.com

## 🎥 **Project Walkthrough**

https://www.loom.com/share/d82fe1a0aad8479d9dba5058287aa387?sid=9212c6c3-4d53-4311-9826-854912489d82

## 🚀 Features

### 🔹 **User Authentication**

- **Register users** with username, password, full name, gender, date of birth, and country.
- **Secure authentication** using **JWT tokens**.
- **Login users** with email or username.

### 🔹 **User Management**

- **Register new users** and store them securely in MongoDB.
- **Retrieve user details** by searching with username or email.
- **Ensure data validation** at the server side.
- **Proper API structuring and naming conventions**.

### 🔹 **Security Measures**

- **Password hashing** using bcrypt.
- **JWT-based authentication** for secure login sessions.
- **Input validation** to prevent invalid data submission.

---

## 🛠 **Technologies Used**

| Technology         | Description           |
| ------------------ | --------------------- |
| **Backend**        | Express.js (Node.js)  |
| **Database**       | MongoDB (Mongoose)    |
| **Authentication** | JSON Web Tokens (JWT) |

---

## 📂 **Project Structure**

```
user-management-api/
├── models/        # Mongoose models
├── routes/        # API routes
├── controllers/   # Business logic
├── middleware/    # Authentication middleware
├── config/        # Configuration settings
├── indexjs      # Entry point
├── package.json   # Dependencies
├── README.md      # Project documentation
└── .gitignore     # Ignored files
```

---

## 🎯 **API Endpoints**

### 🔑 **Authentication**

#### ✅ **User Registration**

- **Endpoint:** `POST /user/signup`
- **Request Body:**
  ```json
  {
    "username": "novneet123",
    "password": "asd",
    "fullname": "novneet singh",
    "gender": "male",
    "dateOfBirth": "28-03-2003",
    "country": "india"
  }
  ```

#### ✅ **User Login**

- **Endpoint:** `POST /user/login`
- **Request Body:**
  ```json
  {
    "username": "novneet123",
    "password": "asd"
  }
  ```

#### ✅ **Search User**

- **Endpoint:** POST` /user/search`
- **Request Body:**
  ```json
  {
    "username": "novneet123"
  }
  ```

## 📌 **Setup & Installation**

1. **Clone the repository**

   ```sh
   git clone <repo-url>
   cd user-management
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables** (`.env` file)

   ```
   DATABASE_URL=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   ```

4. **Run the server**

   ```sh
   npm start
   ```

---
