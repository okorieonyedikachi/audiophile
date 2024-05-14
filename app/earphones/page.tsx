import React from "react";
import PageHeader from "../(component)/pageHeader";
import { earphonesList } from "@/data";
import CategoryShop from "../(component)/categoryShop";
import FourthRectangle from "@/components/Ad";
import Category from "@/components/Category";
import Footer from "@/components/Footer";

const earphonesPage = () => {
  return (
    <div>
      <PageHeader title="EARPHONES" />
      <div className="w-10/12 mx-auto mt-24">
        {earphonesList.map((item, i) => (
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
    </div>
  );
};

export default earphonesPage;
