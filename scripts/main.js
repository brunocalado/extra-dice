const moduleName = 'extra-dice';

Hooks.once('diceSoNiceReady', (dice3d) => {
  // ---------------------------------------------------------
  // Alien Model
  dice3d.addSystem({id:"alien-extradice", name:"Alien - ED"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"alien-extradice", 
    modelFile: 'modules/' + moduleName + '/models/alien/alien.glb'    
  });

  // ---------------------------------------------------------
  // Alien Fast Pulse
  dice3d.addSystem({id:"alien_fast_pulse-extradice", name:"Alien Fast Pulse - ED"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"alien_fast_pulse-extradice", 
    modelFile: 'modules/' + moduleName + '/models/alien/alien_fast_pulse.glb'    
  });                                                   
 
  // ---------------------------------------------------------
  // Alien Stress
  dice3d.addSystem({id:"alien_stress-extradice", name:"Alien Stress - ED"}, false);
  
  dice3d.addDicePreset({
    type:"ds",
    system:"alien_stress-extradice", 
    modelFile: 'modules/' + moduleName + '/models/alien/alien_stress.glb'    
  });  
 
});
