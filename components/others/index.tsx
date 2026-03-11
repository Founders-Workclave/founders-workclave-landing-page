import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Consultant from "@/svgs/consultant";
import Arrow from "@/svgs/arrow";
import Link from "next/link";

const Others = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}>
          <Image
            src="/assets/launch.png"
            width={500}
            height={500}
            alt="launch"
          />
        </div>
        <div className={styles.colTwo}>
          <Image
            src="/assets/people.png"
            width={500}
            height={500}
            alt="people"
          />
          <h2>
            We have helped 50+ founders launch validated products using
            AI-driven PRDs
          </h2>
          <div className={styles.ctaButton}>
            <Link className={styles.ctaOne} href="/coming-soon">
              <Consultant />
              Try the AI Consultant
            </Link>
            <Link
              className={styles.ctaTwo}
              href="https://app.foundersworkclave.com/sign-up"
              target="_blank"
            >
              Get Started for Free <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
