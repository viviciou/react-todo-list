import { useState } from "react";
import AddNewTodoInput from "./components/AddNewTodoInput";
import List from "./components/List";
import useTodos from "./hooks/useTodo";
import Dialogue from "./components/Dialogue";

function App() {
  const { todos, updataTodo, adddataTodo } = useTodos();
  const LINE_LIMIT = 5;
  const unCompletedTodos = todos
    .filter((todo) => todo.userId === 1 && todo.completed === false)
    .sort((a, b) => b.id - a.id);
  const completedTodos = todos.filter(
    (todo) => todo.userId === 1 && todo.completed === true
  );
  const [showUnCompletedTodosMoreButton, setShowUnCompletedTodosMoreButton] =
    useState(unCompletedTodos.length < LINE_LIMIT);
  const [showCompletedTodosMoreButton, setShowCompletedTodosMoreButton] =
    useState(completedTodos.length < LINE_LIMIT);

  return (
    <>
      <div className="flex flex-col font-mono bg-amber-50">
        <Dialogue title={`I'm title`} description={`...description`} />
        <AddNewTodoInput handleAddTodoSubmit={adddataTodo} />
        <div className="px-6 py-3 text-3xl">
          My <span className="font-black">Goals</span>
        </div>
        <List
          title="Mission"
          items={
            showUnCompletedTodosMoreButton
              ? unCompletedTodos.slice(0, LINE_LIMIT)
              : unCompletedTodos
          }
          showMoreButton={showUnCompletedTodosMoreButton}
          handleCheckBoxChange={updataTodo}
          setShowMoreButton={setShowUnCompletedTodosMoreButton}
        />
        <List
          title="Completed Mission"
          items={
            showCompletedTodosMoreButton
              ? completedTodos.slice(0, LINE_LIMIT)
              : completedTodos
          }
          showMoreButton={showCompletedTodosMoreButton}
          handleCheckBoxChange={updataTodo}
          setShowMoreButton={setShowCompletedTodosMoreButton}
        />
      </div>
    </>
  );
}

export default App;
