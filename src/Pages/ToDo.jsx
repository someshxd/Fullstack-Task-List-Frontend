import React from "react";
import "./ToDo.css";

export default function ToDo({ text, updateMode, deleteToDo }) {
  return (
    <div>
      <div className="todo">
        <div className="checkbox"></div>
        <h3 className="text">{text}</h3>
        <img
          className="update-img"
          src="/images/update.png"
          onClick={updateMode}
        />
        <img
          className="delete-img"
          src="/images/delete.png"
          onClick={deleteToDo}
        />
      </div>
    </div>
  );
}
