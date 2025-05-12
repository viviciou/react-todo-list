import { useState, useEffect } from "react";
import type { Todo } from "../components/ListItem/listItem.types";

// 定義 Todo 的型別
type UseTodoFunc = () => {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  fetchTodos: () => Promise<Todo[]>;
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
  };
};
export default useTodos;
