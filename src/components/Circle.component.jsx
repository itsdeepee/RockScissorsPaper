import React, { useState } from 'react'
import '../index.css'

export default function Circle({image,size, className, disabled,won, name,onClick}) {    
    const[isHovered, setIsHovered]=useState(false);

    const sizeInnerCircle={
        small: 'h-[100px] w-[100px] md:h-[152px] md:w-[152px] ',
        large: 'h-[100px] w-[100px] md:h-[225px] md:w-[225px]'
    }
    
    const sizeOuterCircle={
        small:'h-[127px] w-[130px] md:h-[194px] md:w-[194px]',
        large:'h-[127px] w-[130px] md:h-[287px] md:w-[293px] '
    }

    const sizeImage={
        small:'md:scale-125 scale-90',
        large:'md:scale-150 scale-90'
    }

   

  return (
    <div className='relative  rounded-full  flex items-center justify-center'>
           <div className={`${className} ${sizeOuterCircle[size]}  rounded-full hover:cursor-pointer z-50 flex justify-center items-center`}
               onMouseEnter={disabled? ()=>{} : ()=>setIsHovered(true)}
               onMouseLeave={disabled ? ()=>{} : ()=>setIsHovered(false)}
               onClick={()=>onClick(name)}
              >
                    <div className={`${sizeInnerCircle[size]} bg-white rounded-full  flex justify-center items-center shadow-inner-circle-small md:shadow-inner-circle`}>
                        <img className={`${sizeImage[size]}`} src={image} />
                    </div>
                </div>
              {
                isHovered &&(
                    <div className={`pulsate-element absolute  z-20 w-[167px] md:w-[252px] h-[164px] md:h-[248px] bg-white opacity-20 rounded-full  `} ></div>
                )
              }  
         {won && (
            <>
              <div className={`absolute z-20 w-[288px] md:w-[730px] h-[284px] md:h-[718px] bg-gray-500 opacity-10 rounded-full  animate-grow-large`}  ></div>
              <div className={`absolute z-30 w-[223px] md:w-[564px]  h-[219px] md:h-[554px] bg-gray-500 opacity-15 rounded-full  animate-grow-medium`} ></div>
              <div className={`absolute z-40 w-[167px] md:w-[424px] h-[164px] md:h-[416px] bg-gray-500 opacity-20 rounded-full  animate-grow-small`} ></div>
            </>
         )}       
       
             
            
    </div>
  )
}
