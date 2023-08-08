import React from "react";
import RoutineAdder from "./RoutineAdder";
import { useSelector } from "react-redux";
import RoutineItem from "./RoutineItem";
import { Link } from "react-router-dom";
// import '../index.css'

const Footer = () => {
  const routines = useSelector((state) => state.routine.value);

  return (
    <footer className="w-80 h-16 bg-[#E1E9DA] flex gap-3 items-center px-2 absolute top-[736px] left-0">
      {routines.map((ele, idx) => (
        <Link key={ele.id} to="/exercise-routine">
          <RoutineItem footer={true} routine={ele} idx={idx} />
        </Link>
      ))}
      {routines.length < 7 ? <RoutineAdder footer={true} /> : null}
    </footer>
  );
};

export default Footer;
