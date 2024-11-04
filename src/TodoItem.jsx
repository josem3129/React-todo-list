export function TodoItem({ completed, id, title, toggleTodo, toggleDelete }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
          onClick={() => toggleDelete(id)}
        className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
