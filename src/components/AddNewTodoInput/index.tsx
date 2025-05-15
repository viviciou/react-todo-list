import { useState } from "react";

type AddNewTodoInputProps = { handleAddTodoSubmit: (text: string) => void };
const AddNewTodoInput = ({ handleAddTodoSubmit }: AddNewTodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      handleAddTodoSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex items-center justify-between p-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new todo"
        className="border border-gray-300 rounded p-2 flex-grow mr-2"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Add
      </button>
    </div>
  );
};
export default AddNewTodoInput;
