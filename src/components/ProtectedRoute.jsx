import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = JSON.parse(localStorage.getItem("loggedInUser"));

  return isAuthenticated ? children : <Navigate to="/login" />;
}
