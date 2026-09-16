import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "moldybuns",
  description: "mycelial experiments in tech, art, baking, love, etc...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased text-gray-700`}>
        {children}
      </body>
    </html>
  );
}
