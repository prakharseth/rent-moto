import type { Metadata } from "next";

import "./globals.css";

import { GeistSans } from "geist/font/sans";

 
import * as React from "react"
import { ThemeProvider } from "./components/extras/theme-provider";
 
export const metadata: Metadata = {
  title: "RENTMOTO",
  description: "Book Bike Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
