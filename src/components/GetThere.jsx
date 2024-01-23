import React from 'react';
import styles from '../styles';
import avidaQR from '/avidaQR.png';
import churchQR from '/churchQR.png';

const GetThere = () => {
  return (
    <section className={`${styles.footerPadding} w-full bg-[#faf9f6]`}>
      <div className="flex justify-center items-center flex-col gap-[50px]">
        <h1 className="text-darker text-[50px] font-royale font-bold tracking-[4px]"> Getting There </h1>
        <div className="h-[100px] w-[1px] bg-[#b1a35c]"/>
        <div className="w-full flex flex-col justify-between items-center sm:gap-10 gap-[40px]">
          <div className="sm:w-[70%] w-full flex-1 flex flex-col items-center gap-[30px]">
            <p className="font-alegria text-[30px] text-darker"> Mary Immaculate Parish</p>
            <div className="flex sm:gap-10 gap-5 w-[90%] sm:flex-row flex-col justify-center items-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15461.409402718435!2d120.9738044!3d14.3490092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d58865d023e9%3A0xae4616b6d226ba7f!2sMary%20Immaculate%20Parish%20-%20Salawag!5e0!3m2!1sen!2sph!4v1706010323899!5m2!1sen!2sph" className="w-full h-[300px]"></iframe>
              <img src={churchQR} alt="" className="sm:h-[50%] w-[150px]"/>
            </div>
          </div>

          <div className="sm:mt-10 h-[1px] w-[200px] bg-[#b1a35c]"/>

          <div className="sm:w-[70%] w-full flex-1 flex flex-col items-center gap-[30px]">
            <p className="font-alegria text-[30px] text-darker"> Avida / Reception </p>
            <div className="flex sm:gap-10 gap-5 w-[90%] sm:flex-row flex-col justify-center items-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15460.52148940666!2d120.9760794!3d14.3618662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d408755525b1%3A0x972d72b25cc4083a!2sAvida%20Residences%20Santa%20Catalina%20Clubhouse!5e0!3m2!1sen!2sph!4v1706011632876!5m2!1sen!2sph"className="w-full h-[300px]"></iframe>
              <img src={avidaQR} alt="" className="sm:h-[50%] w-[150px]"/>
            </div>
            
          </div>
        </div>
        <div className="sm:w-[50%] mt-10">
          <p className="text-[#3c3a3a] text-[20px] text-center">
            WE PREPARED THE <span className="font-bold">  QR CODE AND GOOGLE MAPS NAVIGATION </span> TO ASSIST YOU WITH MAP DIRECTIONS.
          </p>
          <p className="text-[#3c3a3a] font-bold text-[16px] text-center mt-10">
            PLEASE SCAN THE QR CODE OR CLICK ON GOOGLE MAPS FOR EASIER NAVIGATION.
          </p>
        </div>
      </div>  
    </section>
  )
}

export default GetThere