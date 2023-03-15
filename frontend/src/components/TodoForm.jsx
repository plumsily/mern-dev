import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todos/todoSlice";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">New Todo</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="What do you need to complete?"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </section>
  );
}

export default TodoForm;
