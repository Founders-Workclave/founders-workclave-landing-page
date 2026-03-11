import React from "react";
import styles from "./styles.module.css";
import Star from "@/svgs/star";
import Consultant from "@/svgs/consultant";
import Arrow from "@/svgs/arrow";
import Image from "next/image";
import Link from "next/link";

const FounderHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.heroTexts}>
          <div className={styles.heroBtn}>
            <Star />
            <p>Empowering founders, one idea at a time</p>
          </div>
          <h1>
            Build Your Next Big Product — From Idea to Launch, All in One
            Platform
          </h1>
          <p>
            Validate your concept, generate your PRD, and let our expert team
            build your product — powered by AI intelligence and human
            craftsmanship.
          </p>
          <div className={styles.ctaButton}>
            <Link className={styles.ctaOne} href="/coming-soon">
              <Consultant />
              Try the AI Consultant
            </Link>
            <Link
              className={styles.ctaTwo}
              href="https://app.foundersworkclave.com/sign-up"
            >
              Get Started for Free <Arrow />
            </Link>
          </div>
        </div>
        <div className={styles.glowline}></div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/heroImg.png"
          width={1000}
          height={1000}
          alt="img"
          priority
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default FounderHero;
