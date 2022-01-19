import axios from "axios";
import { useContext } from "react";
import { TasksContext } from "../component/tasks/tasks";

const useDeleteTask = () => {
  const { dispatch } = useContext(TasksContext);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3004/tasks/${id}`)
      .then((response) => {
        console.log("Succsessful...", response?.status);
          dispatch({
            type: "delete",
            id,
          });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  return { handleDelete };
};
export default useDeleteTask;
