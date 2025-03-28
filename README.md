# Responsive User Authentication Dashboard

## 📌 Project Overview
This project is a **fully responsive User Authentication Dashboard** that includes **sorting, searching, and pagination** functionality in tables. It provides a seamless user experience with proper error handling and validation mechanisms.

## 🚀 Features
- **User Authentication** (Login, Signup, Logout)
- **Dashboard with Table**
  - Sorting functionality
  - Searching capability
  - Pagination for better navigation
- **Persistent Login** (User session remains active even after refreshing or switching tabs)
- **Error Handling** (Proper validation messages and error alerts)
- **Responsive Design** (Optimized for all screen sizes)

## 🛠️ Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router
- **Storage:** LocalStorage (for user sessions and data persistence)

## 📂 Project Structure
```
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── DataTable.jsx
│   │   ├── NotFound.jsx
│   │   ├── Sidebar.jsx
│   ├── context
│   │   ├── AuthContext.jsx
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── PageNotFound.jsx
│   ├── App.js
│   ├── index.css
│   ├── main.jsx
├── public
├── package.json
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app will be available at **http://localhost:3000/**.

## ⚡ How It Works
1. **User Authentication:** Users can register and log in with their credentials.
2. **Dashboard:** Displays user information and a table with sorting, searching, and pagination.
3. **Error Handling:** Proper validation ensures a smooth experience without crashes.


## 🤝 Contributing
Feel free to fork this repository and submit pull requests! 🚀


