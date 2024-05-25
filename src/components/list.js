import React from "react";

function List({ items, toggleItem, deleteItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className={item.completed ? "completed" : ""}>
          <span className="text">{item.text}</span>
          <div className="buttons">
            <button onClick={() => toggleItem(index)}>
              {item.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
