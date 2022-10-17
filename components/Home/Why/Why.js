import Image from "next/image";
import React from "react";
import styles from "./Why.module.css";
const Why = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Why should you have a cat?</p>
        <p className={styles.text}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <button>READ MORE</button>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.first}>
          <Image
            layout="fill"
            src={"/static/image2.png"}
            alt=""
            objectFit="cover"
          />
        </div>
        <div className={styles.second}>
          <Image
            layout="fill"
            src={"/static/image1.png"}
            alt=""
            objectFit="cover"
          />
        </div>
        <div className={styles.third}>
          <Image
            layout="fill"
            src={"/static/image3.png"}
            alt=""
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
