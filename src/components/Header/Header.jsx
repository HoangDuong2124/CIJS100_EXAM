import React from "react";

const Header = () => {
  return (
    <div className="w-[100%] h-[48px] flex justify-between items-center">
      <div className="w-[201.44px] h-[32px] font-[700] text-[36px] leading-[32px] tracking-[7%] text-[#ffffff] font-[Poppins]">
        Anonime
      </div>
      <div className="w-[63.16px] h-[32px] font-[400] text-[18px] leading-[32px] tracking-[7%] text-[#868686] font-[Poppins]">
        Home
      </div>
      <div className="w-[112.16pxpx] h-[32px] font-[400] text-[18px] leading-[32px] tracking-[7%] text-[#868686] font-[Poppins]">
        List anime
      </div>
      <input
        className="w-[374.58px] h-[48px] rounded-[37px] pl-[18px] pt-2 pb-2 pr-[100px] bg-[#374151] font-[400] text-[18px] leading-[32px] tracking-[7%] text-[#868686] font-[Poppins] "
        type="text"
        placeholder="Search anime or movie"
      ></input>
    </div>
  );
};

export default Header;
