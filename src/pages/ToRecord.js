// 운동 입력 창
import CalendarLib from "react-calendar";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ExerciseInputForm from "../components/ExerciseInputForm";
import ExerciseListView from "../components/ExerciseListView";
import CalendarComponent from "../components/CalendarComponent";
const ToRecord = () => {
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const data = useSelector((state) => state.exercise.value);

  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const mark = [...new Set(data.map((ele) => ele.date))];

  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
    setIsShowCalendar(false);
  };

  const handleCalendarView = () => {
    setIsShowCalendar(!isShowCalendar);
  };
  return (
    <main className="w-80 h-[800px] bg-[#ffffff] flex flex-col border-2 border-[#E6E6E6] overflow-y-auto">
      <div className="px-2.5 mt-20 w-full flex flex-col">
        <ExerciseInputForm date={date} />
        <button
          className="bg-[#ADDE7D] mt-4 mx-auto py-4 px-10 rounded-2xl font-bold text-lg text-stone-600"
          onClick={handleCalendarView}
        >
          날짜 선택하기
        </button>
        {isShowCalendar ? (
          <CalendarComponent date={date} onDateChange={onDateChange} />
        ) : null}
        <ExerciseListView date={date} />
      </div>
    </main>
  );
};

export default ToRecord;
