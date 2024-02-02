import Image from "next/image";
import React from "react";
import speaker from "@/public/images/image-removebg-preview(38).svg";
import { Button } from "./ui/button";

const RectangleOne = () => {
  return (
    <div className="bg-primary flex items-center justify-around px-24">
      <div className="">
        <Image src={speaker} alt="speaker-image" width={420}></Image>
      </div>
      <div className="w-4/12">
        <h1 className="text-white text-5xl mb-8">ZX9 SPEAKER</h1>
        <p className="text-white opacity-75 mb-8">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <div className="w-[160px] text-white"><Button variant={"secondary"}>SEE PRODUCT</Button></div>
      </div>
    </div>
  );
};

export default RectangleOne;
