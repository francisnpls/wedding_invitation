import React from 'react';
import styles from '../styles';
import { detailsInfo } from '../utils'

const Details = () => {
  return (
    <section className={`${styles.padding} bg-plainWhite bg-cover bg-no-repeat bg-center`}>
      <div className="flex justify-center items-center flex-col gap-[60px]">
        <h1 className="text-darker text-[50px] font-royale font-bold tracking-[4px]">
          The Details
        </h1>
        {detailsInfo.map((detail) => (
          <div key={detail.id} className="sm:w-[50%] w-[90%] flex justify-center items-center flex-col">
            <div className="flex flex-col gap-[10px] items-center">
              <img src={detail.image} alt="" className="w-[150px]"/>
              <h1 className="sm:text-[50px] text-[40px] text-darker font-royale"> {detail.title} </h1>
              <p className=" text-center font-alegria text-[18px] text-darker italic"> {detail.description} </p>
              <span className="text-center font-alegria text-[23px] text-darker italic"> {detail.hashtag} </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Details