import type { Todo } from "../ListItem/listItem.types";
import ListItem from "../ListItem";
import ShowMoreToggle from "../ShowMoreToggle";

type ListProps = {
  title: string;
  items: Todo[];
  showMoreButton: boolean;
  handleCheckBoxChange: (item: Todo) => void;
  setShowMoreButton: React.Dispatch<React.SetStateAction<boolean>>;
};
const List = ({
  title,
  items,
  showMoreButton,
  handleCheckBoxChange,
  setShowMoreButton,
}: ListProps) => {
  return (
    <div>
      <div className="font-bold text-gray-800 px-6">{title}</div>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleCheckBoxChange={handleCheckBoxChange}
        />
      ))}
      <ShowMoreToggle
        showMore={showMoreButton}
        onToggle={() => setShowMoreButton(!showMoreButton)}
      />
    </div>
  );
};
export default List;
