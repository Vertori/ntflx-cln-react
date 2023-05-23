import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center ">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={4}
            slidesPerView={"auto"}
            slidesPerGroup={1}
            navigation={true}
          >
            {movies.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w[280px] inline-block cursor-pointer relative p-2">
                    <img
                      className="w-full h-auto block rounded-sm"
                      src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                      alt={item?.title}
                    />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100">
                      <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full px-8 text-center">
                        {item?.title}
                      </p>
                      <p className="absolute text-gray-300 top-4 right-4">
                        <AiOutlineClose />
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SavedShows;
