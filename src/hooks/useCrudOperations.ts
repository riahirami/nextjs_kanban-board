import api from "@/api/api";
import { Task } from "@/models/task";
import { useAppDispatch } from "@/redux/hooks";
import { showSnackbar } from "@/redux/slices/snackbar/snackbarSlice";
import { SnackbarTypeEnum } from "@/utils/enum";
import { useEffect, useState } from "react";

interface useCrudOperationsReturnProps {
  tasks: Task[];
  createTask: (task: Task) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
  loading: boolean;
}

const useCrudOperations = (): useCrudOperationsReturnProps => {
  const dispatch = useAppDispatch();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (err) {
      dispatch(
        showSnackbar({
          message: "Failed to fetch tasks",
          type: SnackbarTypeEnum.ERROR,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (task: Task) => {
    setLoading(true);
    try {
      await api.post("/tasks", task);
      fetchTasks();
      dispatch(
        showSnackbar({
          message: "Tasks created successfully",
          type: SnackbarTypeEnum.SUCCESS,
        })
      );
    } catch (err) {
      dispatch(
        showSnackbar({
          message: "Failed to create tasks",
          type: SnackbarTypeEnum.ERROR,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: string) => {
    setLoading(true);
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
      dispatch(
        showSnackbar({
          message: "Tasks deleted successfully",
          type: SnackbarTypeEnum.SUCCESS,
        })
      );
    } catch (err) {
      dispatch(
        showSnackbar({
          message: "Failed to delete tasks",
          type: SnackbarTypeEnum.ERROR,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (task: Task) => {
    setLoading(true);
    try {
      await api.put(`/tasks/${task.id}`, task);
      fetchTasks();
      dispatch(
        showSnackbar({
          message: "Tasks updated successfully",
          type: SnackbarTypeEnum.SUCCESS,
        })
      );
    } catch (err) {
      dispatch(
        showSnackbar({
          message: "Failed to update tasks",
          type: SnackbarTypeEnum.ERROR,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return { tasks, createTask, deleteTask, updateTask, loading };
};

export default useCrudOperations;
