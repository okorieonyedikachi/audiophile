import Image from "next/image";
import React from "react";
import headset1 from "@/public/images/headset1.png";
import { Button } from "@/components/ui/button";
import { reverse } from "dns";

interface CategoryShopProps {
  image: any;
  description: string;
  name: string;
  newProduct: boolean;
  reverse: boolean;
}

const CategoryShop = ({
  image,
  description,
  name,
  newProduct,
  reverse,
}: CategoryShopProps) => {
  return (
    <div>
      <div
        className={`flex mb-24 ${reverse ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="flex-1 bg-[#F1F1F1] flex justify-center py-10 rounded-[8px]">
          <Image src={image} alt="product image" width={300} />
        </div>
        <div
          className={`flex-1  ${
            reverse ? "pr-20" : "pl-20"
          } flex flex-col justify-center gap-3`}
        >
          <h3
            className={`text-primary tracking-[10px] ${
              newProduct ? "flex" : "hidden"
            }`}
          >
            NEW PRODUCT
          </h3>
          <h1 className="font-semibold text-4xl w-6/12">{name}</h1>
          <p className="font-thin">{description}</p>
          <div className="w-3/12">
            <Button>SEE PRODUCT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShop;
