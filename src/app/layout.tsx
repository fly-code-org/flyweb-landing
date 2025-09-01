// src/app/layout.tsx
import "./globals.css";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata = {
  title: "FLY — First Love Yourself",
  description: "AI-powered mental wellness for India.",
  openGraph: { title: "FLY — First Love Yourself", type: "website" },
  twitter: { card: "summary_large_image", title: "FLY — First Love Yourself" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} font-sans`}>
        <Navbar /> {/* ✅ Navbar always visible */}
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
