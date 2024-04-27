import ProductDetailsCarousel from "@/components/ProductDetailCrousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductId = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left colum start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full max-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left colum end */}
          {/* right colum start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT tITLE  */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* PRODUCT SUBTITLE  */}
            <div className="text-lg font-semibold mb-5"> 
              Men&apos;s Golf Shoes
            </div>
            {/* PRODUCT PRICE  */}
            <div className="text-lg font-semibold">MRP : ₹ 1000</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all application duties)`}
            </div>
            {/* MAIN SECTION  */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-sm font-semibold">Selete Size</div>
                <div className="text-sm font-semibold text-black/[0.5]">
                  Selete Guide
                </div>
              </div>
              {/* SIZE SELECTION  */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border cursor-not-allowed rounded-md text-center py-3 font-medium hover:border-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              {/* Error PART  */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
            </div>
            {/* Main section end  */}
            {/* Cart Button  */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Shoes are more than just pieces of footwear; they are an
                essential part of our daily lives and a reflection of our
                personality and style. From the practicality of protecting our
                feet to the fashion statement they make, shoes serve a multitude
                of purposes. First and foremost, shoes provide protection and
                support for our feet as we navigate the world around us. Whether
                walking on rough terrain, running errands in the city, or
                engaging in sports activities, the right pair of shoes can make
                all the difference in comfort and performance. With various
                styles designed for specific activities, such as running shoes
                for jogging or hiking boots for outdoor adventures, shoes are
                tailored to meet the demands of different lifestyles and
                pursuits.
              </div>
            </div>
          </div>
          {/* right colum end */}
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductId;
