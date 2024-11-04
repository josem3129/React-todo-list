import { useState } from "react";

export function NewTodoFrom({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={HandleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
        <button className="btn">Add</button>
    </form>
  );
}
