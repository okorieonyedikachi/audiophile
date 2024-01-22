import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full bg-[#121212] text-[#FFFFFF]">
        <NavBar />
        <Header/>
      </div>
      <div className="bg-blue-300 w-10/12 mx-auto">
        venrvjnrelvker
      </div>
    </div>
  );
};

export default Home;
