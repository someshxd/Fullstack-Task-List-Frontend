import React, { useEffect, useState } from "react";
import "./Home.css";
import ToDo from "./ToDo";
import {
  addToDo,
  deleteToDo,
  getAllToDo,
  updateToDo,
} from "../Utils/HandleAPI";

export default function Home() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <>
      <div className="Home">
        <img src="/images/logo.png" />
        <div className="input-container">
          <input
            required=""
            placeholder="New Task"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="invite-btn"
            type="button"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "UPDATE" : "ADD"}
          </button>
        </div>
        <div className="todos">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
