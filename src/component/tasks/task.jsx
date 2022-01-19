import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useDeleteTask from "../../customHooks/useDeleteTask";
import useUpdateTask from "../../customHooks/useUpdateTask";
import Modal from "../modal/modal";

const Task = ({ item }) => {
  const { handleDelete } = useDeleteTask();
  const { handleStatus } = useUpdateTask();
  const [openId, setstate] = useState(null);

  const deleteStatus = () => {
    setstate(null);
    handleDelete(item.id);
  };
  return (
    <li>
      <label>
        <span className={`${item?.status ? "checked" : ""}`}>{item?.name}</span>
        <input
          type="checkbox"
          checked={item?.status}
          onChange={(e) => handleStatus(item?.id, item)}
        />
        <span className="checkmark"></span>
      </label>

      <button onClick={() => setstate(item?.id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {openId && (
        <Modal
          onConfirm={() => deleteStatus()}
          onCancel={() => setstate(null)}
        />
      )}
    </li>
  );
};

export default Task;
