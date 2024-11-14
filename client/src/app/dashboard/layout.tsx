export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav></nav>
      {children}
      <footer></footer>
    </section>
  );
}
