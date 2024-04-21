"use client"
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import React from 'react'


const CategoryId = ({params}) => {

  return (
    <div className='w-full md:py-20'>
        <Wrapper>
          <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <div className=' mb-5 font-bold '></div>   
            <h2 className='text-[28px] md:text-[34px] leading-tight font-bold'>Running Shoes</h2>
          </div>
           {/* Product Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                </div>
                {/* Product Grid end*/}
        </Wrapper>
    </div>
  )
}

export default CategoryId