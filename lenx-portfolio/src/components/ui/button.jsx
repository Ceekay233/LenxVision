
export function Button({ children, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded-2xl font-medium text-sm transition-colors";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100"
  };
  return <button className={`${base} ${variants[variant]}`} {...props}>{children}</button>;
}
