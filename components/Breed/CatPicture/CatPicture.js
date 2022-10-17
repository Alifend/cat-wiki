import Image from "next/image";
import React from "react";
import styles from "./CatPicture.module.css";
const CatPicture = ({ image, name }) => {
  return (
    <figure className={styles.photoContainer}>
      <div className={styles.decoration}>
        <Image
          className={styles.image}
          src={image.url}
          width={371}
          height={371}
          layout="responsive"
          alt={"Picture of a " + name + " cat"}
          objectFit="cover"
          priority={true}
          sizes="(max-width: 2000px) 450px"
        />
      </div>
    </figure>
  );
};

export default CatPicture;
