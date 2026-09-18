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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />

        <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
