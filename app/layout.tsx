import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/navbar/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quickbooks Vendor",
  description:
    "Download Quickbooks Enterprise | Download Quickbooks Point Of Sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
