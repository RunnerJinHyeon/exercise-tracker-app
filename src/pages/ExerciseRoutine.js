// 운동 보기 창

import React from "react";
import { useSelector } from "react-redux";
import RoutineAdder from "../components/RoutineAdder";
import RoutineItem from "../components/RoutineItem";

const ExerciseRoutine = () => {
  const routines = useSelector((state) => state.routine.value);
  return (
    <main className="w-80 h-[800px] bg-[#ffffff] absolute top-0 left-0 border-2 border-[#E6E6E6] overflow-y-auto">
      <div className="h-[600px] mt-[80px] px-[20px] grid grid-cols-1 grid-rows-[repeat(7,75px)] gap-5">
        {routines.length < 7 ? <RoutineAdder /> : null}
        {routines.map((ele, idx) => (
          <RoutineItem key={ele.id} routine={ele} idx={idx} />
        ))}
      </div>
    </main>
  );
};

export default ExerciseRoutine;
