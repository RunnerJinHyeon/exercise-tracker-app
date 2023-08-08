// 헬스장 위치 검색

import React, { useState } from 'react';
import MapContainer from './MapContainer';

function LandingPage() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <form
          className="inputForm border border-[#E6E6E6] mb-[20px] w-[300px] "
          onSubmit={handleSubmit}
        >
          <input
            placeholder="지역명 + 헬스장"
            onChange={onChange}
            value={InputText}
            className=' w-[100%] h-[100%] p-2.5'
          />
          <button
            type="submit"
            className='border-t border-[#E6E6E6] w-[100%] h-[35px] bg-[#ADDE7D] '
          >
            검색</button>
        </form>
        <MapContainer searchPlace={Place} />
      </div>
    </>
  );
}

export default LandingPage;
