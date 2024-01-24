import Image from "next/image";
import React from "react";
import { categoryList } from "@/data";
import headset from "@/public/images/headset.png";
import shadow from "@/public/images/Oval Copy 4.svg";

const Category = () => {
  return (
    <div className="flex justify-between gap-10 mt-20 h-[284px] bg-red-600">
        {categoryList.map((item,i)=> (
            <div key={i} className="w-4/12 flex flex-col items-center">
                    <div className="relativ">
                     <Image src={item.image} alt="" width={100} height={400}></Image>
                    </div>
                    <div className="bg-[#F1F1F1] rounded-[8px] h-[204px] w-full flex flex-col items-center">
                    <Image src={shadow} alt="shadow"></Image>
                    <h1 className="tracking-[2px]">{item.name}</h1>
                    <p className="mt-4 tracking-[2px]">
                        SHOP <span className="ml-4 text-primary">{">"}</span>
                    </p>
                    </div>
                </div>
        ))}
    </div>
  );
};

export default Category;
// top-[49px]