// 주변 헬스장 정보 받아오기 창
import React from "react";
import LandingPage from "../components/Map/LandingPage";

const MapSearch = () => {
    return (
        <main className="w-80 h-[800px] bg-[#ffffff] absolute top-0 left-0 border-2 border-[#E6E6E6] z-0 flex justify-center">
            <div className=" absolute top-[80px] box-border">
                <LandingPage />
            </div>

        </main>
    )
};

export default MapSearch;