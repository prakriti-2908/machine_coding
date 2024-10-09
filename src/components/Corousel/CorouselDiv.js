import { useState } from "react";
import "./styles/CorouselDiv.css";

export const CorouselDiv = () => {
    const [index,setIndex] = useState(0);
    const pushForward = () => {
        if(index<3){
            setIndex(index+1);
        }
    }
    const pushBackward = () => {
        if(index>0){
            setIndex(index-1);
        }
    }
  return (
    <div className="corousel-div">
        <span className="material-icons" onClick={()=>{pushBackward()}}>chevron_left</span>
        <h3>{index}</h3>
        <span className="material-icons" onClick={()=>{pushForward()}}>chevron_right</span>
    </div>
  )
}
