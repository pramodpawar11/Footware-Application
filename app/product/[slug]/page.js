"use client";
import ProductDetailsCarousel from "@/components/ProductDetailCrousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { fetchApiData } from "@/utils/api";
import { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

// export const expectProducts = async (slug) => {
//   const products = await fetchApiData(
//     `/api/products?populate=*&[filters][slug][$ne]=${slug}`
//   );
//   return products;
// };
// export const particularProduct = async (slug) => {
//   const product = await fetchApiData(
//     `/api/products?populate=*&[filters][slug][$eq]=${slug}`
//   );
//   return product;
// };

const ProductId = ({ params }) => {
  // const product = await particularProduct(params.slug);
  // const products = await expectProducts(params.slug);
  const [seleteSize, setSelectSize] = useState();
  const [showError, setShowError] = useState(true);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const res = await fetchApiData(
      `/api/products?populate=*&[filters][slug][$eq]=${params.slug}`
    );
    setProduct(res);
    const ress = await fetchApiData(
      `/api/products?populate=*&[filters][slug][$ne]=${params.slug}`
    );
    setProducts(ress);
  };
  if (product.length && products.length === 0) return;

  const p = product?.data[0]?.attributes;
  const discountAmount = p.orignal_price - p?.price;
  const discountPercentage = (
    (discountAmount / p?.orignal_price) *
    100
  ).toFixed(0);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left colum start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full max-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          {/* left colum end */}
          {/* right colum start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT tITLE  */}
            <div className="text-[25px] md:text-[34px] font-semibold mb-2">
              {p?.name}
            </div>
            {/* PRODUCT SUBTITLE  */}
            <div className="text-lg font-semibold mb-5">{p?.subtitle}</div>
            {/* PRODUCT PRICE  */}
            <div className="flex">
              <div className="text-lg font-semibold">MRP : ₹{p?.price}</div>
              <p className="mr-2 text-md font-semibold line-through ml-3">
                ₹{p?.orignal_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {discountPercentage}% off
              </p>
            </div>

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
                {p?.size?.data?.map((item, i) => (
                  <div
                    key={i}
                    className={`border cursor-not-allowed rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${seleteSize===item.size ? "border-black":""} `}
                    onClick={() => {
                      setSelectSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* Error PART  */}

              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
            </div>
            {/* Main section end  */}
            {/* Cart Button  */}
            <button onClick={()=>{
              if(!showError) setShowError(true);

            }} className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
              {p?.description[0]?.children[0]?.text}
              </div>
            </div>
          </div>
          {/* right colum end */}
        </div>
        <RelatedProducts products={products}/>
      </Wrapper>
    </div>
  );
};

export default ProductId;
