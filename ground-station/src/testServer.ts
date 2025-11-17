/**
 * Gabriel Hanich - 15/11/2025 
 * 
 * A basic test server with randomly generated data produced every 
 * `updateInteval` seconds,  and the ability to recieve drone commands
 * as text. Used when developing the associated web app. 
 * */ 
import { json } from "stream/consumers";
import { DroneConnection, DroneData, generateRandomDroneConnection, generateRandomDroneData } from "./types"
var cors = require('cors')



// Initalise the web server
const express = require('express');
const app = express();

const port: number = 8080;

var outputdata:DroneConnection = generateRandomDroneConnection();

setInterval(()=>{
    outputdata = generateRandomDroneConnection();
}, 1000)

app.get("/", (req, res)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.send(JSON.stringify(outputdata));
});



app.listen(port, ()=>{
    console.log("The test server is running at http://localhost:" + port + "/")
})



