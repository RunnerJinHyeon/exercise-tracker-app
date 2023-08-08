/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  //받아온 위도,경도 상태변경
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // 검색 결과 상태변경

  const [Places, setPlaces] = useState([]);

  useEffect(() => {
    // 현재 위치 받아오기  (리액트에 내장된 api)
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("cannot find location", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
    getLocation();

    // 카카오 맵 API
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude), //현재위치 입력
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        setPlaces(data);
        console.log(Places);
      }
    }

    // 지도 마커 표시
    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트 등록
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭시 장소명 인포윈도우에 표출
        infowindow.setContent(
          '<div style="padding:5px;font-ize:12px;">' +
          place.place_name +
          "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace, latitude, longitude]);

  return (
    <>
      <div
        className="w-[300px] h-[300px]"
        id="myMap"
      ></div>
      <div
        id="result-list"
        className=" overflow-y-auto h-[260px] pb-[24px];"
      >
        {Places.map((item, i) => (
          <div
            key={i}
            className="mt-[20px] mx-[20px]"
          >
            <div>
              <h5 className="mb-[5px]">
                <span className="mr-[10px]">{i + 1}.</span>
                <a
                  href={item.place_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold"
                >
                  {item.place_name}
                </a>
              </h5>
              {item.road_address_name
                ? (
                  <div>
                    <span>{item.road_address_name}</span>
                    <a href={item.place_url} target="_blank" rel="noreferrer"></a>
                    <span>{item.address_name}</span>
                  </div>
                )
                : (
                  <span>{item.address_name}</span>
                )}
              <span
                className="text-[#777]"
              >
                {item.phone}
              </span>
            </div>
          </div>
        ))}
        <div id="pagination"></div>
      </div>
    </>
  );
};

export default MapContainer;