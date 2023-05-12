import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center ">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={4}
            slidesPerView={"auto"}
            slidesPerGroup={2}
            navigation={true}
          >
            {movies.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <Movie item={item} key={id} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Row;
