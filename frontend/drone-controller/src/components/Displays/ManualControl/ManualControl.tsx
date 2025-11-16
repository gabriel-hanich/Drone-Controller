import "./ManualControl.css"
import triangle from "../../../assets/triangle.svg"
import { useState } from "react"

const ManualControl:React.FC = ()=>{
    const maxHeight = 10; // The maximum height that can be read by the drone (m)

    const [elevation, setElevation] = useState(10);
    const [elevationSetPoint, setElevationSetPoint] = useState(10);
    
    function incrementElevationSetPoint(amount:number){
        setElevationSetPoint(elevationSetPoint + amount);
    }

    return(
        <>
            <div className="wrapper">
                <div className="control-container">
                    <div className="set-container" id="setcontup">
                        <img src={triangle} alt="Triangle pointing up" className="set-img" id="set-up"/>
                    </div>
                    <div className="set-container" id="setcontright">
                        <img src={triangle} alt="Triangle pointing right" className="set-img" id="set-right"/>
                    </div>
                    <div className="set-container" id="setconthover">
                        <div className="set-elem" id="set-hover">
                            <p className="set-text">Hover</p>
                        </div>
                    </div>
                    <div className="set-container" id="setcontleft">
                        <img src={triangle} alt="Triangle pointing left" className="set-img" id="set-left"/>
                    </div>
                    <div className="set-container" id="setcontdown">
                        <img src={triangle} alt="Triangle pointing down" className="set-img" id="set-down"/>
                    </div>
                </div>
                <div className="elevation-container">
                    <div className="current-elevation-container">
                        <p className="elevation-text">Current</p>
                        <p className="elevation-text">{maxHeight}m</p>
                        <div className="elevation-bar">
                            <div className="elevation-indicator" style={{top: `${100 - elevation/maxHeight * 100}%`}}>
                                <p className="elevation-text">{elevation}m</p>
                            </div>
                        </div>
                        <p className="elevation-text" >0m</p>
                    </div>
                    <div className="current-elevation-container">
                        <p className="elevation-text">Setpoint</p>
                        <p className="elevation-text elevation-text-clickable" onClick={() => incrementElevationSetPoint(0.5)}>+</p>
                        <div className="elevation-bar">
                            <div className="elevation-indicator" style={{top: `${100 - elevationSetPoint/maxHeight * 100}%`}}>
                                <p className="elevation-text">{elevationSetPoint}m</p>
                            </div>
                        </div>
                        <p className="elevation-text elevation-text-clickable" onClick={() => incrementElevationSetPoint(-0.5)}>-</p>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default ManualControl;