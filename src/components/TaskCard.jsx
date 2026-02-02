import { useState } from "react";

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  const save = () => {
    onUpdate(task._id, { title, status });
    setEditing(false);
  };

  return (
    <div className="bg-white dark:bg-slate-700 p-4 rounded shadow">
      {editing ? (
        <>
          <input
            className="w-full p-2 mb-2 rounded border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="w-full p-2 mb-2 rounded border"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <div className="flex gap-2">
            <button
              onClick={save}
              className="bg-green-500 px-3 py-1 rounded text-white"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-400 px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-400">{task.status}</p>

          <div className="flex gap-3 mt-2">
            <button onClick={() => setEditing(true)}>✏️</button>
            <button onClick={() => onDelete(task._id)}>❌</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
