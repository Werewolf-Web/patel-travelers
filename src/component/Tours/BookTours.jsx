import React from "react";
import styles from "./BookTours.module.css";
import tourHero from "./../../assets/search-bg.jpg";
import tripImageOne from "./../../assets/Trips01.jpg";
import tripImageTwo from "./../../assets/Trips02.jpg";
import tripImageThree from "./../../assets/Trips03.jpg";
import tripImageFour from "./../../assets/Trips05.jpg";

const tourHighlights = [
  {
    title: "Mystic Himalayan Escape",
    description:
      "Nine days of panoramic drives, mindful hikes, and tea tasting across Bhutan's sacred valleys.",
    duration: "9 Days",
    price: "From $2,350",
    image: tripImageOne,
  },
  {
    title: "Santorini Sunset Cruise",
    description:
      "Sail the caldera at golden hour with private dining, sommelier pairings, and volcanic spa stops.",
    duration: "5 Days",
    price: "From $1,890",
    image: tripImageTwo,
  },
  {
    title: "Kenya Conservation Safari",
    description:
      "Encounter the Big Five alongside local wildlife experts and support community-led conservation projects.",
    duration: "10 Days",
    price: "From $3,780",
    image: tripImageThree,
  },
];

const departureDates = [
  { month: "November", year: 2025, status: "Limited", spots: 6 },
  { month: "December", year: 2025, status: "Open", spots: 14 },
  { month: "January", year: 2026, status: "Filling", spots: 9 },
];

function BookTours() {
  return (
    <section className={`${styles.bookTours} section`} id="tours">
      <div className={styles.heroCard}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Book your next getaway</p>
          <h2>Curated group departures & bespoke private tours</h2>
          <p>
            Reserve a signature Patel Travel journey or request a fully custom itinerary.
            Flexible payment plans and the best price guarantee included.
          </p>
          <div className={styles.heroActions}>
            <button type="button" className={styles.primaryCta}>
              Plan a custom tour
            </button>
            <button type="button" className={styles.secondaryCta}>
              Download brochure
            </button>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <img src={tourHero} alt="Traveler overlooking mountains" />
        </div>
      </div>

      <div className={styles.tourHighlightWrapper}>
        <div className={styles.sectionHeading}>
          <h3>Featured departures</h3>
          <p>Handcrafted itineraries showcasing the best of each destination.</p>
        </div>
        <div className={styles.tourCardsGrid}>
          {tourHighlights.map((tour) => (
            <article className={styles.tourCard} key={tour.title}>
              <img src={tour.image} alt={tour.title} />
              <div className={styles.tourContent}>
                <h4>{tour.title}</h4>
                <p>{tour.description}</p>
                <div className={styles.tourMeta}>
                  <span>{tour.duration}</span>
                  <span>{tour.price}</span>
                </div>
                <button type="button">Reserve spot</button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.departureBoard}>
        <div className={styles.sectionHeading}>
          <h3>Upcoming departures</h3>
          <p>Secure your seat early and enjoy complimentary upgrades.</p>
        </div>
        <div className={styles.departureList}>
          {departureDates.map((departure) => (
            <div key={departure.month} className={styles.departureRow}>
              <div>
                <h4>
                  {departure.month} {departure.year}
                </h4>
                <span>
                  {departure.status} availability · {departure.spots} spots left
                </span>
              </div>
              <button type="button">Hold my seat</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookTours;