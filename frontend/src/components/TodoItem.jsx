import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";
import { FaTrash, FaCheck } from "react-icons/fa";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <div>{new Date(todo.createdAt).toLocaleString("en-US")}</div>
      <h2>{todo.text}</h2>
      <button className="close" onClick={() => dispatch(deleteTodo(todo._id))}>
        <FaTrash />
      </button>
      <button className="check" onClick={() => dispatch(deleteTodo(todo._id))}>
        <FaCheck />
      </button>
    </div>
  );
}

export default TodoItem;
