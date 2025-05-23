import type { Todo } from "../ListItem/listItem.types";
import CompletedText from "./CompletedText";
import UnCompletedText from "./UnCompletedText";

type ListItemProps = { item: Todo; handleCheckBoxChange: (item: Todo) => void };

const ListItem = ({ item, handleCheckBoxChange }: ListItemProps) => {
  const { id, title, completed } = item;

  return (
    <div className="flex flex-col m-4 py-2 px-8 overflow-hidden bg-white rounded-2xl shadow shadow-amber-200/50 hover:shadow-amber-400/40">
      <label className="peer">
        <input
          className="accent-yellow-500"
          type="checkbox"
          checked={completed}
          onChange={() => {
            handleCheckBoxChange({ ...item, completed: !completed });
          }}
        />

        <span className={`peer-has-[:checked]:line-through ml-1.5`}>
          {title}
        </span>
        {completed ? (
          <CompletedText text="Completed" />
        ) : (
          <UnCompletedText text={`${id}`} />
        )}
      </label>
    </div>
  );
};

export default ListItem;
