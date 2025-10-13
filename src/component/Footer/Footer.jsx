import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} section`} id="contact">
      <div className={styles.topRow}>
        <div className={styles.brandBlock}>
          <h2>Patel Travel</h2>
          <p>
            Crafting once-in-a-lifetime adventures with a personal touch. From
            first consultation to your safe return, we guide every step.
          </p>
        </div>
        <div className={styles.newsletter}>
          <h3>Get destination inspiration</h3>
          <p>Monthly guides, early-bird offers, and expert travel stories.</p>
          <form>
            <input type="email" placeholder="Email address" aria-label="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={styles.contactBlock}>
          <h3>Contact</h3>
          <ul>
            <li>
              <i className="ri-mail-send-line" />
              hello@pateltravel.com
            </li>
            <li>
              <i className="ri-phone-line" />
              +91 98765 43212
            </li>
            <li>
              <i className="ri-map-pin-line" />
              221B Patel Avenue, Mumbai, India
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <p>© {new Date().getFullYear()} Patel Travel. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">
            <i className="ri-instagram-line" />
          </a>
          <a href="#" aria-label="Facebook">
            <i className="ri-facebook-circle-line" />
          </a>
          <a href="#" aria-label="YouTube">
            <i className="ri-youtube-line" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;