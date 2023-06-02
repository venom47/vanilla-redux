import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const onChange = (event) => setText(event.target.value);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };
  const toDos = useSelector((state) => state);
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
