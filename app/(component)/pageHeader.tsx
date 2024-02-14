import NavBar from "@/components/NavBar";
import React from "react";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="w-full bg-[#121212] text-[#FFFFFF] mb- flex flex-col ">
      <NavBar />
      <div className="w-10/12 flex items-center bg-red-20 mx-auto py-6 justify-center text-2xl my-24">
        {title}
      </div>
    </div>
  );
};

export default PageHeader;
