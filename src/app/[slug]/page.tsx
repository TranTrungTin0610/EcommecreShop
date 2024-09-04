import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImage from '@/components/ProductImage'
import React from 'react'
// 1h48
const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row rap-16'> 
        {/* IMAGE */}
        <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'> 
          <ProductImage />  
        </div > 
        {/* TEST */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6'> 
          <h1 className='text-4xl font-medium'>Product Name</h1>
          <p className='text-gray-500'>Profile:  Developer web fullstack, Trader Forex, Content Creator</p> 
          <div className='h-[2px] bg-gray-100'/> 
          <div className='flex items-center gap-4'>
            <h3 className='text-xl text-gray-500 line-through'>$59</h3>
            <h2 className='font-medium text-2xl'>$49</h2>
          </div>
          <div className='h-[2px] bg-gray-100'/>
          <CustomizeProducts />
          <Add />
        </div>
    </div>
  )
}

export default SinglePage
