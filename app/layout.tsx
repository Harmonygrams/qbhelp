import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/navbar/navbar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Download Free License Quickbooks Pos - Quickbooks Enterprise",
  description:
    "Download Free License Quickbooks, Photoshop, Pos, Games, Internet download manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
