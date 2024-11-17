import type { Metadata } from "next";
import "./globals.css";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Next Template",
  description: "_next_template for frontend development",
};

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
