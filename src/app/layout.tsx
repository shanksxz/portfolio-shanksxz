import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jet = JetBrains_Mono({
  weight: "700",
  subsets : ["latin"]
})

export const metadata: Metadata = {
  title: "shanksxz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jet.className} bg-primary`}>
        <Navbar />
        <main className="container flex flex-col min-h-screen justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
