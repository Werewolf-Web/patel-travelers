import React from "react";
import styles from "./AboutSection.module.css";
import aboutBackground from "./../../assets/about-bg.png";
import layerShape from "./../../assets/Layer_1-2.png";

function AboutSection() {
  return (
    <section className={`${styles.aboutSection} section`} id="about">
      <div className={styles.copyWrapper}>
        <p className={styles.eyebrow}>About Patel Travel</p>
        <h2 className={styles.heading}>
          Tailor-made journeys designed for breathtaking memories
        </h2>
        <p className={styles.description}>
          From luxury escapes to budget-friendly adventures, our travel experts
          craft immersive itineraries that celebrate culture, cuisine, and the
          unforgettable landscapes of each destination. We handle every detail so
          you can focus on living the moment.
        </p>
        <ul className={styles.highlights}>
          <li>
            <span>Personal travel designers</span>
            Dedicated specialists who fine-tune your itinerary around your pace
            and passions.
          </li>
          <li>
            <span>360° support</span>
            Assistance before, during, and after your trip to keep you confident
            on the road.
          </li>
          <li>
            <span>Authentic experiences</span>
            Handpicked local partners ensure you see hidden gems beyond the
            guidebooks.
          </li>
        </ul>
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <strong>15+</strong>
            <span>Years curating bespoke tours</span>
          </div>
          <div className={styles.statCard}>
            <strong>98%</strong>
            <span>Guests who return for another journey</span>
          </div>
          <div className={styles.statCard}>
            <strong>120+</strong>
            <span>Handpicked destinations worldwide</span>
          </div>
        </div>
      </div>
      <div className={styles.visualWrapper}>
        <img
          className={styles.heroImage}
          src={aboutBackground}
          alt="Travelers exploring mountains"
        />
        <div className={styles.badge}>
          <img src={layerShape} alt="Patel Travel badge" />
          <div>
            <p>Your story starts here</p>
            <span>Expert trip planning since 2009</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;