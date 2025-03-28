import { createContext, useContext, useState, useEffect } from "react";

// Create Auth Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Load user session from localStorage on initial render
    try {
      return JSON.parse(localStorage.getItem("loggedInUser")) || null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  // Ensure user session persists across tabs and browser restarts
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setUser(storedUser);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Login function (Save user session)
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  // Logout function (Only removes session)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  // Delete Account function (Removes user from storage)
  const deleteAccount = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.filter((u) => u.email !== user.email);
    localStorage.setItem("users", JSON.stringify(users));
    logout(); // Log the user out after deleting
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
