
export function Card({ children, className = "", ...props }) {
  return <div className={`bg-white rounded-2xl shadow ${className}`} {...props}>{children}</div>;
}

export function CardContent({ children, className = "", ...props }) {
  return <div className={className} {...props}>{children}</div>;
}
