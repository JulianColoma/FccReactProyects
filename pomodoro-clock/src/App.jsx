import { useState, useRef } from "react";
import "./App.css";
import { useTimer } from "react-timer-hook";

function App() {
  const [time, setTime] = useState({ session: 25, break: 5 });
  const [isBreak, setIsBreak] = useState(false);
  const [showZero, setShowZero] = useState(false);
  const [expiryTimestamp, setExpiryTimestamp] = useState(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 25);
    return now;
  });
  const audioRef = useRef(null);

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => handleTimerEnd(),
  });

  const handleTimerEnd = () => {
    setShowZero(true)
    setTimeout(() => {   
    setShowZero(false)
    const newTime = new Date();
    if (isBreak) {
      setIsBreak(false);
      handleReset();
    } else {
      newTime.setMinutes(newTime.getMinutes() + time.break);
      setIsBreak(true);
      restart(newTime, true); 
    }
    playAudio();
    }, 1000)
  };

  const changetime = (bk, inc) => {
    let prevtime = time;
    if (
      (!inc && ((bk && prevtime.break === 1) || (!bk && prevtime.session === 1))) ||
      (inc && ((bk && prevtime.break === 60) || (!bk && prevtime.session === 60)))
    )
      return;

    if (bk) {
      prevtime.break = inc ? prevtime.break + 1 : prevtime.break - 1;
    } else {
      prevtime.session = inc ? prevtime.session + 1 : prevtime.session - 1;
    }
    const newExpiry = new Date();
    isBreak? newExpiry.setMinutes(newExpiry.getMinutes() + prevtime.break) : newExpiry.setMinutes(newExpiry.getMinutes() + prevtime.session);
    setExpiryTimestamp(newExpiry);
    restart(newExpiry, false)
    setTime({ session: prevtime.session, break: prevtime.break });
  };
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const resetAudio = () =>{
    if (audioRef.current) {
      audioRef.current.pause(); 
      audioRef.current.currentTime = 0; 
    }
  }
  const handleReset = () => {
    resetAudio();
    setTime({ session: 25, break: 5 });
    const newExpiry = new Date();
    newExpiry.setMinutes(newExpiry.getMinutes() + 25);
    setExpiryTimestamp(newExpiry);
    restart(newExpiry, false);
    setIsBreak(false);
  };
  const formatTime = () =>{
    if(showZero) return '00:00'
    
    let min = minutes
    let sec = seconds
    
    if(!showZero && min == 0){
      return '60:00'
    } 

    min < 10? min = `0${min}` : min.toString()
    sec < 10? sec = `0${sec}` : sec.toString()

    return min + ':' + sec
  } 
  

  return (
    <>
      <h1>25 + 5 Clock</h1>
      <div className="container">
        <section className="session">
          <h2 id="session-label">Session Length</h2>
          <p id="session-length">{time.session}</p>
          <button id="session-increment" onClick={() => changetime(false, true)}>
            +
          </button>
          <button id="session-decrement" onClick={() => changetime(false, false)}>
            -
          </button>
        </section>
        <section className="break">
          <h2 id="break-label">Break Length</h2>
          <p id="break-length">{time.break}</p>
          <button id="break-increment" onClick={() => changetime(true, true)}>
            +
          </button>
          <button id="break-decrement" onClick={() => changetime(true, false)}>
            -
          </button>
        </section>
        </div>
        <section id="timer-label">
          <h2>{isBreak ? "Break" : "Session"}</h2>
          <p id="time-left">
            {formatTime()}
          </p>
          <button id="start_stop" onClick={isRunning ? pause : start}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
          <audio
              ref={audioRef}
              src='/Miaumiau.m4a'
              id='beep'
            ></audio>
        </section>
    </>
  );
}

export default App;

