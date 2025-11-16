import ManualControl from "../Displays/ManualControl/ManualControl";
import "./PrimaryDisplay.css"

const PrimaryDisplay:React.FC = ()=>{



    return(
        <>
            <div className="container primary-container rounded">
                <div className="screenbar">
                    <div className="screenbar-option active-option"><p>Manual Control</p></div>
                    <div className="screenbar-option"><p>PID Tuning</p></div>
                    <div className="screenbar-option"><p>Graphs</p></div>
                    <div className="screenbar-option"><p>Other Statistics</p></div>
                </div>

                <div className="screen-container">
                    <ManualControl></ManualControl>
                </div>
            </div>
        </>
    )
    
}

export default PrimaryDisplay;