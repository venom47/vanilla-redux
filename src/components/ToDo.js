import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(deleteToDo(id));
  return (
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}/${id}`}
        style={{ textDecoration: "none" }}
      >
        {text}
      </Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
};

export default ToDo;
