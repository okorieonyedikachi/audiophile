import Category from "@/components/Category";
import Footer from "@/components/Footer";
import FourthRectangle from "@/components/FourthRectangle";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductOne from "@/components/ProductOne";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full bg-[#121212] text-[#FFFFFF]">
        <NavBar />
        <Header/>
      </div>
      
      <div className="w-10/12 mx-auto">
      <Category/>
      <ProductOne/>
      <FourthRectangle/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
