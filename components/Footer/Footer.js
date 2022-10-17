import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="/">
        <a>
          <img
            className={styles.image}
            width="150"
            height="35"
            src="/static/CatwikiLogo.svg"
            alt="Cat Wiki logo"
          />
        </a>
      </Link>
      <p className={styles.text}>
        Created by Andres Celis - devChallenges.io 2022
      </p>
    </div>
  );
};

export default Footer;
