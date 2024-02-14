import React from "react";
import PageHeader from "../(component)/pageHeader";
import { earphonesList, speakerList } from "@/data";
import CategoryShop from "../(component)/categoryShop";
import Category from "@/components/Category";
import FourthRectangle from "@/components/FourthRectangle";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <PageHeader title="SPEAKERS" />
      <div className="w-10/12 mx-auto mt-24">
        {speakerList.map((item, i) => (
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

export default page;
