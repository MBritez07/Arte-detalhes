import React, { Suspense ,useEffect } from "react";
import styles from "./LandingPage.module.css";
import { useInView } from "react-intersection-observer";
// import {useSelector}from "react-redux"

const LandingPage = () => {
//////////////////////Importaciones de componentes LAZY  ////////////////////
const Section1 = React.lazy(() => import("./Section1"));


//////////////////////Estados Globales Redux/////////////////////////////////
// const Lenguaje = useSelector((state) =>state.lenguaje);

// /////////////Efectos visuales scrolling y de optimización ////////////////////////////////////////////
const [ref, inView] = useInView({
    triggerOnce: true, // Solo se activará una vez
    threshold: 0.1, // Porcentaje de visibilidad para activar
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = section.getBoundingClientRect().bottom; // Cambio aquí
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };




  useEffect(() => {
    const parallaxEls = document.querySelectorAll("[data-speed]");

    const scrollHandler = () => {
      for (const parallaxEl of parallaxEls) {
        const direction = parallaxEl.dataset.direction === "up" ? "-" : "";
        const transformY = window.pageYOffset * parallaxEl.dataset.speed;

        parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
////////////////////////////////////////////////////////////////////////////////////////////////



  return (
    <div className={styles.LandingPage}>
      {/* Sección del banner */}
      <section className={styles.banner} data-speed="0.2">

      <div className={styles.imgcontainer3} data-speed="0.5">
      <h1>Logo or text1</h1>
        {/* <img className={styles.img3}  src="https://res.cloudinary.com/ddectuilp/image/upload/v1693193757/removal.ai__83aaeb1e-00d8-4601-b6a3-8dc846bbfbcb-_37e4f2c6-f748-488c-aad7-7e906c867d3b_bx9eql.png" alt="" /> */}
      </div>
      <div className={styles.imgcontainer} data-speed="0.3">
      <video className={styles.video} autoPlay loop muted>
    <source src="https://res.cloudinary.com/dvt1b6wh8/video/upload/v1700576275/Untitled_design_zh7dsu.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      </div>
        <div className={styles.bannerTitle2} data-speed="0.2">
        <h4 className={styles.h4}>
          Arte & detalhes
        </h4>
        </div>

        <div className={styles.scrollbutton} data-speed="0.2">
        <p className={styles.button} onClick={() => scrollToSection('section1')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg></p>
        </div>
      </section>

      {/* Sección 1 */}
      <section ref={ref} id="section1"  className={styles.section} data-speed="0.2">
        {inView ? (
            <Suspense fallback={<div>Loading...</div>}>
              <Section1 />
            </Suspense>
          ) : null}

      </section>

    {/* Sección 2 */}

    </div>
  );
};

export default LandingPage;
