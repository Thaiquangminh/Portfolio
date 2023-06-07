import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';
import './testtimonials.css';

const data = [
  {
    id: 1,
    image: AVT1,
    name: 'User1',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qualibero aperiam? Temporibus voluptate accusantium corporis seddolores! Fugiat aspernatur officia maxime tempore laudantium, autnemo velit non porro cum?',
  },
  {
    id: 2,
    image: AVT2,
    name: 'User2',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qualibero aperiam? Temporibus voluptate accusantium corporis seddolores! Fugiat aspernatur officia maxime tempore laudantium, autnemo velit non porro cum?',
  },
  {
    id: 3,
    image: AVT3,
    name: 'User3',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qualibero aperiam? Temporibus voluptate accusantium corporis seddolores! Fugiat aspernatur officia maxime tempore laudantium, autnemo velit non porro cum?',
  },
  {
    id: 4,
    image: AVT4,
    name: 'User4',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qualibero aperiam? Temporibus voluptate accusantium corporis seddolores! Fugiat aspernatur officia maxime tempore laudantium, autnemo velit non porro cum?',
  },
  {
    id: 5,
    image: AVT4,
    name: 'User5',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qualibero aperiam? Temporibus voluptate accusantium corporis seddolores! Fugiat aspernatur officia maxime tempore laudantium, autnemo velit non porro cum?',
  },
  {
    id: 6,
    image: AVT4,
    name: 'User6',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qualibero aperiam? Temporibus voluptate accusantium corporis seddolores! Fugiat aspernatur officia maxime tempore laudantium, autnemo velit non porro cum?',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
        modules={[Pagination]}
        className="container testimonials__container">
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide className="testimonials" key={id}>
              <div className="client__avatar">
                <img src={image} alt="" />
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
