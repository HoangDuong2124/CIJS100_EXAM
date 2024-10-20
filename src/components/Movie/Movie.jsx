import React, { useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import { listMovie } from "../../data";

const Movie = (props) => {
  const [movie, setMovie] = useState(listMovie);
  return (
    <div className="w-[100%] h-[361.87px] mt-5">
      <div className="text-[36px] text-[#FFFFFF] leading-8 font-[600] font-[Poppins]">
        New Release
      </div>
      <div className="w-[100%] h-[305.87px]   flex gap-[19px]">
        {movie.map((prev) => (
          <MovieItem  key={prev.id} name={prev.movieName} image={prev.image} episode={prev.episode} des={prev.description} setBanner={props.setBanner}/>
        ))}
      </div>
    </div>
  );
};

export default Movie;
