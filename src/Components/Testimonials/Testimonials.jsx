// import "./Testimonials.css";

// import Image1 from "../../assets/testimonial1.png"
// import Image2 from "../../assets/testimonial2.png"
// import Image3 from "../../assets/testimonial3.png"
// // import Image4 from "../../assets/avatar4.jpg"

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation } from 'swiper/modules';


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';








// const data = [

//     {
//         id:1,
//         image:Image1,
//         names:"Manika Deo",
//         clients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates officiis corrupti accusamus, culpa esse tempore corporis modi unde dignissimos blanditiis. Optio tempora odit labore temporibus ullam placeat. Quidem, adipisci."
//     },

//     {
//         id:2,
//         image:Image2,
//         names:"Manika Deo",
//         clients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates officiis corrupti accusamus, culpa esse tempore corporis modi unde dignissimos blanditiis. Optio tempora odit labore temporibus ullam placeat. Quidem, adipisci."
//     },

//     {
//         id:3,
//         image:Image3,
//         names:"Manika Deo",
//         clients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates officiis corrupti accusamus, culpa esse tempore corporis modi unde dignissimos blanditiis. Optio tempora odit labore temporibus ullam placeat. Quidem, adipisci."
//     },

//     // {
//     //     id:4,
//     //     image:Image4,
//     //     names:"Manika Deo",
//     //     clients:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates officiis corrupti accusamus, culpa esse tempore corporis modi unde dignissimos blanditiis. Optio tempora odit labore temporibus ullam placeat. Quidem, adipisci."
//     // }
// ]


// const Testimonials = () => {
    
//     return (
//         <section id='Testimonials'>
//             <h5>Review from Clients</h5>
//             <h2>Testimonials</h2>

//             <Swiper
//                style={{
//                 '--swiper-navigation-color': '#fff',
//                 '--swiper-pagination-color': '#fff',
//               }}
//               loop={true}
//               spaceBetween={10}
//               navigation={true}
//               modules={[FreeMode, Navigation]}
//               className="container testimonials__container"
            
//             >
//                 {
//                     data.map(({id, image, names, clients })=>{
//                         return(


//                 <SwiperSlide key={id} className="testimonials">
//                         <div className="clients__avatar">
//                            <img src={image} alt="" />
//                         </div>
//                         <h3 className='clients__name'>{names}</h3>
//                         <small className='clients__review'>{clients}</small>
//                 </SwiperSlide>


//                         )
//                     })
//                 }
//             </Swiper>
//         </section>
//     );
// };

// export default Testimonials;












// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


import { Data } from './Data';
import'./Testimonials.css';

const Testimonials = () => {
    return (
        <section className='testimonials container section'>
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper 
             loop = {true}
             grabCursor={true}
             spaceBetween={24}
             pagination={{
               clickable: true,
             }}
             breakpoints={{
               576: {
                 slidesPerView: 2,              
               },
               768: {
                 slidesPerView: 2,
                 spaceBetween: 48,
               },
            
             }}
             modules={[Pagination]}
            className="testimonial__container" 
            
            >
                {Data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className='testimonial__img'/>

                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;