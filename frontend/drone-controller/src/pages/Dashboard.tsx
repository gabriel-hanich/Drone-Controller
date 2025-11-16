import { Console } from "console";
import ArtificialHorizon from "../components/ArtificialHorizon/ArtificialHorizon";
import Navbar from "../components/Navbar/Navbar";
import PrimaryDisplay from "../components/PrimaryDisplay/PrimaryDisplay";
import StopStart from "../components/StopStart/StopStart";
import VelocityBars from "../components/VelocityBars/VelocityBars";
import { useCounter } from "../services/DroneConnection";
import TextConsole from "../components/TextConsole/TextConsole";

const Dashboard:React.FC = ()=>{
    
    return(
        <>
            <Navbar></Navbar>
            <div className="instrument-cluster">
                <div className="grid-elem" id="stopstartcont">
                    <StopStart></StopStart>
                </div>
                <div className="grid-elem" id="velocitycont">
                    <VelocityBars></VelocityBars>
                </div>
                <div className="grid-elem" id="horizoncont">
                    <ArtificialHorizon></ArtificialHorizon>
                </div>
                <div className="grid-elem" id="primarycont">
                    <PrimaryDisplay></PrimaryDisplay>
                </div>
                <div className="grid-elem" id="consolecont">
                    <TextConsole></TextConsole>
                </div>
            </div>
        </>
    )
}

export default Dashboard;