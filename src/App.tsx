import List from "./components/List";
import useTodos from "./hooks/useTodo";

function App() {
  const { todos } = useTodos();
  const LINE_LIMIT = 5;

  return (
    <>
      <div className="flex flex-col font-mono bg-amber-50">
        <div className="bg-amber-300 rounded-2xl m-4 p-8">abc</div>
        <List
          title="Mission"
          items={todos
            .filter((todo) => todo.completed === false)
            .slice(0, LINE_LIMIT)}
          showMoreButton={todos.length > LINE_LIMIT}
        />
        <List
          title="Completed Mission"
          items={todos
            .filter((todo) => todo.completed === true)
            .slice(0, LINE_LIMIT)}
          showMoreButton={todos.length > LINE_LIMIT}
        />
      </div>
    </>
  );
}

export default App;
