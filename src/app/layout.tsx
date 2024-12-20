import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingDockDemo } from "./components/floating dock/FloatingDock";
import { NextUIProvider } from "@nextui-org/system";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aditya Bhojane",
  description: "Generated by Aditya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black scrollbar-thin scrollbar-thumb-[#616161] scrollbar-track-transparent  antialiased`}
      >
        <NextUIProvider>
          {children}
          <FloatingDockDemo />
        </NextUIProvider>
      </body>
    </html>
  );
}
