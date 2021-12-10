import axios from "axios";
import React, {  useCallback, useEffect, useState } from "react";
import 'animate.css';
import './assets/css/slider.css'
import { SliderImg } from "./components/SliderImg";
export const Slider = () => {


const [active, setactive] = useState(0)
const [lengthData, setLengthData] = useState(0)
console.log(active)
const handleNext = useCallback(() => {
  if(active===lengthData-1){
    setactive(0);
}else{
    
      setactive(active+1)
    
}
setDirection("next")
}, [active,lengthData])


   useEffect(() => {
    const interval = setInterval(() => {  
    handleNext();
    }, 4500)
    return () => clearInterval(interval)
  }, [handleNext]);



  
  const [direction, setDirection] = useState("none")

  



  const handlePrev=()=>{
    if(active===0){
        setactive(lengthData-1);
    }else{
        
          setactive(active-1)

        
    }

    setDirection("prev")

}





  return (
  <div>
<div className="d-flex justify-content-center mt-5">
<div className="col-10">
<div className="container-slider d-flex bg-dark p-0">
  <SliderImg direction={direction} active={active} setLengthData={setLengthData} />
  
  </div>  
</div>
</div>

  <div className="d-flex justify-content-center">
  <button  className="btn btn-primary m-2"  onClick={handleNext}>+1</button>
  <button  className="btn btn-danger m-2"  onClick={handlePrev}>-1</button>

  </div>
  
  </div>);
};
