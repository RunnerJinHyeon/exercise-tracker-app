import React from "react";
import { useDispatch } from "react-redux";
import { deleteRoutine } from "../redux/routineSlice";
function RoutineItem({ routine, footer, idx }) {
  const itemColors = [
    "#F09EA7",
    "#F6CA94",
    "#EBD966",
    "#C1EBC0",
    "#C7CAFF",
    "#CDABEB",
    "#F6C2F3",
  ];
  console.log(idx);
  const dispatch = useDispatch();
  return (
    <>
      {footer ? (
        <li
          className="w-[33px] h-[33px] flex justify-center items-center text-white text-xl font-black rounded-full"
          style={{
            backgroundColor: `${itemColors[idx]}`,
          }}
        >
          {idx + 1}
        </li>
      ) : (
        <li className="h-14 bg-white flex justify-between items-center text-sm text-gray-500 rounded-md mr-2 my-2 px-5 py-10 shadow-inner border">
          <div className="flex justify-beetween items-center gap-2">
            <span
              className={`py-1 px-2 rounded-lg text-sm text-white font-bold`}
              style={{
                backgroundColor: `${itemColors[idx]}`,
              }}
            >
              {"루틴"}
              {idx + 1}
            </span>
            <div className="text-[16px] ml-4 w-32">
              <h1 className="font-bold text-black"> {routine.exercise} </h1>
              <h1> {routine.time}분 </h1>
            </div>
          </div>
          <button
            className="text-[16px]"
            onClick={() => dispatch(deleteRoutine(routine.id))}
          >
            ❌
          </button>
        </li>
      )}
    </>
  );
}

export default RoutineItem;
