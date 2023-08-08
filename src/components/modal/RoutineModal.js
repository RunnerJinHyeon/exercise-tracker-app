import React from "react";
import "./RoutineModal.css";
import ExerciseInputForm from "../ExerciseInputForm";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../redux/modalSlice";

function RoutineModal() {
  const dispatch = useDispatch();
  return (
    <div
      className="modal-container absolute w-80 h-[800px]"
    >
      <div className="modal w-60 h-auto">
        <div className="content">
          <ExerciseInputForm routine={true} />
          <button
            className="modal-close-btn"
            onClick={() => dispatch(closeModal())}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoutineModal;
