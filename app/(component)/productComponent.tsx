import React from "react";
import Image from "next/image";
import headset2 from "@/public/images/headset2.png";
import { Button } from "@/components/ui/button";

const ProductComponent = () => {
  return (
    <div>
      <p className="mb-10">Go Back</p>
      <div className="flex mb-24 flex-row">
        <div className="flex-1 bg-[#F1F1F1] flex justify-center py-10 rounded-[8px]">
          <Image src={headset2} alt="product image" width={300} />
        </div>
        <div className="flex-1 pl-20 flex flex-col justify-center gap-3">
          <h3 className="text-primary tracking-[10px] flex">NEW PRODUCT</h3>
          <h1 className="font-semibold text-4xl w-6/12">
            XX99 Mark II HEADPHONES
          </h1>
          <p className="font-thin">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p>$ 2,999</p>
          <div className="w-6/12 flex gap-6">
            <Button
              variant="outline"
              className="flex justify-between items-center"
            >
              <span>-</span>1<span>+</span>
            </Button>
            <Button className="text-xs">ADD TO CART</Button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <h3 className="font-semibold text-2xl mb-10">FEATURES</h3>
          <div className="font-thin">
            <p className="mb-4">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
            </p>
            <p>
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
        </div>
        <div className="flex-1 ml-48">
          <h3 className="font-semibold text-2xl mb-10">IN THE BOX</h3>
          <ul className="font-thin">
            <li className="mb-4">
              <span className="text-primary mr-8">1x</span>Headphone unit
            </li>
            <li className="mb-4">
              <span className="text-primary mr-8">1x</span>Replacement Earcups
            </li>
            <li className="mb-4">
              <span className="text-primary mr-8">1x</span>User Manual
            </li>
            <li className="mb-4">
              <span className="text-primary mr-8">1x</span>3.5mm 5m Audio Cable
            </li>
            <li className="mb-4">
              <span className="text-primary mr-8">1x</span>Travel Bag
            </li>
          </ul>
        </div>
      </div>
      <div className="flex bg-red-300 mt-24">
        <div className="flex-1 bg-blue-300">
          <Image src="" alt=""></Image>
          <Image src="" alt=""></Image>
        </div>
        <div className="flex-1">
          <Image src="" alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
