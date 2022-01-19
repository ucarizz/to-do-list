import Task from "./task";

const TaskList = ({items}) => {
  return (
    <ul>
      {items?.map((item) => (
        <Task item={item} />
      ))}
    </ul>
  );
};
export default TaskList