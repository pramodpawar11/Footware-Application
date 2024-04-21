import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = () => {
  return (
    
        <Link href="/product/1" className='transform overflow-hidden bg-white  hover:scale-105 cursor-pointer duration-300'>
            <img className='w-full' src="/product-1.webp" alt='Product image'/>
            <div className='p-4 text-black/[0.9]'>
                <h2 className='text-lg font-medium'>Product Name</h2>
                <div className='flex items-center text-black/[0.5]'>
                    <p className='mr-2 text-lg font-semibold'>₹800</p>
                    <p className='mr-2 text-lg font-semibold line-through'>₹1000</p>
                    <p className='ml-auto text-base font-medium text-green-500'>20% off</p>
                </div>
            </div>
        </Link>
    
  )
}

export default ProductCard