import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome to The Wild Oasis",
  },
  description: "A website for The Wild Oasis, a nature retreat.",
};

export default function RooTtLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />

        <div className="flex-1 px-4 sm:px-8 py-8 sm:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
