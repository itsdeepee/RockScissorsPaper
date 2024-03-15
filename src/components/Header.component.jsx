import React, { useContext } from 'react'
import { AppContext } from '../App'

export default function Header() {

    const {userScore, houseScore}=useContext(AppContext);


  return (
    <div className='flex justify-between tracking-[0px] w-[311px] md:p-4 md:w-[700px] h-24 md:h-[150px] border-2 mt-8 border-neutral-header-outline rounded-xl'>
        <div className='flex flex-col justify-start my-auto font-bold  text-[21px] md:text-4xl leading-4 md:leading-8  ml-4 md:ml-6 w-[83px] md:w-[159px] h-[48px] md:h-[114px]'>

          <span>ROCK</span>
          <span>PAPPER</span>
          <span>SCISSORS</span>
        </div>
        <div className='flex flex-col  items-center bg-white m-auto mr-2 md:mr-6 w-20 md:w-[150px] h-[72px] md:h-[114px]   rounded-md'>
           <span className=' text-neutral-score-text text-base font-semi-bold  track tracking-normal md:tracking-[2.5px]  mt-1 md:mt-3'>SCORE</span>
           <div className='flex  w-full px-2 justify-between'>
              <div className='flex flex-col items-center '>
              <span className='text-[24px] leading-[24px] md:text-4xl  text-neutral-dark-text font-bold tracking-tighter '>{userScore}</span>
              <span className='  text-neutral-dark-text text-[10px] leading--[10px] md:text-xs font-semi-bold  track tracking-tighter mt-1  md:my-2'>YOU</span>
              
              </div>
              <div className='font-bold text-[24px] leading-[24px] md:text-4xl text-neutral-dark-text ml-1'>-</div>
              <div className='flex flex-col items-center  '>
              <span className=' text-[24px] leading-[24px] md:text-4xl  text-neutral-dark-text font-bold tracking-tighter '>{houseScore}</span>
              <span className=' text-neutral-dark-text  text-[10px] md:text-xs font-semi-bold  track tracking-tighter mt-1  md:my-2'>HOUSE</span>
              
              </div>
           </div>
           
        </div>
    </div>
  )
}
