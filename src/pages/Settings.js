// 개인정보 설정 창

import React from "react";

const Settings = () => {
  return (
    <main className="w-80 h-[800px] bg-[#ffffff] absolute top-0 left-0 border-2 border-[#E6E6E6] z-0 ">
      <ul className="pt-16 border border-[#E6E6E6]">
        <li className="p-5  border-b border-[#E6E6E6] flex items-center justify-between">
          <h1> 위치켜기 (GPS) </h1>
          <input
            type="checkbox"
            class='relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
                    before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[5px] before:translate-y-[-50%] before:rounded-[20px]
                    before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
                    checked:before:translate-x-[20px] 
                    hover:cursor-pointer 
                    checked:bg-[#a3e669]'
            name="weekly"
            id="checkbox1"
          />
        </li>
        <li className="p-5  border-b border-[#E6E6E6]">
          <h1 className="cursor-progress"> 개인정보 설정 </h1>
        </li>
        <li className="p-5  border-b border-[#E6E6E6]">
          <h1 className="cursor-progress"> 공지사항 </h1>
        </li>
        <li className="p-5  border-b border-[#E6E6E6]">
          <h1 className="cursor-progress"> 문의하기 </h1>
        </li>
        <li className="p-5 border-b border-[#E6E6E6]">
          <h1 className="cursor-progress"> 추천하기 </h1>
        </li>
        <li className="p-5">
          <h1 className="cursor-progress"> 공유하기 </h1>
        </li>
      </ul>
    </main>
  );
};

export default Settings;
