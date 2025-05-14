import List from "./components/List";
import useTodos from "./hooks/useTodo";

function App() {
  const { todos, updataTodo } = useTodos();
  const LINE_LIMIT = 5;
  const unCompletedTodos = todos.filter((todo) => todo.completed === false);
  const completedTodos = todos.filter((todo) => todo.completed === true);

  return (
    <>
      <div className="flex flex-col font-mono bg-amber-50">
        <div className="bg-amber-300 rounded-2xl m-4 p-8">abc</div>
        <List
          title="Mission"
          items={unCompletedTodos.slice(0, LINE_LIMIT)}
          showMoreButton={unCompletedTodos.length > LINE_LIMIT}
          handleCheckBoxChange={updataTodo}
        />
        <List
          title="Completed Mission"
          items={completedTodos.slice(0, LINE_LIMIT)}
          showMoreButton={completedTodos.length > LINE_LIMIT}
          handleCheckBoxChange={updataTodo}
        />
      </div>
    </>
  );
}

export default App;
