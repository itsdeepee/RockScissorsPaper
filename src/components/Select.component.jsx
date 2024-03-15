import React, { useContext } from 'react'
import Paper from '../assets/images/icon-paper.svg';
import Circle from '../components/Circle.component.jsx';
import Scissors from '../assets/images/icon-scissors.svg';
import Rock from '../assets/images/icon-rock.svg';
import BgTriangle from '../assets/images/bg-triangle.svg';
import PlayContext from '../context/PlayContext.jsx';

export default function Select() {
    const {setUserPicked, setUserPick}=useContext(PlayContext);

    const handleClick=(name)=>{
        localStorage.setItem('userPicked',JSON.stringify(true));
        localStorage.setItem('userPick',JSON.stringify(name));
        setUserPick(name);
        setUserPicked(true);
    }

  return (
    <div>
    <div className='relative  z-10 flex  justify-center w-[312px] h-[282px] md:w-[476px] md:h-[460px]'>
    <img className="absolute  size-44 md:size-80 top-1/4 " src={BgTriangle} alt="bg-triangle"/>
    <div className='absolute  top-0 left-0'> 
       <Circle name="paper" onClick={handleClick} disabled={false} image={Paper} size={"small"} className="bg-gradient-to-b from-primary-paper-start to-primary-paper-end shadow-outer-circle-small md:shadow-outer-circle shadow-primary-paper-start "/>
     </div>
     <div className='absolute right-0 top-0 '> 
     <Circle name="scissors" onClick={handleClick} disabled={false} image={Scissors} size={"small"} className="bg-gradient-to-b from-primary-scissors-start to-primary-scissors-end shadow-outer-circle-small md:shadow-outer-circle shadow-primary-scissors-start "/>
     </div>
     <div className='absolute bottom-0 '> 
      <Circle name="rock" onClick={handleClick} disabled={false} image={Rock} size={"small"} className="bg-gradient-to-b from-primary-rock-start to-primary-rock-end shadow-outer-circle-small md:shadow-outer-circle shadow-primary-rock-start "/>
     </div>
   
     </div>
     </div>
  )
}
