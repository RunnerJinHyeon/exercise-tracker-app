import { useState, useEffect } from "react";
import play from "../images/iconamoon-player-play-duotone.png";
import pause from "../images/iconamoon-player-pause-duotone.png";
import stop from "../images/iconamoon-player-stop-duotone.png";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
 
  useEffect(() => {
    let stopwatch;
    // 타이머 돌아갈시 1초씩 증가
    if (isRunning) {
        stopwatch = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    }
    return () => {
      clearInterval(stopwatch);
    };
  }, [isRunning]);

  // 시작, 일시정지 버튼
  const handleStartPause = () => {
    setIsRunning((prevState) => !prevState);
  };

  // 초기화 버튼
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div className="w-80 h-[800px] flex flex-col justify-around items-center pt-40 border-2 border-[#E6E6E6]">
      <div className="w-64 h-64 flex justify-center items-center mt-10 border-4 border-[#ADDE7D] rounded-full text-7xl">
        {time.toFixed(2)}
      </div>
      
      <div className="w-80 flex justify-center mb-40">
        <button
          className="mx-5"
          onClick={handleStartPause}>{isRunning
            ? <img src={pause} alt="일시정지버튼" />
            : <img src={play} alt="재생버튼" />
          }
        </button>
        <button
          className="mx-5"
          onClick={handleReset}>
          <img src={stop} alt="새로고침" />
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
