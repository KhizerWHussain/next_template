import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Template",
  description: "_next_template for frontend development",
};

function RootLayout({
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

export default RootLayout;
