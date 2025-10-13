import React from "react";
import styles from "./Reviews.module.css";
import reviewOne from "./../../assets/Testimonials-03.jpg";
import reviewTwo from "./../../assets/Testimonials-07.jpg";
import reviewThree from "./../../assets/Trips08.jpg";

const testimonials = [
  {
    name: "Priya Shah",
    location: "Ahmedabad, India",
    quote:
      "Our anniversary trip to the Amalfi Coast was pure magic. Every transfer, tasting, and sunset sail was planned to perfection.",
    image: reviewOne,
    rating: 5,
  },
  {
    name: "Liam Martinez",
    location: "Melbourne, Australia",
    quote:
      "Patel Travel curated a safari with purpose. From conservation talks to bespoke lodges, it never felt like a cookie-cutter tour.",
    image: reviewTwo,
    rating: 4,
  },
  {
    name: "Nina Kovács",
    location: "Budapest, Hungary",
    quote:
      "I booked a last-minute solo adventure through Patagonia. They handled flights, guides, and stunning lodge stays without a hitch.",
    image: reviewThree,
    rating: 5,
  },
];

function Reviews() {
  return (
    <section className={`${styles.reviews} section`} id="reviews">
      <div className={styles.headingBlock}>
        <p className={styles.eyebrow}>Guest stories</p>
        <h2>Reviews from travelers across the globe</h2>
        <p>
          Real experiences from guests who trusted Patel Travel to bring their
          bucket-list journeys to life.
        </p>
      </div>

      <div className={styles.reviewGrid}>
        {testimonials.map((review) => (
          <article className={styles.reviewCard} key={review.name}>
            <div className={styles.avatarWrapper}>
              <img src={review.image} alt={`${review.name} portrait`} />
            </div>
            <blockquote>
              <p>“{review.quote}”</p>
            </blockquote>
            <div className={styles.meta}>
              <h4>{review.name}</h4>
              <span>{review.location}</span>
            </div>
            <div className={styles.rating}>
              {Array.from({ length: review.rating }).map((_, index) => (
                <i key={index} className="ri-star-fill" />
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, index) => (
                <i key={index} className="ri-star-line" />
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.ctaRow}>
        <div>
          <h3>Ready to write your own travel story?</h3>
          <p>
            Share your dream trip, and our specialists will build a tailored itinerary within 48 hours.
          </p>
        </div>
        <button type="button">Start planning</button>
      </div>
    </section>
  );
}

export default Reviews;