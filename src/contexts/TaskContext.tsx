import { createContext, ReactNode, useState } from "react";

type Task = {
  id: string;
  title: string;
  status: "pending" | "finished";
};

interface TaskContext {
  tasks: Task[];
  createTask: (titleTask: string) => void;
  editTask: (id: string, status: "pending" | "finished") => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext({} as TaskContext);

interface TaskContextProviderProps {
  children: ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (titleTask: string) => {
    setTasks((prev) => [
      ...prev,
      { id: new Date().toISOString(), title: titleTask, status: "pending" },
    ]);
  };

  const editTask = (id: string, status: "pending" | "finished") => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
