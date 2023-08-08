import { useEffect,useState } from "react";
import KakaoUserInfo from "./KaKaoUserInfo";
import { useNavigate } from "react-router-dom";

const SocialKAKAO = () => {
  // API, URI 받아 오기
  // URL 설정
  const CLIENT_ID = `${process.env.REACT_APP_REST_API_KEY}`
  const REDIRECT_URI = `${process.env.REACT_APP_REST_API_URI}`
  const code = new URL(window.location.href).searchParams.get("code");
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const navigate = useNavigate();
  const [Code,setCode] = useState('')
  // 로그인 버튼을 눌렀을 때 해당 링크로 이동하게끔 설정
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }

  useEffect(()=>{
    if(code?.length>1){
      console.log(code);
      setCode(code)

      navigate(`/main?code=${Code}`)
    }
  },[navigate,code,Code])
  
  return (
    <>
      <button
        className="text-xl font-bold mx-5"
        onClick={handleLogin}
      >
        카카오 로그인</button>
      <KakaoUserInfo />
    </>
  );
};


export default SocialKAKAO;