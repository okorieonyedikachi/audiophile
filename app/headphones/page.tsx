import React from "react";
import PageHeader from "../(component)/pageHeader";
import CategoryShop from "../(component)/categoryShop";
import Category from "@/components/Category";
import FourthRectangle from "@/components/FourthRectangle";
import Footer from "@/components/Footer";
import { headphonesList } from "@/data";

const page = () => {
  return (
    <>
      <PageHeader title="HEADPHONES" />
      <div className="w-10/12 mx-auto mt-24">
        {headphonesList.map((item, i) => (
          <CategoryShop
            key={i}
            image={item.image}
            description={item.description}
            name={item.name}
            newProduct={item.newProduct}
            reverse={item.reverse}
          />
        ))}

        <Category />
        <FourthRectangle />
      </div>
      <Footer />
    </>
  );
};

export default page;
