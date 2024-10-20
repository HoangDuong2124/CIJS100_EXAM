import React from "react";

const MovieItem = (props) => {
    const handleBanner =()=>{
        props.setBanner(
            {
                name:props.name,
                image:props.image,
                des:props.des
            }
        )
    }
  return (
    <div className="mt-5">
      <div  onClick={handleBanner}  className="w-[170px] h-[253.84px]  relative rounded-xl  cursor-pointer ]">
        <img
          className="w-[100%] h-[100%] rounded-xl object-cover z-0 "
          src={props.image}
        ></img>
        <div className="linear w-[170px] h-[204.93px] absolute top-[48.9px] rounded-xl z-1 "></div>
        <div className="w-[100%] h-[20.96px] absolute top-[225px] left-0 text-base text-[#FFFFFF] leading-[18px] font-[400] font-[Poppins] text-center ">
          Episode {props.episode}
        </div>
      </div>

      <div className="mt-[10px] text-base text-[#FFFFFF] leading-[18px] font-[600] font-[Poppins] text-center">
        {props.name}
      </div>
    </div>
  );
};

export default MovieItem;
