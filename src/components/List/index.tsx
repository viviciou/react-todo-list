import ListItem from "../ListItem";
import type { Todo } from "../ListItem/listItem.types";

type ListProps = {
  title: string;
  items: Todo[];
  showMoreButton: boolean;
};
const List = ({ title, items, showMoreButton }: ListProps) => {
  return (
    <div>
      <div className="font-bold text-gray-800 p-2">{title}</div>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
      {showMoreButton && (
        <div className="flex justify-end py-2 px-8 ">
          <span className=" text-gray-400">... read more</span>
        </div>
      )}
    </div>
  );
};
export default List;
