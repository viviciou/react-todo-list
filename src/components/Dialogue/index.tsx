type DialogueProps = { title: string; description?: string };
const Dialogue = ({ title, description }: DialogueProps) => {
  return (
    <>
      <div className="h-35 bg-amber-300 rounded-br-2xl m-0 p-8">
        <div className="font-black text-3xl">
          <span className="text-5xl">"</span>
          {title}
        </div>
        <div className="p-2 text-gray-700 opacity-65">{description}</div>
      </div>
      <div className="relative w-14 h-14 mb-8 bg-amber-300 width-500 height-400 overflow-hidden">
        <div className="break-before absolute left-0  w-25 h-25 bg-amber-50 rounded-full" />
      </div>
    </>
  );
};

export default Dialogue;
