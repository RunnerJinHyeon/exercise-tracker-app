import { useState } from "react";
import ModalPortal from "./modal/ModalPortal";
import RoutineModal from "./modal/RoutineModal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";
import { FaPlusCircle } from "react-icons/fa";
import addBtn from "../images/AddBtn.png";


function RoutineAdder({ footer }) {
  const modal = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  console.log(modal);
  return (
    <div>
      {footer ? (
        <div className="flex justify-center items-center">
          <button
            className="w-[38px] h-[38px]"
            style={{
              backgroundImage: `url(${addBtn})`, // 배경 이미지
              backgroundPosition: "center", // 이미지 위치
              backgroundSize: "cover", // 이미지 꽉차게
              backgroundRepeat: "no-repeat", // 이미지 반복 지정
            }}
            onClick={() => dispatch(openModal())}
          />
        </div>
      ) : (
        <>
          <button
            className="w-full h-[70px] py-3 rounded-md text-white font-bold bg-[#98F5A4] flex justify-center items-center"
            onClick={() => dispatch(openModal())}
          >
            <FaPlusCircle color="#fff" size="50" />
          </button>
          <div className="my-1 text-slate-600 text-[12px] text-center">
            루틴은 최대 7개까지 생성 가능합니다.
          </div>
        </>
      )}
      {modal && (
        <ModalPortal>
          <RoutineModal />
        </ModalPortal>
      )}
    </div>
  );
}

export default RoutineAdder;
