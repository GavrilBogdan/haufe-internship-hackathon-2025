"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!hamburger || !mobileMenu) return;

    const handleClick = () => {
      const isHidden = mobileMenu.classList.contains("right-[-100%]");
      if (isHidden) {
        mobileMenu.classList.remove("right-[-100%]");
        mobileMenu.classList.add("right-0");
      } else {
        mobileMenu.classList.remove("right-0");
        mobileMenu.classList.add("right-[-100%]");
      }
    };

    hamburger.addEventListener("click", handleClick);

    return () => {
      hamburger.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className="flex py-5 sm:py-7 items-center justify-between w-full px-3 sm:px-7 fixed z-50 bg-transparent sm:hover:bg-black/50 transition duration-200 ">
      <div className="logo">
        <h1 className="text-3xl text-white font-bold select-none cursor-pointer hover:text-indigo-600 hover:scale-105 transition">
          Code
          <span className="text-indigo-600">AI</span>d
        </h1>
      </div>

      {/* Hamburger icon */}
      <div
        id="hamburger"
        className="flex flex-col justify-between w-7 h-5 cursor-pointer md:hidden ml-auto z-50 mr-5"
      >
        <span className="block w-full h-1 bg-white rounded"></span>
        <span className="block w-full h-1 bg-white rounded"></span>
        <span className="block w-full h-1 bg-white rounded"></span>
      </div>

      {/* Desktop menu */}
      <ul className="menu hidden md:flex gap-10 items-center text-white font-bold px-5">
        <li>
          <a
            href="#"
            className="text-lg  no-underline  hover:scale-105 transition hover:underline-animation-a font-light"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={(e) => {
              e.preventDefault();
              handleScroll("hero");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#HowItWorks"
            className="text-lg  no-underline  hover:scale-105 transition hover:underline-animation-a font-light"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={(e) => {
              e.preventDefault();
              handleScroll("HowItWorks");
            }}
          >
            How it works
          </a>
        </li>
        <li>
          <Link
            href="/FaQ"
            className="text-lg  no-underline  hover:scale-105 transition hover:underline-animation-a font-light"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            FaQ
          </Link>
        </li>
        <li>
          <Link
            href="/guideline-checker"
            className="text-lg  no-underline  hover:scale-105 transition hover:underline-animation-a font-light"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            GuidelineAnalyzer
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="text-lg  no-underline  hover:scale-105 transition hover:underline-animation-a font-light"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Dashboard
          </Link>
        </li>
      </ul>

      {/* Mobile menu */}
      <div
        id="mobileMenu"
        className="fixed top-0 right-[-100%] h-full w-2/3 bg-indigo-700 text-white transition-all duration-300 md:hidden"
      >
        <ul className="flex flex-col items-center gap-8 mt-20 font-bold">
          <li>
            <a
              href="#"
              className="text-lg  no-underline  hover:underline-animation-a  transition font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={() => {}}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#HowItWorks"
              className="text-lg  no-underline  transition hover:underline-animation-a font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={() => {}}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="/FaQ"
              className="text-lg  no-underline   transition hover:underline-animation-a font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={() => {}}
            >
              FaQ
            </a>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-lg  no-underline  hover:scale-105 transition hover:underline-animation-a font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/guideline-checker"
              className="text-lg  no-underline  hover:scale-105 transition hover:underline-animation-a font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              GuidelineAnalyzer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
