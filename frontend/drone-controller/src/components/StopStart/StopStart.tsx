import { useState } from "react";
import "./StopStart.css"

const StopStart:React.FC = ()=>{
    const [isStopped, setIsStopped] = useState(true);
    const [isArmed, setIsArmed] = useState(false);

    function emergencyStop(){
        setIsStopped(true);
    }

    function restart(){
        setIsStopped(false);
    }

    function armDrone(){
        setIsArmed(true)
    }

    function disarmDrone(){
        setIsArmed(false);
    }

    return(
        <>
            <div className="container stopstart-container rounded">
                <button className={(isStopped ? 'active-button' : 'disabled-button') + " ebutton estart-button"} onClick={restart}>Restart</button>
                <button className={(isStopped ? 'disabled-button' : 'active-button') + " ebutton estop-button"} onClick={emergencyStop}>E STOP</button>

                <div className="arm-container">
                    <button className={"activate-button arm-button " + ((isStopped || isArmed) ? 'disabled-button' : 'active-button')} onClick={armDrone}>Arm</button>
                    <button className={"activate-button disarm-button " + ((isStopped || !isArmed) ? 'disabled-button' : 'active-button')} onClick={disarmDrone}>Disarm</button>
                </div>
            </div>
        </>
    )
}

export default StopStart;