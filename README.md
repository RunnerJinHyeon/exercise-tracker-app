<br>
<center><img width="250px" src="public/images/Beenzinoo.png"></center>

## **Project. Exercise Tracker**
> ### 스터디_빈.진.우(Beenzinoo)
> <br>

>> **개발기간 : 2023.7.17 ~ 2023.08.09**
>> - **[Figma Link](https://www.figma.com/file/ZB9OIXLqpcUhWNcic0Q0q3/exercise-tracker-app?type=design&node-id=0%3A1&mode=design&t=T2uuBCz2Ned8Xngp-1)**
>> - **[배포사이트](https://dpftlel21.github.io/exercise-tracker-app/)**
<br>

## 프로젝트팀 소개
|<center>윤 예빈</center>|<center>이 인우</center>|<center>김 진현</center>|<center>최 한빈</center>|<center>진 종환</center>|
|---|---|---|---|---|
|<img width="150px" height="150px" src =  "public/images/Yebin.jpg">|<img width="150px" height="150px" src = "public/images/Inwoo.jpg">|<img width="150px" height="150px" src = "public/images/Jinhyeon.jpg">|<img width="150px" height="150px" src = "public/images/Hanbin.jpg">|<img width="150px" height="150px" src = "public/images/Jonghwan.png">|
|<center>[@YebinYun](https://github.com/YebinYun)</center>|<center>[@dpftlel21](https://github.com/dpftlel21)</center>|<center>[@RunnerJinHyeon](https://github.com/RunnerJinHyeon)</center>|<center>[@hanbinchoi](https://github.com/hanbinchoi)</center>|<center>[@MSbtff](https://github.com/MSbtff)</center>|

<br>

## 화면구성
<img src = "public/images/movie.gif">


<br>

## 주요 기능
### 운동 루틴 작성
- 💪 일주일에 맞춰 7가지 운동 루틴 기록이 가능하도록 구현
   - 루틴 데이터를 로컬 스토리지에 저장
- 💪 푸터와 캘린더에 연동
  - 푸터에 경우, 화면전환이 되어도 루틴에 접근이 가능
  - 캘린더에 경우, 루틴 데이터에 개수만큼 날짜별로 반복해서 출력이 가능

### 운동 기록
- 💪 약 200개 이상의 운동 목록들을 출력
  - 해당 운동을 편리하게 선택이 가능
- 💪 원하는 날짜 별도로 설정이 가능
  - 운동 데이터는 로컬 스토리지에 저장

### 주변 헬스장
- 💪 사용자에 현재 위치를 반영해서 지도에 반영
- 💪 지역명 + 헬스장 입력 시 추천
  - 원하는 결과를 클릭 시 해당 상세 사이트 **(카카오맵)** 로 이동

### 로그인 / 로그아웃
- 💪 소셜 로그인 기능 구현
  - 카카오, 구글 API를 이용
- 💪 유저 정보 저장
  - API에서 받아온 데이터 **(유저 이름)** 세션 스토리지에 저장 후 화면에 반영
- 💪 로그아웃 클릭 시 로그인 된 유저정보를 초기화 후 초기 화면으로 이동

### 캘린더
- 💪 해당 날짜에 운동한 기록을 볼 수 있도록 날짜 선택 가능
- 💪 현재 날짜와 운동이 기록된 날짜 각각 표시

### 타이머 / 스톱워치
- 💪 원하는 시간을 설정하면 타이머 작동
- 💪 스톱워치 사용 시 소수점 둘째 자리까지 보이도록 구현 

### 회원정보
- 💪 회원 신체정보 (성별, 나이, 키, 체중) 입력 후 저장
  - 저장된 정보는 이후에도 확인이 가능

<br>

## **Stack**
### **Environment**
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/git hub-181717?style=flat&logo=github&logoColor=white"/>

### **Config**
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/> <img src="https://img.shields.io/badge/kakaotalk-FFCD00?style=flat&logo=kakaotalk&logoColor=white"/> <img src="https://img.shields.io/badge/google-4285F4?style=flat&logo=google&logoColor=white"/> <img src="https://img.shields.io/badge/kakaomap-FFCD00?style=flat&logo=kakao&logoColor=white"/> <img src="https://img.shields.io/badge/.env-ECD53F?style=flat&logo=dotenv&logoColor=white"/>
 
### **Development**
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white"/> 

<br>

## 디렉토리 구조
```
.
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── components
│   │   ├── CalendarComponent.js
│   │   ├── Category.js
│   │   ├── Exercise.js
│   │   ├── ExerciseInputForm.js
│   │   ├── ExerciseListView.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Input.js
│   │   ├── Login
│   │   │   ├── GoogleLogin.js
│   │   │   ├── GoogleUserInfo.js
│   │   │   ├── KaKaoLogin.js
│   │   │   └── KaKaoUserInfo.js
│   │   ├── Map
│   │   │   ├── LandingPage.js
│   │   │   └── MapContainer.js
│   │   ├── RoutineAdder.js
│   │   ├── RoutineItem.js
│   │   ├── StopWatch.js
│   │   ├── TimerComponents.js
│   │   └── modal
│   │       ├── ModalPortal.js
│   │       ├── RoutineModal.css
│   │       └── RoutineModal.js
│   ├── hooks
│   │   └── useInput.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Calendar.js
│   │   ├── ExerciseRoutine.js
│   │   ├── Login.js
│   │   ├── Main.js
│   │   ├── MapSearch.js
│   │   ├── MyInfo.js
│   │   ├── Settings.js
│   │   ├── Start.js
│   │   ├── Timer.js
│   │   └── ToRecord.js
│   └── redux
│       ├── exerciseSlice.js
│       ├── modalSlice.js
│       ├── routineSlice.js
│       └── store.js
└── tailwind.config.js
```

<br>

## User Flow

<img src="public/images/빈진우 User Flow.png">
