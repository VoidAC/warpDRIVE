/*
        warpDRIVE, a custom game engine.


warpDRIVE is a customizable, lightweight game engine written in node.js. This project is intended to be used as a framework for building 
2D games and is easily modifiable. This project was started in Sepember of 2019. 



ForgeBrew Inc.©
*/





const mathjs = require("mathjs")
const fs = require("fs")

const graphicsarray = ["Low" , "Medium" , "High"]


const Engine = require("./drivers/engine.js")

const gameEngine = new Engine()


gameEngine.on('crash', (report) => {
gameEngine.debugEngine();
console.log("Game engine critical faliure, engine has been stopped.")
});


gameEngine.debugEngine()
