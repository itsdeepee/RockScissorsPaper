import React, { useContext, useState } from 'react'

import Select from '../components/Select.component.jsx';
import Results from '../components/Results.component.jsx';
import PlayContext from '../context/PlayContext.jsx';

export default function Play() {
  const {userPicked,reset} =useContext(PlayContext);

  return (
    <div >
      
      {userPicked? <Results onClick={()=>reset()}/> : <Select/>}
     </div>

  )
}
