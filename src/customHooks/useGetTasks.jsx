import axios from "axios";
import { useEffect, useState } from "react";

const useGetTasks = () => {
  const [tasks, setstate] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3004/tasks")
        .then((response) => {
          setstate(response.data);
          setLoading(false);
        })
        .catch((error) => {
          // handle error
          setError(error);
          setLoading(false);
          console.error(error);
        });
    }, 1000);
  }, []);
  return { tasks, error, loading };
};
export default useGetTasks;
