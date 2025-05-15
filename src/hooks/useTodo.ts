import { useState, useEffect } from "react";
import type { Todo } from "../components/ListItem/listItem.types";

// 定義 Todo 的型別
type UseTodoFunc = () => {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  fetchTodos: () => Promise<Todo[]>;
  updataTodo: (item: Todo) => Promise<void>;
  adddataTodo: (text: string) => Promise<void>;
};
// type PostTodo = Omit<Todo, "userId">;

const API_URL = "https://jsonplaceholder.typicode.com/todos";
const useTodos: UseTodoFunc = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async (): Promise<Todo[]> => {
    try {
      const response = await fetch(`${API_URL}`);
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

  const adddataTodo = async (text: string) => {
    const newTodo: Todo = {
      userId: 1,
      id: todos.length + 1,
      title: text,
      completed: false,
    };
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newTodo),
      });
      if (!response) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTodos((prevTodos) => [...prevTodos, data]); // 確保新增的資料被加入到狀態中
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
    adddataTodo,
  };
};
export default useTodos;
