import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
    const { login } = useAuth(); // 
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are required.");
            return;
        }

        // Get existing users or set empty array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email already exists
        if (users.some((user) => user.email === email)) {
            setError("User already registered. Please login.");
            return;
        }

        // Add new user to the list
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Login user & Redirect to dashboard
        login(newUser);
        navigate("/dashboard");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#473030] via-[#0d304a] to-slate-800">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600">
                        Signup
                    </button>
                </form>

                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <button onClick={() => navigate("/login")} className="text-blue-500 underline cursor-pointer">
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}
