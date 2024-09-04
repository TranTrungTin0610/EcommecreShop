"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const images = [ 
    { 
        id: 1, 
        url: "https://images.pexels.com/photos/3228769/pexels-photo-3228769.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
        id: 2, 
        url: "https://images.pexels.com/photos/26582301/pexels-photo-26582301/free-photo-of-railway-station-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    { 
        id: 3, 
        url: "https://images.pexels.com/photos/28055759/pexels-photo-28055759/free-photo-of-a-man-is-standing-in-a-doorway-with-his-arms-out.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    { 
        id: 4, 
        url: "https://images.pexels.com/photos/28168593/pexels-photo-28168593/free-photo-of-montagne.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    }

]
const ProductImage = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image src={images[index].url}  
        alt='' fill sizes='50vw' className='object-cover rounded-md'/>
      </div>
      <div className='flex justify-between gap-4 mt-8'> 
        {images.map((img, i) => (
         <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={img.id} onClick={()=> setIndex(i)}>
         <Image src={img.url}  
            alt='' fill sizes='30vw' className='object-cover rounded-md'/> 
         </div>
        ))}   
      </div>
    </div>
  )
}

export default ProductImage
