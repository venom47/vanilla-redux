import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = parseInt(useParams().id);
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((toDo) => toDo.id === id);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {new Date(toDo?.id).toString()}</h5>
    </>
  );
};

export default Detail;
