"use client";
import React from "react";

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({
  text,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-block px-5 py-4 border-2 border-t-purple-500 border-r-blue-300 border-b-indigo-400 border-l-purple-500 text-white font-bold text-xl max-w-max rounded-lg overflow-hidden cursor-pointer ${className}`}
    >
      {text}
      {/* Background animat */}
      <span className="absolute top-0 left-0 w-0 h-full bg-[#4d00dd] transition-all duration-500 group-hover:w-full z-[-1]"></span>
    </button>
  );
}
