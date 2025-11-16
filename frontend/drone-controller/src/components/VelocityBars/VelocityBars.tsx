import { useState } from "react";
import "./VelocityBars.css"


const VelocityBars:React.FC = ()=>{
    const [xVel, setXVel] = useState(45);
    const [yVel, setYVel] = useState(-60);

    return(
        <>
            <div className="container instrument-container">
                <div className="dot"></div>
                <div className="arrow" id="arrow-horizontal" style={{width: Math.abs(xVel), transform: `translate(0%, -50%) rotate3d(0,0,${xVel > 0 ? 1 : 0},180deg) translateX(${xVel > 0 ? xVel : 0}px)`}}>
                    <div className="arrow-head" id="arrow-head-horizontal"></div>
                </div>
                <div className="arrow" id="arrow-vertical" style={{height:Math.abs(yVel), transform: `translate(-50%, 0) rotate3d(${yVel > 0 ? 1 : 0}, 0, 0, 180deg) translateY(${yVel > 0 ? yVel : 0}px)`}}>
                    <div className="arrow-head" id="arrow-head-vertical"></div>
                </div>

            </div>
        </>
    )
}

export default VelocityBars;