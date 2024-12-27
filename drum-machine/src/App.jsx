import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div id='drum-machine' className='container'>
     <div id="display">
      <div className='drum-pad' id="heater1">Q <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" id='Q'></audio></div>
      <div className="drum-pad" id="heater2">W <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" id="W"></audio></div>
      <div className="drum-pad" id="heater3">E <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" id="E"></audio></div>
      <div className="drum-pad" id="heater4">A <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" id="A"></audio></div>
      <div className="drum-pad" id="clap">S <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" id="S"></audio></div>
      <div className="drum-pad" id="open-hh">D <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" id="D"></audio></div>
      <div className="drum-pad" id="kick-n-hat">Z <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" id="Z"></audio></div>
      <div className="drum-pad" id="kick">X <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" id="X"></audio></div>
      <div className="drum-pad" id="closed-hh">C <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" id="C"></audio></div>
     </div>
    </div>
  )
}

export default App
