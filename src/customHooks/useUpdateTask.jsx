import axios from "axios";
import { useContext } from "react";
import { TasksContext } from "../component/tasks/tasks";

const useUpdateTask = () => {
  const { dispatch } = useContext(TasksContext);

  const handleStatus = (id, task) => {
    axios
      .put(`http://localhost:3004/tasks/${id}`, task)
      .then((response) => {
        console.log("Succsessful...", response?.status);
          dispatch({
            type: "status",
            id,
          });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  return { handleStatus };
};
export default useUpdateTask;
