import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

<nav>
  <Link to="/login">Login</Link>
  <Link to="/">Home</Link>
  <Link to="/create">Create Task</Link>
</nav>


function getInitialTasks() {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
}

export default function Home() {
  const [tasks, setTasks] = useState(getInitialTasks());
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center">

      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-indigo-900">
          Task Manager
        </h1>

        <div className="flex mb-6 items-center justify-between w-full">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-4"
          />
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
            onClick={() => navigate("/create")}
          >
            New Task
          </button>
        </div>
        <table className="min-w-full border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <thead className="bg-indigo-100 font-semibold text-indigo-900">
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Title</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Description</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.map((task) => (
              <tr
                key={task.id}
                className="even:bg-gray-50 hover:bg-indigo-50 transition-colors"
              >
                <td className="px-6 py-4 border-b border-gray-300">{task.title}</td>
                <td className="px-6 py-4 border-b border-gray-300">{task.description}</td>
                <td className="px-6 py-4 border-b border-gray-300 space-x-2">
                  <button
                    className="px-3 py-1 bg-green-600 text-white rounded shadow hover:bg-green-700 transform hover:scale-110 transition duration-300"
                    onClick={() => navigate(`/edit/${task.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded shadow hover:bg-red-700 transform hover:scale-110 transition duration-300"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {currentTasks.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center px-6 py-4 text-gray-500">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-6 flex justify-center space-x-2">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>

  );
}

