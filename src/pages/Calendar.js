// 운동 기록 (ver. 캘린더)
import React, { useState } from "react";
import moment from "moment";
import CalendarComponent from "../components/CalendarComponent";
import ExerciseListView from "../components/ExerciseListView";
const Calendar = () => {
  // value = 선택한 날짜 / onChange = 날짜 변경 함수
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };
  console.log(date.getFullYear);

  return (
    <main className="pt-16 w-80 h-[800px] border-2 border-[#E6E6E6]">
      <div className="mt-4 border-b border-[#E6E6E6]">
        <CalendarComponent
          date={date}
          onDateChange={onDateChange}
        />
      </div>
      <div className="h-2/5 mt-2 pl-2">
        <ExerciseListView date={date} />
      </div>
    </main>
  );
};

export default Calendar;
