import React from "react";
import styles from "./MoreDetails.module.css";
import panoramaOne from "./../../assets/landscape-Panorama-02.jpg";
import panoramaTwo from "./../../assets/landscape-Panorama-04.jpg";

const detailCards = [
  {
    title: "Signature itineraries",
    description:
      "Choose one of our curated travel themes or mix and match adventures, cultural immersion, and time to unwind.",
    image: panoramaOne,
    cta: "Explore sample routes",
  },
  {
    title: "Handpicked stays",
    description:
      "From boutique eco-lodges to five-star resorts, you rest in style with breakfast spreads and sunset views on us.",
    image: panoramaTwo,
    cta: "View partner hotels",
  },
];

function MoreDetails() {
  return (
    <section className={`${styles.moreDetails} section`} id="details">
      <div className={styles.headerBlock}>
        <p className={styles.eyebrow}>Plan with confidence</p>
        <h2>Every detail engineered for a seamless escape</h2>
        <p>
          You tell us your travel style, we map the perfect journey. Flexible
          payment plans, private guides, and immersive experiences keep your
          itinerary as unique as you are.
        </p>
      </div>
      <div className={styles.cardsGrid}>
        {detailCards.map((card) => (
          <article key={card.title} className={styles.card}>
            <img src={card.image} alt={card.title} />
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button type="button">{card.cta}</button>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.stepsGrid}>
        <div className={styles.stepItem}>
          <span>01</span>
          <div>
            <h4>Consultation call</h4>
            <p>Share your wishlist during a 30-minute phone or video loop.</p>
          </div>
        </div>
        <div className={styles.stepItem}>
          <span>02</span>
          <div>
            <h4>Tailored proposal</h4>
            <p>Receive a visual itinerary built with custom experiences and add-on options.</p>
          </div>
        </div>
        <div className={styles.stepItem}>
          <span>03</span>
          <div>
            <h4>Seamless travel</h4>
            <p>We coordinate logistics, upgrades, and in-destination support for peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreDetails;