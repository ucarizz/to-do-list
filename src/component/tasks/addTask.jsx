import { useState } from "react";
import "./tasks.scss";
import { uid } from "uid";
import useAddTask from "../../customHooks/useAddTask";

const AddTask = () => {
  const [name, setstate] = useState("");
  const [error, setError] = useState(false);
  const { handleAddTask } = useAddTask();

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (name !== ""){
      handleAddTask({ id: uid(32), name, status: false });
      setstate("");
    } else{
      setError(true);
    }
  };

  return (
    <form className="add-item" autoComplete="off" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={name}
        onChange={(e) => setstate(e.currentTarget.value)}
        onFocus={()=> setError(false)}
      />
      <input type="submit" value="Add" />
      {error && <span>Task Adını Buraya Girin</span>}
    </form>
  );
};

export default AddTask;
