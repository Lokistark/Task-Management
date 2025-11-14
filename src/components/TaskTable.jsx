import React from "react";

function TaskTable({ tasks, onEdit, onDelete, sortBy, onSort, filter }) {
  const filteredTasks = filter
    ? tasks.filter(task => task.title.toLowerCase().includes(filter.toLowerCase()))
    : tasks;

  const sortedTasks = [...filteredTasks].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("status")}>Status</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedTasks.map(task => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.status}</td>
            <td>{task.description}</td>
            <td>
              <button onClick={() => onEdit(task.id)}>Edit</button>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
