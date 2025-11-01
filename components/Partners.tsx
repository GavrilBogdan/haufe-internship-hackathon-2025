import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="p-5 bg-black/10 w-full flex flex-col justify-center gap-5">
      <h1 className="font-bold text-center text-white text-3xl">
        Our Partners
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-20 items-center">
        <Image
          src="/images/Microsoft.png"
          alt="code_img"
          width={200}
          height={50}
        />
        <Image src="/images/intel.png" alt="code_img" width={100} height={50} />
        <Image src="/images/IBM.png" alt="code_img" width={100} height={50} />
        <Image src="/images/HG.png" alt="code_img" width={100} height={50} />
      </div>
    </div>
  );
};

export default Partners;
