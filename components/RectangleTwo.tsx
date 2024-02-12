import React from "react";
import Pods from "@/public/images/pods.png";
import Image from "next/image";
import { Button } from "./ui/button";

const RectangleTwo = () => {
  return (
    <div className="flex gap-4 mt-14 flex-row-reverse">
      <div className="flex-1 flex flex-col justify-center items-center bg-[#F1F1F1] rounded-[8px]">
        <h1 className="text-xl font-medium tracking-wide mb-4">
          YX1 EARPHONES
        </h1>
        <div className="w-3/12 ">
          <Button>SEE PRODUCT</Button>
        </div>
      </div>
      <div className="rounded-[8px]">
        <Image src={Pods} alt="pods" className="rounded-[8px]"></Image>
      </div>
    </div>
  );
};

export default RectangleTwo;
