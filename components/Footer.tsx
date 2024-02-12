import React from "react";
import Image from "next/image";
import audiophile from "@/public/images/audiophile 2.svg";
import { list } from "@/data";
import twitter from "@/public/icons/twitter.svg";
import facebook from "@/public/icons/facebook.svg";
import instagram from "@/public/icons/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-[#121212] mt-28">
      <div className="w-10/12 mx-auto flex flex-col justify-between py-6 text-white">
        <section className=" w-full flex justify-between">
          <Image src={audiophile} alt={"logo"}></Image>
          <ul className="flex">
            {list.map((item, i) => (
              <li
                key={i}
                className="ml-[2rem] text-xs hover:text-primary hover:cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="flex mt-8 mb-8">
          <div className="flex-1">
            <p className="leading-6 text-xs text-[#FFF] opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="mt-10  text-[#FFF] opacity-50">
              Copyright 2024. All Rights Reserved
            </p>
          </div>
          <div className="flex-1 flex justify-end gap-4">
            <Image src={twitter} alt={"twitter-icon"}></Image>
            <Image src={facebook} alt={"facebook-icon"}></Image>
            <Image src={instagram} alt={"instagram-icon"}></Image>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
