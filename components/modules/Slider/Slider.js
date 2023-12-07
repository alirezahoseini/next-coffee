import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Slider.module.css'

function Slider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation loop>
      <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: 'url(/img/carousel-2.jpg)' }} >
        <div className={styles.slider_body}>
          <img src="/img/slider-logo.png" alt="slider logo" />
          <h2 className='font-Marcellus text-3xl mt-3 '>Coffee Factory</h2>
          <img src="/img/slider-separator-img.png" className='w-32 my-3' alt="slider-separator-img" />
          <p className='px-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate molestias nobis distinctio suscipit a accusamus dolore explicabo optio in id, alias repudiandae soluta vel dolores eligendi, natus laudantium labore, delectus placeat provident voluptas tempora animi similique. </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide} style={{ backgroundImage: 'url(/img/carousel-1.jpg)' }} >
        <div className={styles.slider_body}>
          <img src="/img/slider-logo.png" alt="slider logo" />
          <h2 className='font-Marcellus text-3xl mt-3 '>Coffee Heaven</h2>
          <img src="/img/slider-separator-img.png" className='w-32 my-3' alt="slider-separator-img" />
          <p className='px-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate molestias nobis distinctio suscipit a accusamus dolore explicabo optio in id, alias repudiandae soluta vel dolores eligendi, natus laudantium labore. </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider