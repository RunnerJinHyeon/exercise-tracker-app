import moment from "moment";
import CalendarLib from "react-calendar";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CalendarContainer = styled.div`
  font-weight:bold;
  > .react-calendar {
    height: 20rem;
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding : 10px;
    background-color:white;
    border-radius:5px;
    // yyyy-mm 페이지 부분
    > .react-calendar__navigation {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 4px;
      > .react-calendar__navigation__arrow {
        width: 50px;
        font-size:30px;
        padding-bottom:4px;
        color:#777;
      }
      > .react-calendar__navigation__label {
        > span {
          font-size: 18px;
          font-weight: bold;
          padding: 10px 30px;
          background-color: #adde7d;
          color: #ffffff;
          border-radius: 4px;
        }
      }
    }
    // 큰 달력 부분
    > .react-calendar__viewContainer {
      display: flex;
      align-items: flex-start;
      > .react-calendar__month-view {
        > div {
          > div {
            // 요일 부분
            > .react-calendar__month-view__weekdays {
              text-align: center;
              padding: 2.5 4.5;
              margin: 13.3px 0;
              font-size:18px;
              > .react-calendar__month-view__weekdays__weekday {
                // 요일에 기본값인 도트 밑줄 지워주기
                > abbr {
                  text-decoration: none;
                }
              }
              // 공휴일(요일) 색상 바꿔주기
              > .react-calendar__month-view__weekdays__weekday--weekend {
                color: red;
              }
            }
            // 일자 부분
            > .react-calendar__month-view__days {
              /* 달력 day 타일 한개 모양 */
              > .react-calendar__tile {
                color: #616161;
                background: none;
                border: none;
                border-radius: 10px;
                text-align: center;
                padding: 4.5px;
                margin-bottom: 13.3px;
                font-size: 14px;
              }
              > .react-calendar__month-view__days__day--weekend {
                color: red;
              }
              /* 마크할 날짜들 */
              > .highlight {
                border: 2px solid #adde7d;
                border-radius: 10px;
              }
              /* 현재 달을 벗어난 day */
              > .react-calendar__month-view__days__day--neighboringMonth {
                opacity: 0.5;
              }
              /* 선택된 날짜 */
              > .react-calendar__tile--active {
                border:2px solid #3C8F64;
                border-radius: 10px;
                background-color: #D1FBA8;
              }
              /* 달력 오늘 표시 변경 */
              > .react-calendar__tile--now {
                background: #adde7d;
              }
              
            } 
          }
        }
      }
    }
  }
`;

function CalendarComponent({ date, onDateChange }) {
  const data = useSelector((state) => state.exercise.value);
  // 운동을 추가한 날짜들
  const mark = [...new Set(data.map((ele) => ele.date))];

  return (
    <CalendarContainer>
      <CalendarLib
        // 달 이동 화살표
        // nextLabel={null}
        // prevLabel={null}
        next2Label={null}
        prev2Label={null}
        // 일에 숫자만 들어가기
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        // 값이 변경 될 때 호출되는 함수
        onChange={(d) => onDateChange(d)}
        value={date}
        tileClassName={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return "highlight";
          }
        }}
      />
    </CalendarContainer>
  );
}
export default CalendarComponent;
