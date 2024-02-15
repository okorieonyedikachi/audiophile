import React from "react";
import PageHeader from "../(component)/pageHeader";
import Category from "@/components/Category";
import FourthRectangle from "@/components/FourthRectangle";
import Footer from "@/components/Footer";
import ProductComponent from "../(component)/productComponent";

const ProductDetail = () => {
  return (
    <div>
      <PageHeader title={""} />
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
