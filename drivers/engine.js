const math = require("mathjs")
const GraphicsDriver = require("./graphics.js")

function Engine() {
this.debugEngine = function(){
//implement engine debugging
console.log("Debugging complete with exit code:" + Math.round(Math.random(/* Random exit code of 1 or 0 */)))
}
this.renderEngine = function(){
GraphicsDriver.loadAssets(); // Fix and implement
console.log("Loaded assets from Graphics Driver.")
}

this.updateEngine = function(){
//TODO: Implement http get for le site.
}
  

this.startEngine = function(){
    GraphicsDriver.loadAssets();
    GraphicsDriver.initialize();
    console.log("Loaded assets from Graphics Driver.")
}


} 

module.exports = Engine;