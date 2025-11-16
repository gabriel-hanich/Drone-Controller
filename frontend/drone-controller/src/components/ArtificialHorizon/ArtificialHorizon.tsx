import { transform } from "typescript";
import "./ArtificialHorizon.css"
import { useState } from "react";

const ArtificialHorizon:React.FC = ()=>{
    const [roll, setRoll] = useState(10);
    const [pitch, setPitch] = useState(20);


    return(
        <>
            <div className="container instrument-container">
                <div className="horizon-container">
                    <div className="landscape" style={{transform: `rotate3d(0, 0, 1, ${roll}deg)`, translate: `0px ${pitch}px`}}>
                        <div className="landscape-top landscape-item">
                            <div className="tick major"></div>
                            <div className="tick"></div>
                            <div className="tick major"></div>
                            <div className="tick"></div>
                        </div>
                        <div className="landscape-bottom landscape-item">
                            <div className="tick"></div>
                            <div className="tick major"></div>
                            <div className="tick"></div>
                            <div className="tick major"></div>
                        </div>
                    </div>
                    <div className="indicator">
                        <div className="indicator-wing"></div>
                        <div className="indicator-dot"></div>
                        <div className="indicator-wing"></div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default ArtificialHorizon;