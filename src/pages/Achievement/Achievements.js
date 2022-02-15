import React from 'react'

import Header from '../../components/Header'
import AchieveLists from './AchieveLists'
import Yearslist from './Yearslist.json'
import Footer from '../../components/Footer';

const Achievements = () => {
  const FocusOn = (event) => {
    let yid = event.target.value
    console.log(document.getElementById(yid))
    document.getElementById(yid).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }

  // mobile --> mt-36, pc --> mt-16 수정
  // mobile 글자크기, 한줄 나열

  let ye = Object.keys(Yearslist).sort().reverse()
  return (
    <div>
      <Header />
      <div class='fixed inset-x-0 top-0 left-0 z-50 right-0'>
      <div class="bg-white p- mt-16">
        <div className="flex flex-col text-center w-full">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Achievements Page
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            활동성과
          </h1>
        </div>
      
    <div class="flex flex-col items-center">
      <select class="mx-10 text-center"
        onChange={FocusOn}
      >
        <option selected disabled>
          년도 선택
        </option>

        {ye.map((year, index) => (
          <option>{year}</option>
        ))}
      </select>
      </div>
      </div>  
      </div>
      <div class="pt-32"></div>
      {/* <div class="bg-red-100 p-5 mt-16">
        <div className="flex flex-col text-center w-full">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Achievements Page
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            활동성과
          </h1>
        </div>
      </div>
    <div class="flex flex-col items-center">
      <br></br>
      <select class="fixed mx-10 text-center z-50"
        onChange={FocusOn}
      >
        <option selected disabled>
          년도 선택
        </option>

        {ye.map((year, index) => (
          <option>{year}</option>
        ))}
      </select>
      </div> */}
      <br></br>
      <AchieveLists />
      <Footer />
    </div>
  )
}

export default Achievements
