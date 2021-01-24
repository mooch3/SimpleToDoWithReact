import React from "react";

function TodoItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default TodoItem;
