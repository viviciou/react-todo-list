type CompletedTextProps = { text: string };
const CompletedText = ({ text }: CompletedTextProps) => {
  return (
    <span className="break-before absolute right-4 text-3xl font-bold text-amber-400 opacity-25">
      {text}
    </span>
  );
};
export default CompletedText;
