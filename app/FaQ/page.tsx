"use client";
import React from "react";
import Button from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="w-full h-screen">
      <Link
        href="/"
        className="absolute border border-white transparent mx-3 mt-3 hover:bg-white hover:text-black rounded-lg p-2 text-white cursor-pointer text-lg font-medium transition duration-200"
      >
        Go Back
      </Link>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-col">
        <div className="flex w-full justify-center text-center mb-[5rem] mt-[5rem] sm:mt-0 text-white font-extrabold text-4xl ">
          <h1 className="drop-shadow-[4px_4px_0_blue]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
          <div className="bg-black/20 p-5 rounded-2xl flex justify-center flex-col text-center shadow-[0_0_16px_5px_rgba(255,0,255,0.7)]">
            <h3 className="font-bold text-2xl text-fuchsia-500">Is it Free?</h3>
            <p
              className="font-light text-md text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Yes, our tool is completely FREE to use.
            </p>
          </div>
          <div className="bg-black/20 p-5 rounded-2xl flex justify-center flex-col text-center shadow-[0_0_16px_5px_rgba(255,0,255,0.7)]">
            <h3 className="font-bold text-2xl text-fuchsia-500">
              Is it a virus?
            </h3>
            <p
              className="font-light text-md text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              No, our tool only checks your code for errors and fixes them!
            </p>
          </div>
          <div className="bg-black/20 p-5 rounded-2xl flex justify-center flex-col text-center shadow-[0_0_16px_5px_rgba(255,0,255,0.7)]">
            <h3 className="font-bold text-2xl text-fuchsia-500">
              Is it hard to use?
            </h3>
            <p
              className="font-light text-md text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              NO! You just need to paste your broken code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
