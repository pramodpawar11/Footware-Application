import React from 'react';
import ProductCard from './ProductCard';
import Wrapper from "./Wrapper";
import { fetchApiData } from "@/utils/api.js"

export const productDetails = async()=>{
  const products = await fetchApiData("/api/products?populate=*",{cache:"force-cache"},);
  return  products
}

const MainSection = async () => {
    const products = await productDetails();
  return (
    <div>
      <Wrapper>
        {/* heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and paragraph end */}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((card) => (
            <ProductCard key={card?.id} card={card} />
          ))}
        </div>
        {/* Product Grid end*/}
      </Wrapper>
    </div>
  );
};

// export async function getStaticProps() {
//   const products = await fetchApiData("/api/products");
//   return {
//     props: { products }
//   };
// }

export default MainSection;
