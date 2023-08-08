import React, { useState } from "react";
import Category from "./Category";
import "../index.css";
import { Link } from "react-router-dom";
import menuIcon from "../images/MenuIcon.png";
import myInfoIcon from "../images/MyInfoIcon.png";

const Header = () => {
  // 카테고리 보이기
  const [categoryVisible, setCategoryVisible] = useState(false);

  // 카테고리 보이기
  const showCategory = () => {
    setCategoryVisible(!categoryVisible);
  };

  return (
    <header className="w-80 h-16 bg-[#E1E9DA] flex items-center justify-between p-5 absolute top-0 left-0 z-10">
      {/* "메뉴" 버튼 */}
      <button
        className="w-[40px] h-[40px]"
        style={{
          backgroundImage: `url(${menuIcon})`, // 배경 이미지
          backgroundPosition: "center", // 이미지 위치
          backgroundSize: "cover", // 이미지 꽉차게
          backgroundRepeat: "no-repeat", // 이미지 반복 지정
        }}
        onClick={showCategory} // 아이콘 클릭 시 카테고리 보이기
      />

      <Link to="/myInfo">
        {/* "내 정보" 아이콘 */}
        <button
          className="w-[26px] h-[26px]"
          style={{
            backgroundImage: `url(${myInfoIcon})`, // 배경 이미지
            backgroundPosition: "center", // 이미지 위치
            backgroundSize: "cover", // 이미지 꽉차게
            backgroundRepeat: "no-repeat", // 이미지 반복 지정
          }}
        />
      </Link>

      {/* 카테고리 컴포넌트 */}
      {categoryVisible ? (
        <Category setCategoryVisible={setCategoryVisible} />
      ) : null}
    </header>
  );
};

export default Header;
