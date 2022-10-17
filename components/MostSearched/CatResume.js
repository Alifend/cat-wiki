import Image from "next/image";
import React from "react";
import styles from "./CatResume.module.css";
const CatResume = ({ breed, index }) => {
  return (
    <div className={styles.container}>
      <picture className={styles.catPicture}>
        <Image
          className={styles.image}
          src={breed.image.url}
          width={170}
          height={170}
          layout="fixed"
          alt={"Picture of a " + breed.name + " cat"}
          objectFit="cover"
          sizes="(max-width: 2000px) 340px"
        />
      </picture>
      <article className={styles.article}>
        <h3 className={styles.title}>{index + ". " + breed.name}</h3>
        <p className={styles.description}>{breed.description}</p>
      </article>
    </div>
  );
};

export default CatResume;
