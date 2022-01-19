import axios from "axios";
import { useContext } from "react";
import { TasksContext } from "../component/tasks/tasks";

const useAddTask = () => {
  const { dispatch } = useContext(TasksContext);

  const handleAddTask = (task) => {
    axios
      .post("http://localhost:3004/tasks", task)
      .then((response) => {
        console.log("Succsessful...", response);
        dispatch({
          type: "add",
          task,
        });
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  return { handleAddTask };
};
export default useAddTask;
