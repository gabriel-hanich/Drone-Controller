import { ReactNode, useContext, useEffect, useState, createContext } from "react";
import { DroneConnection, DroneData, generateRandomDroneConnection, initialConnection } from "../types";
import { timeStamp } from "console";


var backendURL: String = "http://localhost:8080";
var droneURL: String = "";
var lastPacket:number = Date.now();
const ConnectionContext = createContext<DroneConnection | undefined>(undefined);

getDroneData(backendURL, droneURL);
export function ConnectionProvider({children} : {children:ReactNode}){
    const [value, setValue] = useState<DroneConnection>(initialConnection);
    
    useEffect(() => {
        const interval = setInterval(() => {
            getDroneData(backendURL, droneURL).then((data)=> setValue(data));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ConnectionContext.Provider value={value}>
            {children}
        </ConnectionContext.Provider>
    )
    
}

export function useConnection():DroneConnection{
    const ctx = useContext(ConnectionContext);
    if(ctx === undefined){
        throw new Error("Can't use counter context outside of a <ConnectionContext.Prover>");
    }
    return ctx;
}


// Makes a http get request to the backendURL to get the drone data
async function getDroneData(backendURL:String, droneURL:String): Promise<DroneConnection>{
    let prom:Promise<DroneConnection> = new Promise((resolve, reject)=>{
        fetch(("http://localhost:8080" as any)).then((response: Response) =>{
            response.json().then((data)=>{
                let dData:DroneConnection = (data as DroneConnection);
                dData.pollingRate = Date.now() - lastPacket;
                lastPacket = Date.now()
                dData.backendConnected = true;
                dData.backendURL = backendURL;
                dData.frontendFirmwareVersion = "0.1.0";
                
                if(dData.pastCommands[-1] != dData.droneInfo.lastInstruction){
                    dData.pastCommands.push(dData.droneInfo.lastInstruction);
                }


                resolve(dData);
            })
        })
    });
    return prom;
    
    
}

export function setBackendURL(newURL:String){
    backendURL = newURL;
}

export function setDroneURL(newURL:String){
    droneURL = newURL;
}