import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import headerImage from "@/public/images/Bitmap.svg"

const Header = () => {
  return (
    <div className="w-10/12 flex items-center bg-red-20 mx-auto py-6">
      <div className="flex-1">
        <h1 className="tracking-[10px] mb-6">NEW PRODUCT</h1>
        <h1 className="text-7xl mb-6">XX99 Mark II Headphones</h1>
        <p className="text-wra mb-6 w-[370px] ">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <div className="w-[160px]"><Button>SEE PRODUCT</Button></div>
      </div>
      <div className="flex-1">
        <Image src={headerImage} alt={"headerimage"}/>
      </div>
    </div>
  );
};

export default Header;
