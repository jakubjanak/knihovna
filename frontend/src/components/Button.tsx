interface ButtonProps {
  onClickDetail?: () => void;
  children?: React.ReactNode;
  typ: "primary" | "secondary";
}

function Button({ onClickDetail, children, typ }: ButtonProps) {
  const baseStyles =
    "cursor-pointer text-sm border transition-colors px-3 py-1 rounded";

  const variantsStyles =
    typ === "primary"
      ? "border-blue-500 bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
      : typ === "secondary"
      ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
      : "";

  return (
    <button
      className={`${baseStyles} ${variantsStyles}`}
      onClick={onClickDetail}
    >
      {children}
    </button>
  );
}

export default Button;
