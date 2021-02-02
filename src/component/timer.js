import React, { useState } from 'react';
function Timer(){

    const [timer,setTimer]=useState(1)
    setInterval(()=>
    
    setTimer(timer + 1)

    ,1000)
}
export default Timer