
export interface DroneConnection{
    backendURL: String;
    droneURL: String;
    backendConnected:boolean; // Whether or not the website can connect to the ground station
    droneConnected:boolean; // Whether or not the ground station can connect to the drone
    pollingRate:Number;
    
    droneInfo:DroneData;
}

export interface DroneData{
    isArmed: boolean;
    lastInstruction: String;

    // ms
    refreshRate: number;
    packetAge:number;
        
    // degree/radian?
    pitch: number;
    roll: number;
    yaw: number;

    // All in ms^-1
    xVel: number;
    yVel: number;
    zVel: number;

    // m
    elevation: number;

    //
    throttle: number;
    
    //
    xFinDeflection: number;
    yFinDefilection: number; 

}

enum DroneOperation{
    ARM = "ARM",
    DISARM = "DISARM",
    EMERGENCY_STOP = "EMERGENCY_STOP",
    HOVER = "HOVER",
    RESET = "RESET",
    SET = "SET"
}

enum DroneProperty{
    ROLL = "ROLL",
    PITCH = "PITCH",
    YAW = "YAW",
    XVEL = "XVEL",
    YVEL = "YVEL",
    ZVEL = "ZVEL",
    ELEVATION = "ELEVATION"
}

export abstract class DroneCommand{
    operation:DroneOperation;

    constructor(operation:DroneOperation){
        this.operation = operation
    }


    abstract toComandString():String;
}

export class PassiveCommand extends DroneCommand{
    constructor(operation:DroneOperation){
        super(operation);
    }

    toComandString(): String {
        return this.operation.toString();
    }

}

export class ActiveCommand extends DroneCommand{
    property: DroneProperty;
    amount: number;

    constructor(operation:DroneOperation, property:DroneProperty, amount:number){
        super(operation);

        this.property = property;
        this.amount = amount;
    }

    toComandString(): String {
        return this.operation.toString() + " " + this.property.toString() + ": " + this.amount;
    }
}



function generateRandomDroneCommand():String {
    var operation:DroneOperation = DroneOperation.ARM;
    var path: number = Math.floor(Math.random() * 5);
    switch(path){
        case 0: 
            operation = DroneOperation.ARM;
            break;
        case 1: 
            operation = DroneOperation.DISARM;
            break;
        case 2: 
            operation = DroneOperation.EMERGENCY_STOP;
            break;
        case 3: 
            operation = DroneOperation.HOVER;
            break;
        case 4: 
            operation = DroneOperation.RESET;
            break;
        case 5: 
            operation = DroneOperation.SET;
            break;
    }

    if(operation === DroneOperation.SET){
        var amount = Math.random() * 10;
        var property:DroneProperty = DroneProperty.ELEVATION;
        var path:number = Math.floor(Math.random() * 7);
        switch(path){
            case 0:
                property = DroneProperty.ELEVATION;
                break;
            case 1:
                property = DroneProperty.PITCH;
                break;
            case 2:
                property = DroneProperty.ROLL;
                break;
            case 3:
                property = DroneProperty.YAW;
                break;
            case 4:
                property = DroneProperty.XVEL;
                break;
            case 5:
                property = DroneProperty.YVEL;
                break;
            case 6:
                property = DroneProperty.ZVEL;
                break;
        }
        return (new ActiveCommand(operation, property, amount)).toComandString();
    }
    return (new PassiveCommand(operation)).toComandString();

}

function generateRandomDroneData(): DroneData {    
    var dData: DroneData = {
        isArmed: true,
        lastInstruction: generateRandomDroneCommand(),
        refreshRate: Math.round(Math.random() * 500),
        packetAge: Math.round(Math.random() * 500),
        pitch: Math.PI - (Math.random() * 2 * Math.PI),
        roll: Math.PI - (Math.random() * 2 * Math.PI),
        yaw: Math.PI - (Math.random() * 2 * Math.PI),
        xVel: (Math.random() - 0.5) * 4,
        yVel: (Math.random() - 0.5) * 4,
        zVel: (Math.random() - 0.5) * 4,
        elevation: Math.random() * 4,
        throttle: Math.random(),
        xFinDeflection: Math.PI - (Math.random() * 2 * Math.PI),
        yFinDefilection: Math.PI - (Math.random() * 2 * Math.PI)
    }

    return dData;

}

export function generateRandomDroneConnection():DroneConnection{
    return {
        backendURL: "localhost:8080",
        droneURL: "localhost:2000",
        backendConnected: true,
        droneConnected: true,
        pollingRate: Math.round(Math.random() * 1000),
        droneInfo: generateRandomDroneData(),
    }
}


const initialDroneData:DroneData = {
    isArmed: false,
    lastInstruction: DroneOperation.DISARM,
    refreshRate: -1,
    packetAge: -1,
    pitch: 0,
    roll: 0,
    yaw: 0,
    xVel: 0,
    yVel: 0,
    zVel: 0,
    elevation: 0,
    throttle: 0,
    xFinDeflection: 0,
    yFinDefilection: 0
}

export const initialConnection:DroneConnection = {
    backendURL: "localhost:8080",
    droneURL: "localhost:2000",
    backendConnected: false,
    droneConnected: false,
    pollingRate: -1,
    droneInfo: initialDroneData,
}
