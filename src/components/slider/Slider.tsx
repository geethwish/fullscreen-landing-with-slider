import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { SliderDataProps } from "../scrollableContent/ScrollableContent.types";
import SliderCard from "./SliderCard";

// styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
  data: SliderDataProps[] | [];
}

const Slider: FC<SliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        //centeredSlides={true}
        modules={[EffectFade, Navigation, Pagination, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        effect={"coverflow"}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderCard title={item.title} content={item.content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
