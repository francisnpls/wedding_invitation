import React from 'react';
import styles from '../styles';
import brides from '/brides.jpg';
import groom from '/groom.jpg';

const OurStory = () => {
  return (
    <div className={`${styles.padding} w-full flex justify-center items-center flex-col sm:gap-[50px] gap-[30px]`}>
      <p className="text-darker text-[25px] font-royale font-bold tracking-[3px]">
        OUR STORY
      </p>
      <div className="h-[100px] w-[1px] bg-[#b1a35c]"/>
      <div className="sm:w-[60%] w-full"> 
        <p className="text-darker sm:text-[18px] text-[15px] font-alegria tracking-[1px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className='mt-8 sm:w-[60%] w-[95%] flex sm:flex-row flex-col sm:justify-between justify-center items-center sm:gap-0 gap-[40px]'>
        <div className="relative">
          <img src={brides} alt="" className="w-[300px] h-[300px] relative z-20"/>
          <div className="w-[330px] h-[300px] bg-[#efebcf] absolute top-[-15px] left-[-15px] z-10"/>
        </div>
        <div className="relative">
          <img src={groom} alt="" className="w-[300px] h-[300px] relative z-20"/>
          <div className="w-[330px] h-[300px] bg-[#efebcf] absolute sm:top-[-15px] bottom-[-15px] left-[-15px] z-10"/>
        </div>
      </div>
    </div>
  )
}

export default OurStory