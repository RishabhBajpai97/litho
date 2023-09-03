import React, { useState } from 'react'
import lamp from "../../../assets/lamp.avif"
import lamp2 from "../../../assets/lamp2.jpeg"

const GridItem = () => {
    const [src, setSrc] = useState(lamp)
    return (
        <div className='group relative overflow-hidden'>
            <div className=' absolute right-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 duration-500'>
                <div className='bg-black rounded-[50%] text-center w-[50px] py-2  text-white'>B1</div>
                <div className='h-[10px]'></div>
                <div className='bg-black rounded-[50%] text-center w-[50px] py-2  text-white'>B2</div>
            </div>
            <div className='w-[300px] h-auto'><img src={src} onMouseOver={() => { setSrc(lamp2) }} onMouseOut={() => { setSrc(lamp) }}></img></div>
            <div className='w-full text-center bg-black absolute duration-500 group-hover:-translate-y-9 text-white py-2 '>Add to cart</div>
        </div>
    )
}

export default GridItem