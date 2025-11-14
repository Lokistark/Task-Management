import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add authentication logic here.
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center z-10 relative">
      <div className="w-full max-w-md bg-white border border-white border-opacity-30 p-8 rounded-lg shadow-lg mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-6 text-indigo-900 text-center">
          Welcome
        </h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            autoComplete="off"
            required
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 hover:scale-105 transform transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
