import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Twitter from "@/svgs/twittter";
import Linkedln from "@/svgs/linkedln";
import Facebook from "@/svgs/facebook";
import Instagram from "@/svgs/instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.footerContent}>
        <Image src="/assets/logo-new.png" alt="Logo" width={150} height={50} />
        <div className={styles.links}>
          <Link href="#how-it-works">How it Works</Link>
          <Link href="#features">Features</Link>
          <Link href="#contact">Contact Us</Link>
        </div>
        <div className={styles.socials}>
          <Link
            href="https://x.com/workclave"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </Link>
          <Link
            href="https://www.linkedin.com/showcase/founders-workclave/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedln />
          </Link>
          {/* <Link
            href="https://www.facebook.com/FoundersWorkclave"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </Link> */}
          <Link
            href="https://www.instagram.com/FoundersWorkclave"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
