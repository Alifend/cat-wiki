import React from "react";
import CatPicture from "../CatPicture/CatPicture";
import CatStatistics from "../CatStatistics/CatStatistics";
import styles from "./CatProfile.module.css";
const CatProfile = ({ breed }) => {
  return (
    <section className={styles.container}>
      <CatPicture image={breed.image} name={breed.name} />
      <CatStatistics breed={breed} />
    </section>
  );
};

export default CatProfile;
