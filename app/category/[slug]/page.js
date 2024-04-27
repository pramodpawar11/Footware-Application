"use client";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchApiData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

// const productSlugs = async (slug) => {
//   // fetch all the products
//   // const products = await fetchApiData(
//   //   `/api/products?populate=*&filters[categories][slug][$eq]=${slug}`
//   // );
//   // fethc according to page
//   const products = await fetchApiData(`/api/products?populate=*&filters[categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`)

//   return products;
// };

const CategoryId = ({ params }) => {
  // const products = await productSlugs(params.slug);
  const [products, setProducts] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const maxResult = 3;

  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&filters[categories][slug][$eq]=${params.slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchApiData,
    {
      fallbackData: products,
    }
  );
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetchApiData(
      `/api/products?populate=*&filters[categories][slug][$eq]=${params.slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
    );
    setProducts(res);
  };

  function capitalizeAndReplace(str) {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  if (products.length == 0) return;
  const headLine = params.slug;
  const formattedSlug = capitalizeAndReplace(headLine);
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className=" mb-5 font-bold "></div>
          <h2 className="text-[28px] md:text-[34px] leading-tight font-bold">
            {formattedSlug}
          </h2>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data?.data?.map((card) => (
            <ProductCard key={card?.id} card={card} />
          ))}
        </div>
        {/* Product Grid end*/}
        {/* PAGINATION BUTTONS START */}
        {data?.meta?.pagination?.total > maxResult&& (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${
              data && data.meta.pagination.pageCount
            }`}</span>

            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
        {/* PAGINATION BUTTONS END */}
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
            <img src="/logo.svg" width={150} />
            <span className="text-2xl font-medium">Loading...</span>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default CategoryId;
