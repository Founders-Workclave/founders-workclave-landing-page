import React from "react";
import styles from "./styles.module.css";
import File from "@/svgs/file";
import { workSteps } from "@/utils/data";
import Link from "next/link";
import ConsultantTwo from "@/svgs/consultantTwo";

const HowItWorks = () => {
  return (
    <div className={styles.container} id="how-it-works">
      <div className={styles.contain}>
        <div className={styles.heroTexts}>
          <div className={styles.heroBtn}>
            <File />
            <p>How it works</p>
          </div>
          <div className={styles.otherTexts}>
            <h2>How Founders Turn Ideas Into Products</h2>
            <p>
              From idea to launch, every step is guided by AI precision and
              human expertise — so you can build faster, smarter, and with
              confidence
            </p>
          </div>
        </div>
        <div className={styles.steps}>
          {workSteps.map((items, index) => {
            return (
              <div key={index} className={styles.step}>
                <div className={styles.circle}>
                  <div className={styles.numbers}>
                    <p>{items.number}</p>
                  </div>
                </div>
                <div className={styles.texts}>
                  <h4>{items.title}</h4>
                  <p>{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.btn}>
          <Link href="/coming-soon">
            <ConsultantTwo />
            Try the AI Consultant now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
