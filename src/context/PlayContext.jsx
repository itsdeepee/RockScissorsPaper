import React, {createContext,useState} from "react";

export const PlayContext=createContext(null);
export const PlayContextProvider=({children})=>{

    const [userPick,setUserPick]=useState(()=>{
        const saved=localStorage.getItem("userPick");
        return saved!==null ? JSON.parse(saved):null;
    });
    const [housePick,setHousePick]=useState(()=>{
        const saved=localStorage.getItem("housePick");
        return saved!==null ? JSON.parse(saved):null;
    });
    const [userPicked, setUserPicked]=useState(()=>{
        const saved=localStorage.getItem("userPicked");
        return saved!==null ? JSON.parse(saved): false;
    });
    const [winner,setWinner]= useState(null);
    const [userWon,setUserWon]=useState(false);
    const [houseWon,setHouseWon]=useState(false);

    function getHousePick(){
        const choices=['rock','scissors','paper'];
        const randomIndex=Math.floor(Math.random()* choices.length);
        return choices[randomIndex];
    }

    function decideWinner() {

        // Define the winning conditions
        const winningConditions = {
          paper: 'rock',     // Paper beats rock
          rock: 'scissors',  // Rock beats scissors
          scissors: 'paper'  // Scissors beats paper
        };
      
        if (housePick === userPick) {
          // It's a tie
          setWinner("tie"); // Using null to indicate a tie
        } else if (winningConditions[housePick] === userPick) {
          // PC wins
          setWinner("house");
          setHouseWon(true);
        } else {
          // User wins
          setWinner("user");
          setUserWon(true);
          
        }
      }

      function reset(){
        localStorage.clear();
        setUserPick(null);
        setHousePick(null);
        setUserPicked(false);
        setWinner(null);
        setUserWon(false);
        setHouseWon(false);
      }

    const value={
        userPick,
        setUserPick,
        housePick,
        setHousePick,
        userPicked,
        setUserPicked,
        getHousePick,
        decideWinner,
        winner,
        reset,
        userWon,
        houseWon
        
    };

    return (
        <PlayContext.Provider value={value}>{children}</PlayContext.Provider>
    );

}

export default PlayContext;