import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import logo from "../public/algoRoot logo.png";

export default function Navbar() {
    const { user, logout, deleteAccount } = useAuth();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Function to handle clicks outside the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle logout
    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    // Handle delete account
    const handleDeleteAccount = () => {
        deleteAccount();
        alert("Account deleted successfully!");
        navigate("/signup");
    };

    return (
        <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-3 w-full shadow-lg">
            {/* Logo */}
            <img src={logo} alt="Logo"  width={40} className="ml-8 md:ml-0"/>
            

            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
                {/* User Icon */}
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <FaUserCircle className="text-3xl" />
                    <span className="hidden sm:inline">{user?.name}</span>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md p-2">
                        <p className="px-3 py-1 font-semibold">{user?.name}</p>
                        <p className="px-3 py-1 text-sm text-gray-600">{user?.email}</p>
                        <hr className="my-2" />
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-3 py-2 hover:bg-red-500 hover:text-white rounded"
                        >
                            Logout
                        </button>
                        <button
                            onClick={handleDeleteAccount}
                            className="w-full text-left px-3 py-2 hover:bg-gray-300 rounded"
                        >
                            Delete Account
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
