"use client";
import React from "react";
import AnimatedButton from "./Button";
import Image from "next/image";

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("AI");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="hero" className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <span className="text-indigo-600">
              Code<span className="text-white">AI</span>d{" "}
            </span>
            your code <span className="text-indigo-600">debugger</span>
          </h2>
          <p
            className="text-white text-lg font-medium  py-4 max-w-md"
            style={{ fontFamily: "Poppins,sans-serif" }}
          >
            CodeAId finds bugs, explains fixes, and improves your code in
            seconds.
          </p>
          <AnimatedButton
            text="Check it out &#8675;"
            className="mt-5"
            onClick={handleScroll}
          ></AnimatedButton>
        </div>
        <Image
          src="/images/code.png"
          alt="code_img"
          width={400}
          height={400}
          className="rounded-2xl mx-auto hidden md:block "
        />
      </div>
    </section>
  );
}
