import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medieval Baptism Names",
  description: "Five medieval baptism names.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}