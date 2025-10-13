import React from 'react';
import headerCSS from './../Header/Header.module.css';

import { Autoplay } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import destinationImg1 from './../../assets/tour-01.png';
import destinationImg2 from './../../assets/tour-02.png';
import destinationImg3 from './../../assets/tour-03.png';
import destinationImg4 from './../../assets/tour-04.png';
import destinationImg5 from './../../assets/tour-05.png';
import destinationImg6 from './../../assets/tour-06.png';

import heroOverlay from './../../assets/Trips06.jpg';

function Header() {
  return (
    <header className={`${headerCSS.header_wrapper} section`} id="home">
      <div className={headerCSS.heroGrid}>
        <div className={headerCSS.imageContainer}>
          <div className={headerCSS.heroBadge}>Top-Rated Travel Curators · Since 2009</div>
          <h1>Explore the world, one unforgettable journey at a time</h1>
          <p>
            Bespoke itineraries, handpicked stays, and immersive cultural moments crafted
            by Patel Travel experts. Let your next adventure feel effortless.
          </p>
          <div className={headerCSS.heroActions}>
            <button type="button" className={headerCSS.primaryCta}>
              Discover destinations
            </button>
            <button type="button" className={headerCSS.secondaryCta}>
              Build my itinerary
            </button>
          </div>
          <div className={headerCSS.heroStats}>
            <div>
              <strong>25K+</strong>
              <span>Happy explorers</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Guest review score</span>
            </div>
            <div>
              <strong>80+</strong>
              <span>Exclusive partners</span>
            </div>
          </div>
        </div>
        <div className={headerCSS.heroVisual}>
          <img src={heroOverlay} alt="Traveler at a scenic viewpoint" />
        </div>
      </div>

      <div className={headerCSS.destinationCarousel}>
        <h2>Dream destinations curated for you</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          className={headerCSS.swiper}
        >
          {[destinationImg1, destinationImg2, destinationImg3, destinationImg4, destinationImg5, destinationImg6].map(
            (imageSrc, index) => (
              <SwiperSlide key={imageSrc}>
                <div className={headerCSS.DestinationCard}>
                  <div className={headerCSS.destinationNumber}>{`0${index + 1}`}</div>
                  <img src={imageSrc} alt={`Featured destination ${index + 1}`} />
                  <p>Limited season offers</p>
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </header>
  );
}

export default Header;