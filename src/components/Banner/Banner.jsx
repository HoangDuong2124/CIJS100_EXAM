import React from "react";
import "../Banner/Banner.css";
const Banner = (props) => {
  return (
    <div className="banner w-[100%] h-[400px] relative rounded-xl ">
      { !props.banner.name ? 
      <>
        <img
          className="w-[1170px] h-[400px] rounded-xl object-cover"
          src="/images/img_banner.png"
        ></img>
        <div className="w-[586px] h-[161px] absolute pr-[15px]  top-[200px] left-[47px]">
          <div className=" text-[Poppins] text-4xl text-[#FFFFFF] font-[600] leading-[64px]">
            Weather With You
          </div>
          <div className="text-[Poppins] text-[16px] text-[#FFFFFF] font-[400] leading-[27px]">
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.
          </div>
        </div>
      </>
:
<>
        <img
          className="w-[1170px] h-[400px] rounded-xl object-cover"
          src={props.banner.image}
        ></img>
        <div className="w-[586px] h-[161px] absolute pr-[15px]  top-[130px] left-[47px]">
          <div className=" text-[Poppins] text-4xl text-[#FFFFFF] font-[600] leading-[64px]">
            {props.banner.name}
          </div>
          <div className="text-[Poppins] text-[16px] text-[#FFFFFF] font-[400] leading-[27px]">
            {props.banner.des}
          </div>
        </div>
      </>
}
    </div>
  );
};

export default Banner;
