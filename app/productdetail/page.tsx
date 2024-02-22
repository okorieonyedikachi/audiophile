import React from "react";
import PageHeader from "../(component)/pageHeader";
import Category from "@/components/Category";
import FourthRectangle from "@/components/FourthRectangle";
import Footer from "@/components/Footer";
import ProductComponent from "../(component)/productComponent";
import NavBar from "@/components/NavBar";

const ProductDetail = () => {
  return (
    <div>
      <div className="w-full bg-[#121212] text-[#FFFFFF] flex flex-col ">
        <NavBar />
      </div>
      <div className="w-10/12 mx-auto mt-24">
        <ProductComponent />
        <Category />
        <FourthRectangle />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
