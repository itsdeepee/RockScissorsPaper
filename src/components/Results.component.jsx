import React, { useContext ,useEffect } from 'react'
import Paper from '../assets/images/icon-paper.svg';
import Circle from '../components/Circle.component.jsx';
import Scissors from '../assets/images/icon-scissors.svg';
import Rock from '../assets/images/icon-rock.svg';
import PlayContext from '../context/PlayContext.jsx';
import { AppContext } from '../App.jsx';



export default function Results() {
    const {userPick,housePick,setHousePick, getHousePick,winner,decideWinner,reset,userWon,houseWon}=useContext(PlayContext);
    const {userScore,setUserScore,houseScore, setHouseScore}=useContext(AppContext);


    useEffect(()=>{  
        if(housePick==null){
            const timer=setTimeout(()=>{
                const house=getHousePick();
                localStorage.setItem("housePick",JSON.stringify(house));
                setHousePick(house);

            },1000);
    
            return ()=>clearTimeout(timer);
        }
     
    },[]);

    useEffect(()=>{
        if(housePick){
            

            const timer=setTimeout(()=>{
                decideWinner();

            },500);
    
            return ()=>clearTimeout(timer);
        }

        
    },[housePick]);

    

    useEffect(()=>{
        if(winner==='user'){
            
           localStorage.setItem('userScore',userScore+1);
           setUserScore(userScore+1);
        }else if(winner==="house"){
            console.log("house score");
            localStorage.setItem('houseScore',houseScore+1);
            setHouseScore(houseScore+1);
        }
    },[winner])

    const handlePlayAgainClick=()=>{
       reset();
      
    }

    const renderChoice=(pick,won)=>{
        const choices={
            paper:{
                image:Paper,
                className:"bg-gradient-to-b from-primary-paper-start to-primary-paper-end  shadow-outer-circle-small md:shadow-outer-circle shadow-primary-paper-start"
            },
            rock:{
                image:Rock,
                className:"bg-gradient-to-b from-primary-rock-start to-primary-rock-end  shadow-outer-circle-small md:shadow-outer-circle shadow-primary-rock-start"
            },
            scissors:{
                image:Scissors,
                className:"bg-gradient-to-b from-primary-scissors-start to-primary-scissors-end  shadow-outer-circle-small md:shadow-outer-circle shadow-primary-scissors-start"
            }
        };
        const choice=choices[pick]
        if(!choice) return null;

        return(
            <Circle
                won={won}
                disabled={true}
                image={choice.image}
                size={"large"}
                className={choice.className}/>
        );
    }

  return (
    <div className='flex flex-wrap lg:flex-nowrap min-w-[325px] md:min-w-[660px]    '>
        <div className={`flex flex-1 order-1 flex-col items-center gap-8 md:gap-18 lg:gap-32 ${winner? '-translate-x-4 md:-translate-x-12 transition duration-200':''}`}>
            <span className='font-semi-bold text-[15px]  order-2 md:order-1 leading-8  tracking-[1.88px] md:tracking-[3px]'>YOU PICKED</span>
            <div className='order-1 lg:order-2'>
                {renderChoice(userPick,userWon)}
            </div>
        </div>
        {winner && 
        <div className={`flex order-3 lg:order-2  w-full flex-col justify-center items-center z-50 mx-auto mt-20 md:mt-10 lg:-mt-20  lg:mx-10 ${winner? 'animate-appear-animation ':''}`}>
            <span className='font-bold text-[56px] tracking-tighter'>
                {winner=='tie' && "ITS A TIE"}
                {winner=="user" && "YOU WIN"}
                {winner=="house" && "YOU LOSE"}
            </span>
            <button onClick={handlePlayAgainClick} className='bg-white py-4 px-16 text-neutral-dark-text font-bold rounded-md  mx-10'>PLAY AGAIN</button>
        </div>
        }
        
        <div className={`flex flex-1 order-2 flex-col items-center  gap-8 md:gap-18 lg:gap-32 ${winner? 'translate-x-4 md:translate-x-12 transition duration-200':''}`}>
           <span className='font-semi-bold text-[15px] order-2 md:order-1 leading-8 tracking-[1.88px] md:tracking-[3px]'>THE HOUSE PICKED</span>
           <div className='order-1 lg:order-2'>
           {
            housePick==null ?
            <div className='w-[110px] h-[110px] md:w-[225px] md:h-[225px] rounded-full bg-background-radial-end mx-auto mt-4'></div>
            : renderChoice(housePick,houseWon)
           }    
           </div> 
        </div>
    </div>
  )
}
