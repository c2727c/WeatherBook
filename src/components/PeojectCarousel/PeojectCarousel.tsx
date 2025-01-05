// import './ProjectList.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Project from '../Project/Project';

function PeojectCarousel() {

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide> <Project project={{ name: 'Project 1', location: 'Location 1', unit: 'C', weatherEntries: [], totalAvgTemp: 0 }} /> </SwiperSlide>
        <SwiperSlide> <Project project={{ name: 'Project 2', location: 'Location 2', unit: 'F', weatherEntries: [], totalAvgTemp: 0 }} /> </SwiperSlide>
        <SwiperSlide> <Project project={{ name: 'Project 3', location: 'Location 3', unit: 'C', weatherEntries: [], totalAvgTemp: 0 }} /> </SwiperSlide>
      </Swiper>
    </>
  )
}

export default PeojectCarousel