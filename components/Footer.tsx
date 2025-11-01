import React from "react";

const Footer = () => {
  return (
    <div className="bg-indigo-600 h-fit p-5 text-white flex flex-col sm:flex-row items-center justify-evenly gap-5">
      <div className="flex sm:gap-5 flex-col">
        <h1 className="font-bold text-2xl border-b-4 border-indigo-200 inline-block pb-2">
          Contact
        </h1>
        <p className="font-bold text-xl cursor-pointer">
          Tel.{" "}
          <span className="hover:underline-animation-b font-normal">
            0736 810 678
          </span>
        </p>
        <p className="font-bold text-xl cursor-pointer">
          Email{" "}
          <span className="hover:underline-animation-b font-normal">
            gavrilbogdan30@gmail.com
          </span>
        </p>
        <p className="font-bold text-xl cursor-pointer">
          Orar{" "}
          <span className="hover:underline-animation-b font-normal">
            Luni-Vineri, 09:00-17:00
          </span>
        </p>
      </div>
      <div className="flex flex-col sm:gap-5 p-5">
        <h1 className="font-semibold text-sm sm:text-xl cursor-pointer">
          For additional information <br />
          feel free to contact us.
        </h1>
        <p className="font-semibold sm:text-lg cursor-pointer text-blue-300">
          Ⓒ2025 CodeAid | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
