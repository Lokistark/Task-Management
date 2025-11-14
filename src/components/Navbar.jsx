import { Link, useLocation } from "react-router-dom";

export default function FloatingButtons() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return null; // Render nothing on the login page
  }

  return (
    <div className="fixed top-8 left-0 w-full flex justify-center z-50">
      <div className="flex gap-5">
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow font-semibold transition-all duration-300 transform hover:bg-indigo-700 hover:scale-110 hover:-translate-y-1"
        >
          Login
        </Link>
        <Link
          to="/home"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow font-semibold transition-all duration-300 transform hover:bg-indigo-700 hover:scale-110 hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          to="/create"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow font-semibold transition-all duration-300 transform hover:bg-indigo-700 hover:scale-110 hover:-translate-y-1"
        >
          Create Task
        </Link>
      </div>
    </div>
  );
}




