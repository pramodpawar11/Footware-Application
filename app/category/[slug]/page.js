import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchApiData } from "@/utils/api";
import React from "react";

const productSlugs = async (slug) => {
  // fetch all the products 
  // const products = await fetchApiData(
  //   `/api/products?populate=*&filters[categories][slug][$eq]=${slug}`
  // );
  // fethc according to page 
  const products = await fetchApiData(`/api/products?populate=*&filters[categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`)
  
  return products;
};
const CategoryId = async ({ params }) => {
  const products = await productSlugs(params.slug);
  function capitalizeAndReplace(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
const headLine = params.slug;
const formattedSlug = capitalizeAndReplace(headLine);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className=" mb-5 font-bold "></div>
          <h2 className="text-[28px] md:text-[34px] leading-tight font-bold">
            {formattedSlug}
          </h2>
        </div>
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

export default CategoryId;
