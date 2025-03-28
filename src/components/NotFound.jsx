import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-300 via-blue-500 to-red-300 text-white">
      <h1 className="text-7xl font-extrabold drop-shadow-lg animate-pulse">404</h1>
      <p className="text-2xl font-semibold mt-2">Oops! Page Not Found</p>
      
      {/* ✨ Motivational Quote */}
      <p className="text-lg italic mt-4 max-w-md text-center">
        "Sometimes the wrong path leads to the best discoveries. Keep exploring!" 🌟
      </p>

      <Link
        to="/"
        className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105"
      >
        🔄 Go to Login Page
      </Link>
    </div>
  );
}
