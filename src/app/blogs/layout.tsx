export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col bg-gray-200">
      <h1>Welcome to blog layout</h1>
      {children}
    </div>
  );
}