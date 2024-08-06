"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 ${
        scrolled
          ? "bg-slate-900 bg-opacity-70 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
        <div className="flex-grow">
          <span className="text-xl font-bold text-blue-500">My Portfolio</span>
        </div>
        <div className="flex space-x-8">
          <Link
            href="/"
            className="hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/project"
            className="hover:text-gray-400 transition duration-300"
          >
            Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
