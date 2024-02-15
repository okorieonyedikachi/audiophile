import React from "react";
import Image from "next/image";
import headset2 from "@/public/images/headset2.png";
import { Button } from "@/components/ui/button";

const ProductComponent = () => {
  return (
    <div>
      <div className="flex mb-24 flex-row">
        <div className="flex-1 bg-[#F1F1F1] flex justify-center py-10 rounded-[8px]">
          <Image src={headset2} alt="product image" width={300} />
        </div>
        <div
          className="flex-1 
            pl-20 flex flex-col justify-center gap-3"
        >
          <h1 className="font-semibold text-4xl w-6/12">name</h1>
          <p className="font-thin">descriptiom</p>
          <div className="w-3/12">
            <Button>SEE PRODUCT</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
