import Image from "next/image";
import React from "react";
import { categoryList } from "@/data";
import headset from "@/public/images/headset.png";
import shadow from "@/public/images/Oval Copy 4.svg";
import Link from "next/link";
import { link } from "fs";

const Category = () => {
  return (
    <div className="flex justify-between gap-10 my-20">
      {categoryList.map((item, i) => (
        <div key={i} className="w-4/12 flex flex-col items-center relative">
          <div className="absolute ">
            <Image src={item.image} alt="" width={100}></Image>
          </div>
          <div className="bg-[#F1F1F1] rounded-[8px] mt-16 pb-10 w-full flex flex-col items-center">
            <Image src={shadow} alt="shadow"></Image>
            <h1 className="tracking-[2px]">{item.name}</h1>
            <Link href={item.link}>
              <p className="mt-4 tracking-[2px] text-xs font-bold cursor-pointer">
                SHOP <span className="ml-4 text-primary">{">"}</span>
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
//
