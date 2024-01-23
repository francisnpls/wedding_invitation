import React from 'react';
import styles from '../styles';
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlaceOfWorship } from "react-icons/fa";

const WeddingInfo = () => {
  return (
    <section className={`${styles.padding} bg-marbleWhite bg-center bg-no-repeat bg-cover bg-fixed`}>
      <div className="flex justify-center items-center flex-col gap-[50px]"> 
        <h1 className="text-darker text-[50px] font-royale font-bold tracking-[4px]">
          The Wedding
        </h1>
        <div className="flex sm:w-full w-[90%] justify-between sm:flex-row flex-col sm:items-start items-center sm:gap-0 gap-[50px]"> 
          <div className='flex-1 sm:mt-[80px]'>
            <div className="flex flex-col items-center justify-center gap-10">
              <FaClock className="text-[20px] text-darker"/>
              <span className="mt-[-10px] font-alegria text-[30px] text-darker">
                WHEN
              </span>
              <p className="font-montserrat text-[18px] text-darker">
                April 27, 2024, 12:00 PM
              </p>
            </div>
          </div>
          
          <div className="sm:h-[100px] h-[1px] sm:w-[1px] w-[200px] bg-[#b1a35c]"/>

          <div className='flex-1 sm:mt-[80px]'>
            <div className="flex flex-col items-center justify-center gap-10">
              <FaPlaceOfWorship className="text-[20px] text-darker"/>
              <span className="mt-[-10px] font-alegria text-[30px] text-darker">
                WHERE
              </span>
              <p className="font-montserrat text-[18px] text-darker text-center">
                Mary Immaculate Parish, <br/> NIA Road Brgy, Salawag, Dasmariñas, <br className="sm:block hidden"/> 4114 Cavite
              </p>
            </div>
          </div>

          <div className="sm:h-[100px] h-[1px] sm:w-[1px] w-[200px] bg-[#b1a35c]"/>

          <div className='flex-1 sm:mt-[80px]'>
            <div className="flex flex-col items-center justify-center gap-10">
              <FaLocationDot className="text-[20px] text-darker"/>
              <span className="mt-[-10px] font-alegria text-[30px] text-darker">
                RECEPTION
              </span>
              <p className="font-montserrat text-[18px] text-darker text-center">
                Avida Sta. Catalina Clubhouse, <br/> Molino-Paliparan road in Brgy. Salawag, Dasmariñas, Cavite
              </p>
            </div>
          </div>
        </div>
        <button className="mt-8 px-10 py-2 bg-[#baa640] hover:bg-[#b79c15] text-[20px] font-alegria text-white rounded"> 
          RSVP 
        </button> 
        
      </div>
    </section>
  )
}

export default WeddingInfo