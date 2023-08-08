import React, { useEffect, useState, useRef } from "react";
import play from "../images/iconamoon-player-play-duotone.png";
import pause from "../images/iconamoon-player-pause-duotone.png";
import stop from "../images/iconamoon-player-stop-duotone.png";

function TimerComponents({ setIsTimer }) {
  const [isSetTime, setIsSetTime] = useState(true);

  const [initialMin, setInitialMin] = useState(0);
  const [initialSec, setInitialSec] = useState(0);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [count, setCount] = useState(0);

  const [isStarting, setIsStarting] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const intervalRef = useRef(null);

  const calTotalSec = () => {
    const totalSec = Number(initialMin) * 60 + Number(initialSec);
    setCount(totalSec);
    setInitialMin(0);
    setInitialSec(0);
  };

  const countdown = () => {
    setCount((c) => c - 1);
  };

  const initInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const timeFormat = () => {
    if (count < 0) {
      initInterval();
      setIsStarting(false);
      return null;
    }
    const min = Math.floor(count / 60);
    const sec = count % 60;
    setMinutes(min);
    setSeconds(sec);
  };

  const start = () => {
    if (initialMin === 0 && initialSec === 0) {
      return alert("시간을 설정해주세요");
    }

    if (!isStarting) {
      calTotalSec();
      timeFormat();
      setIsPause(false);
      intervalRef.current = setInterval(countdown, 1000);
      setIsStarting(true);
      console.log("start");
      setIsSetTime(false);
    }
  };

  const pauseAndResume = () => {
    if (count === 0) {
      initInterval();
      setIsPause(false);
    }

    if (count !== 0) {
      if (!isPause) {
        initInterval();
        setIsPause(true);
      } else {
        intervalRef.current = setInterval(countdown, 1000);
        setIsPause(false);
      }
    }
  };

  const reset = () => {
    initInterval();
    setIsPause(false);
    setIsStarting(false);
    setCount(0);
    setMinutes(0);
    setSeconds(0);
    setIsSetTime(true);
  };

  useEffect(timeFormat, [count]);

  return (
    <>
      <div className="w-80 h-[800px] flex flex-col justify-around items-center pt-40 border-2 border-[#E6E6E6]">
        {/* 타이머 시간 또는 입력칸 */}
        <div className="w-64 h-64 flex justify-center items-center mt-10 border-4 border-[#ADDE7D] rounded-full text-7xl">
          {isSetTime ? (
              <div className="flex justify-center text-7xl">
                <input
                  className="w-20 text-center mx-3 border border-[rgba(119, 119, 119, 0.25)]"
                  onChange={(e) => setInitialMin(e.target.value)}
                  maxlength="2"
                  placeholder="00"
                />
                <div className="">:</div>
                <input
                  className="w-20 text-center mx-3 border border-[rgba(119, 119, 119, 0.25)]"
                  onChange={(e) => setInitialSec(e.target.value)}
                  maxlength="2"
                  placeholder="00"
                />
              </div>
          ) : (
            <div>
              <p>
                {minutes >= 10 ? minutes : `0${minutes}`} :{" "}
                {seconds >= 10 ? seconds : `0${seconds}`}
              </p>
            </div>
          )}
        </div>

        {/* 타이머 실행 버튼 */}
        <div className="w-80 flex justify-center mb-40">
          <button className="mr-5" type="button" onClick={start}>
            <img
              src={play}
              alt="재생버튼"
            />
          </button>
          <button className="mx-5" type="button" onClick={pauseAndResume}>
            <img
              src={pause}
              alt="일시정지버튼"
            />
          </button>
          <button className="ml-5" type="button" onClick={reset}>
            <img
              src={stop}
              alt="새로고침"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default TimerComponents;

