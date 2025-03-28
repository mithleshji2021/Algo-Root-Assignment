import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className="md:hidden p-3 text-white  rounded fixed top-1 left-4  z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-800 text-white p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64`}
      >
        {/* Current Page Title */}
        <h2 className="text-xl font-semibold mb-6 text-center  py-2 rounded">
          Current Page
        </h2>


        {/* Sidebar Links */}
        <ul>
          
          <li>
            <Link
              to="/dashboard"
              className={`block p-3 rounded ${
                location.pathname === "/dashboard" ? "bg-blue-600 font-bold" : "hover:bg-gray-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
