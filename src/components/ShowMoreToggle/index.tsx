type ShowMoreToggleProps = {
  showMore: boolean;
  onToggle: () => void;
};

const ShowMoreToggle = ({ showMore, onToggle }: ShowMoreToggleProps) => {
  return (
    <div className="flex justify-end py-2 px-8">
      <span className="text-gray-400 cursor-pointer" onClick={onToggle}>
        {showMore ? "... read more" : "read less"}
      </span>
    </div>
  );
};

export default ShowMoreToggle;
