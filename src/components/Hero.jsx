import React from 'react';
import styles from '../styles';
import brown from '/brown.jpg';

const Hero = () => {
  return (
    <section className="w-full">
      <div className={`${styles.heroPadding} h-screen bg-plainWhite bg-center bg-no-repeat bg-cover`}>
        <div className="flex justify-center items-center relative">
          <img src={brown} alt="" className="sm:w-[80%] w-full sm:h-[150vh] h-[100vh] sm:border-[30px] sm:border-white"/>
          <div className="absolute sm:top-[200px] xx:top-[100px] top-[70px] flex justify-center items-center flex-col sm:px-0 px-[50px]">
            <p className="font-alegria italic sm:text-[24px] text-[18px] text-secondary tracking-[2px]">
              Together with their families
            </p>
            <p className={`sm:mt-2 mt-5 font-greatvibes ${styles.heading} text-primary text-center`}>
              Jamir & Cristina  
            </p>
            <p className="font-alegria italic sm:text-[24px] text-[18px text-secondary tracking-[2px] text-center sm:mt-[-5px] mt-3">
              Joyfully invite you to their <br className="sm:block hidden"/> wedding celebration
            </p>
            <div className="mt-10 h-[100px] w-[1px] bg-[#b1a35c]"/>
            <p className="mt-8 font-royale font-bold sm:text-[38px] text-[30px] tracking-[3px] text-secondary">
              April 27, 2024
            </p>
            <p className="font-alegria italic sm:text-[20px] txt-[18px]  text-secondary tracking-[2px] text-center mt-[5px]">
              @ Mary Immaculate Parish
            </p>
          </div>
        </div>
      </div>
      <div className="h-[75vh] bg-sunflower bg-no-repeat bg-cover bg-top bg-fixed"/>
    </section>
  )
}

export default Hero