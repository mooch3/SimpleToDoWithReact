import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  function handleTodo(event) {
    const { value } = event.target;
    setTodo(value);
  }
  function addTodo() {
    setItems((prevValues) => [...prevValues, todo]);
    setTodo("");
  }
  function deleteTodo(id) {
    setItems((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleTodo} name="input" type="text" value={todo} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
