import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section id="HowItWorks" className="mt-[6rem] sm:mt-0">
      <div className="min-h-screen min-w-screen flex justify-center flex-col text-center">
        <div className="w-full flex justify-center my-5 cursor-pointer">
          <h1 className=" w-fit text-white font-bold rounded-lg py-1 px-2 border-t-2 border-t-purple-400 border-b-2 border-b-indigo-700 border-l-2 border-l-indigo-800 border-r-2 border-r-purple-600">
            How it Works?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 p-5 ">
          <div className=" bg-black/20 p-5 rounded-2xl flex flex-col gap-5 shadow-[0_0_16px_5px_rgba(255,255,255,0.3)]">
            <h1
              className="text-white font-bold text-2xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              📍 FIND THE ISSUE
            </h1>
            <p
              className="font-medium text-white"
              style={{ fontFamily: "Poppins,sans-serif" }}
            >
              You've spotted that something is wrong in your code but don't know
              how to fix it?
            </p>
          </div>
          <div className=" bg-black/20 p-5 rounded-2xl flex flex-col gap-5 shadow-[0_0_16px_5px_rgba(255,255,255,0.3)]">
            <h1
              className="text-white font-bold text-xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              🔗 PASTE IT{" "}
            </h1>
            <p
              className="font-medium text-white"
              style={{ fontFamily: "Poppins,sans-serif" }}
            >
              Paste your code into CodeHelper and let it do it's magic !
            </p>
          </div>
          <div className=" bg-black/20 p-5 rounded-2xl flex flex-col gap-5 shadow-[0_0_16px_5px_rgba(255,255,255,0.3)]">
            <h1
              className="text-white font-bold text-xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              ✅ FIX IT
            </h1>
            <p
              className="font-medium text-white "
              style={{ fontFamily: "Poppins,sans-serif" }}
            >
              Replace your fixed code in your compiler and that's it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
