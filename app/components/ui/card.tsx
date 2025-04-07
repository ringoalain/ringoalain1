export function Card({ children }) {
  return <div className="rounded-xl bg-white shadow-md">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}