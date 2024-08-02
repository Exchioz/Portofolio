import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ivan's Portofolio",
  description: "Create by Ivan Rajwa Naufal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full z-20 top-0 start-0 border-b bg-slate-900 border-slate-950">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            My Portofolio
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
