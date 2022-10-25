const moduleName = 'extra-dice';

Hooks.once('diceSoNiceReady', (dice3d) => {
  // ---------------------------------------------------------
  // Alien Model
  dice3d.addSystem({id:"alien", name:"Alien"}, false);
  
  dice3d.addDicePreset({
    type:"d6",
    system:"alien", 
    modelFile: 'modules/' + moduleName + '/models/alien/alien.glb'    
  });

});
