import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import "./Carrusel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import ProductoPreview from "./ProductoPreview"
// ChatGPT 💕
//_________________________module_________________________
function Carrusel ( ) {
    const courses = [
        {
          id: 1,
          title: "Polera Top Negra Pro",
          description: "Solo para gente Cool",
          rating: 4.5,
          precio: 10,
          imageURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcThqnITbTsA6J2yYve0lF3RGxPteif-bhy4I1lOjCjDbaLb_gRNUK-Kjkzi-fB1iEiXfwvcnCDQKnhlX09Bu5aedadxWO9_CzntcBBgzJoz1SCAbpKtNUJP&usqp=CAE",
        },
        {
          id: 2,
          title: "Curso 2",
          description: "Descripción del Curso 2",
          rating: 3.8,
          precio: 30,
          imageURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoS6dPxz8_3sICQqHwTl28wvKJzItQSR86htfkGXZdKNhQzI1P_RtG1g5YSRl27asOlJgiuB8t3ar8g5R6HFMNJ-6QRk_zmqOkbAy9unF8lbnyXUzKGBXTXA&usqp=CAE",
        },
        // Agrega más objetos según sea necesario
      ];
      
    //component:
    return (
            <div className = "coursesSwiperComponent"> 
                <div className="navigation-container">
                    <Swiper 
                        autoplay={{
                            delay: 4500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}                 
                        enabled={true}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        effect={"coverflow"}
                        spaceBetween={300}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1}
                        keyboard={{
                            enabled: true,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 2.5,
                            slideShadows: false
                        }}
                        mousewheel
                        pagination={{
                            el:".swiper-pagination",
                            clickable: true
                        }}
                        allowSlideNext={true}
                        navigation={{
                            prevEl:".swiper-button-prev",
                            nextEl:".swiper-button-next",
                        }}
                        className="swiper-container"
                        nested={true}
                    >
                        {
                            courses.map((course) => (
                                <SwiperSlide key={course.id} style={{ margin: 0 }}>
                                    <ProductoPreview
                                        id={course.id}
                                        title={course.title}
                                        description={course.description}
                                        rating={course.rating}
                                        imageURL={course.imageURL}
                                        precio ={course.precio}
                                        className="courseCardContainer"
                                    />
                                </SwiperSlide>
                            ))
                        }
                        {/* <div className="navigation-container">
                        </div> */}
                    </Swiper>
                    {/* <div className="navigation-container2">
                        <button className="swiper-button-next" />
                        <button className="swiper-button-prev" />
                    </div> */}
                </div>
             
            </div>
    )
}

export default Carrusel;