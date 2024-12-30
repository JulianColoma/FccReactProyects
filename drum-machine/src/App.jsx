import './App.css'
import { useRef, useState, useEffect } from 'react';


function App() {
  const audioRefs = useRef([]);
  const [text, setText] = useState('');
  const handleClick = (index) => {
    const audio = audioRefs.current[index]
    if (audio) {
      audio.currentTime = 0
      audio.play()
      const txt = pads.at(index).id
      setText(txt)
    }
  };
  const handleKey = (e) => {
    const key = e.key.toUpperCase()
    const index = pads.indexOf(pads.find((p) => p.key == key))
    handleClick(index)
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const pads = [
    { id: 'heater1', key: 'Q', src: '../audios/Heater-1.mp3' },
    { id: 'heater2', key: 'W', src: '../audios/Heater-2.mp3' },
    { id: 'heater3', key: 'E', src: '../audios/Heater-3.mp3' },
    { id: 'heater4', key: 'A', src: '../audios/Heater-4_1.mp3' },
    { id: 'clap', key: 'S', src: '../audios/Heater-6.mp3' },
    { id: 'open-hh', key: 'D', src: '../audios/Dsc_Oh.mp3' },
    { id: 'kick-n-hat', key: 'Z', src: '../audios/Kick_n_Hat.mp3' },
    { id: 'kick', key: 'X', src: '../audios/RP4_KICK_1.mp3' },
    { id: 'closed-hh', key: 'C', src: '../audios/Cev_H2.mp3' },
  ];

  return (
    <>
    <h1>Drum machine</h1>
    <div id="drum-machine" className="container">
      <div id="display">
        {text}
        <div className="grid">
        {pads.map((pad, index) => (
          <div
            key={pad.id}
            id={pad.id}
            className="drum-pad"
            onClick={() => handleClick(index)}
          >
            {pad.key}
            <audio
              ref={(el) => (audioRefs.current[index] = el)} 
              src={pad.src}
              id={pad.key}
              className='clip'
            ></audio>
          </div>
        ))}
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
