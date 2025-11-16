import { ReactNode, useContext, useEffect, useState, createContext } from "react";
import { DroneConnection, generateRandomDroneConnection, initialConnection } from "../types";

export interface DroneConnectionContext{
    data:DroneConnection
}


const CounterContext = createContext<DroneConnectionContext | undefined>(undefined);

export function CounterProvider({children} : {children:ReactNode}){
    const [value, setValue] = useState<DroneConnectionContext>({data: initialConnection});

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(() => ({
            data: generateRandomDroneConnection()
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
    
}

export function useCounter():DroneConnection{
    const ctx = useContext(CounterContext);
    if(ctx === undefined){
        throw new Error("Can't use counter context outside of a <dataContext.Prover>");
    }
    return ctx.data;
}
