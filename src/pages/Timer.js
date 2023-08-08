import StopWatch from "../components/StopWatch";
import TimerComponents from "../components/TimerComponents";
import { useState } from "react";

function Timer() {
  const [isTimer, setIsTimer] = useState(true);

  return (
    <>

      <div className="w-80 flex justify-center items -center absolute pt-16 mt-5">
        <button className="w-20 mr-2 py-2 px-4 bg-[#66bb6a] rounded-2xl text-[white]" onClick={() => setIsTimer(true)}>타이머</button>
        <button className="w-20 ml-2 p-2 bg-[#A5D6A7] rounded-2xl text-[white]" onClick={() => setIsTimer(false)}>스톱워치</button>
      </div>

      <div>
        {isTimer
          ? <TimerComponents isTimer={isTimer} setIsTimer={setIsTimer} />
          : <StopWatch isTimer={isTimer} setIsTimer={setIsTimer}
          />}
      </div>

    </>
  );
}

export default Timer;
