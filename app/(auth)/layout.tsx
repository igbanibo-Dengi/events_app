export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-[url('/auth.jpg')]">
      <main>{children}</main>
    </div>
  );
}
