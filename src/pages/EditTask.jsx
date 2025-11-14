import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks.find((t) => t.id === Number(id));
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.map((t) =>
      t.id === Number(id) ? { ...t, title, description } : t
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    navigate("/home");
  };

  return (
    <div className=" relative z-10 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-6 text-indigo-900 text-center">Edit Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            rows={4}
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-gray-300 px-4 py-2 rounded shadow hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

