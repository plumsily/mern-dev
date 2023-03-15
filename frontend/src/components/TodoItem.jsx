import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todos/todoSlice";
import { FaTrash, FaCheck } from "react-icons/fa";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={todo.completed ? "todo-completed" : "todo"}>
      <div>{new Date(todo.createdAt).toLocaleString("en-US")}</div>
      <h2>{todo.text}</h2>
      <button className="close" onClick={() => dispatch(deleteTodo(todo._id))}>
        <FaTrash />
      </button>
      <button className="check" onClick={() => dispatch(updateTodo(todo))}>
        <FaCheck />
      </button>
    </div>
  );
}

export default TodoItem;
