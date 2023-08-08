import React, { useState } from "react";
// import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";
import ExerciseInputForm from "../components/ExerciseInputForm";
import ExerciseListView from "../components/ExerciseListView";
import CalendarComponent from "../components/CalendarComponent";

const Main = () => {
  // value = 선택한 날짜 / onChange = 날짜 변경 함수
  const userinfo = sessionStorage.getItem("username");
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };
  return (
    <main className="w-80 h-[800px] bg-[#FDF6E6] relative top-0 left-0 border-2 border-[#E6E6E6] overflow-y-auto">
      <div className="absolute top-16 mx-2 ">
        <div className="my-5">
          <CalendarComponent date={date} onDateChange={onDateChange} />
        </div>
        <div className="mb-5">
          <ExerciseInputForm date={date} />
        </div>
        <div className="h-32">
          <ExerciseListView date={date} />
        </div>
      </div>
    </main>
  );
};

export default Main;
