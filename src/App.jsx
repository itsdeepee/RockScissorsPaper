
import './index.css';
import Play from './pages/Play.jsx';



import Header from './components/Header.component';
import { createContext, useState } from 'react';
import { PlayContextProvider } from './context/PlayContext.jsx';

export const AppContext= createContext(null);
function App() {
   const [userScore,setUserScore]=useState(0);
   const [houseScore,setHouseScore]=useState(0);

 

  return (
    <div className='flex  flex-col  items-center  gap-24 md:gap-10  bg-radial-gradient  font-barlow   text-white h-dvh lg:h-screen w-screen overflow-x-hidden overflow-y-scroll' >
      <AppContext.Provider value={{userScore, setUserScore, houseScore,setHouseScore}}>
      <Header/>
      <PlayContextProvider>
        <Play/>
      </PlayContextProvider>
     </AppContext.Provider>
      </div>
    

    
  )
}

export default App
