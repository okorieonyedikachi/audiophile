import Image from "next/image";
import React from "react";
import speaker from "@/public/images/speaker.png";
import { Button } from "./ui/button";

const ProductOne = () => {
  return (
    <div className="bg-primary flex items-center justify-around">
      <div className="">
        <Image src={speaker} alt="speaker-image" width={420}></Image>
      </div>
      <div>
        <h1 className="text-white">ZX9 SPEAKER</h1>
        <p className="text-white opacity-75">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <div className="w-[160px] text-white"><Button variant={"secondary"}>SEE PRODUCT</Button></div>
      </div>
    </div>
  );
};

export default ProductOne;
