import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({card}) => {
    const {attributes} = card
    const discountAmount = attributes.orignal_price - attributes?.price;
    const discountPercentage = ((discountAmount / attributes?.orignal_price) * 100).toFixed(0);
  return (
    
        <Link href={`/product/${attributes?.slug}`} className='transform overflow-hidden bg-white  hover:scale-105 cursor-pointer duration-300'>
            <Image width={500} height={500} src={attributes?.thumbnail?.data[0]?.attributes?.url} alt={attributes?.name}/> 
            <div className='p-4 text-black/[0.9]'>
                <h2 className='text-lg font-medium'>{attributes?.name}</h2>
                <div className='flex items-center text-black/[0.5]'>
                    <p className='mr-2 text-lg font-semibold'>₹{attributes?.price}</p>
                    <p className='mr-2 text-lg font-semibold line-through'>₹{attributes?.orignal_price}</p>
                    <p className='ml-auto text-base font-medium text-green-500'>{discountPercentage}% off</p>
                </div>
            </div>
        </Link>
    
  )
}

export default ProductCard