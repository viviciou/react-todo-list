type UnCompletedTextProps = { text: string };
const UnCompletedText = ({ text }: UnCompletedTextProps) => {
  return (
    <span className="break-before absolute right-8 text-3xl font-bold text-gray-400 opacity-25">
      {text}
    </span>
  );
};

export default UnCompletedText;
