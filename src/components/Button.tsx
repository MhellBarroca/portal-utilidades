interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "danger";
}

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  const baseClass = "px-4 py-2 rounded text-white font-medium transition-colors";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button className={`${baseClass} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}