import { useState, useEffect } from "react";
import type { Todo } from "../components/ListItem/listItem.types";

// 定義 Todo 的型別
type UseTodoFunc = () => {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  fetchTodos: () => Promise<Todo[]>;
  updataTodo: (item: Todo) => Promise<void>;
};

const API_URL = "https://jsonplaceholder.typicode.com/todos";
const useTodos: UseTodoFunc = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async (): Promise<Todo[]> => {
    try {
      const response = await fetch(`${API_URL}?userId=1`);
      if (!response) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      return [];
    }
  };

  const updataTodo = async (item: Todo) => {
    try {
      const response = await fetch(`${API_URL}/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (!response) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === data.id ? data : todo))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  useEffect(() => {
    const fetchAndSetTodo = async () => {
      const data = await fetchTodos();
      setTodos(data); // 將資料設為狀態
    };
    fetchAndSetTodo();
  }, []);

  return {
    todos,
    setTodos,
    fetchTodos,
    updataTodo,
  };
};
export default useTodos;
