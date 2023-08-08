import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Main from "./pages/Main";
import ToRecord from "./pages/ToRecord";
import ExerciseRoutine from "./pages/ExerciseRoutine";
import MapSearch from "./pages/MapSearch";
import Timer from "./pages/Timer";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import MyInfo from "./pages/MyInfo";
import { useState } from "react";
import KakaoUserInfo from "./components/Login/KaKaoUserInfo";
import GoogleUserInfo from "./components/Login/GoogleUserInfo";

function App() {
  // Header와 Footer가 보여질 페이지 경로 목록
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const showHeaderFooterPaths = [
    "/main",
    "/to-record",
    "/exercise-routine",
    "/calendar",
    "/timer",
    "/mapSearch",
    "/myInfo",
    "/settings",
    "/Kakao/callback",
    "/Oauth",
  ];
  // 현재 경로가 showHeaderFooterPaths에 속하는지 확인하는 함수
  const showHeaderFooter = () =>
    showHeaderFooterPaths.includes(location.pathname);

  return (
    <div>
      {/* 조건부로 Header를 렌더링 */}
      {showHeaderFooter() && <Header />}
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/to-record" element={<ToRecord />}></Route>
        <Route path="/exercise-routine" element={<ExerciseRoutine />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
        <Route path="/mapSearch" element={<MapSearch />}></Route>
        <Route path="/myInfo" element={<MyInfo />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/Kakao/callback" element={<Main />}></Route>
        <Route path="/Oauth" element={<Main />}></Route>
      </Routes>
      {isLogin === false ? (
        <KakaoUserInfo isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : null}
      <GoogleUserInfo />
      {/* 조건부로 Footer를 렌더링 */}
      {showHeaderFooter() && <Footer />}
    </div>
  );
}

export default App;
