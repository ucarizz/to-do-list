import { createContext, useReducer, useEffect } from "react";
import useGetTasks from "../../customHooks/useGetTasks";
import { reducer } from "../../utilities/reducer";
import Error from "../error/error";
import Loader from "../loader/loader";
import AddTask from "./addTask";
import TaskList from "./taskList";
import "./tasks.scss";

export const TasksContext = createContext({
  state: [],
  dispatch: () => null,
});

const Tasks = () => {
  const { tasks, error, loading } = useGetTasks();
  const [items, dispatch] = useReducer(reducer, tasks);

  useEffect(() => {
    dispatch({
      type: "list",
      tasks,
    });
  }, [tasks]);

  if (loading) return <Loader />;

  if (error) return <Error error={error.toString()} />;
  
  return (
    <TasksContext.Provider value={{ items, dispatch }}>
      <div className="container">
        <AddTask />
        <TaskList items={items} />
      </div>
    </TasksContext.Provider>
  );
};

export default Tasks;
