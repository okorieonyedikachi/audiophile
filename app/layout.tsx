import "./globals.css";
export const metadata = {
  title: "Audiophile",
  description: "Audiophile website",
  image: "/public/icons/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
