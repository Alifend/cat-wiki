import React from "react";
import Bar from "../Bars/Bar";
import styles from "./CatStatistics.module.css";
const CatStatistics = ({ breed }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{breed.name}</span>
      <span className={styles.description}>{breed.description} </span>
      <label className={styles.category}>
        <span className={styles.categoryName}>Temperament:</span>
        <span className={styles.text}> {breed.temperament}</span>
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Origin:</span>
        <span className={styles.text}> {breed.origin}</span>
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Life Span:</span>
        <span className={styles.text}> {breed.life_span}</span>
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Adaptability:</span>
        <Bar number={breed.adaptability} />
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Affection level:</span>
        <Bar number={breed.affection_level} />
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Child Friendly:</span>
        <Bar number={breed.child_friendly} />
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Intelligence:</span>
        <Bar number={breed.intelligence} />
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Health issues:</span>
        <Bar number={breed.health_issues} />
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Social needs:</span>
        <Bar number={breed.social_needs} />
      </label>
      <label className={styles.category}>
        <span className={styles.categoryName}>Stranger friendly:</span>
        <Bar number={breed.stranger_friendly} />
      </label>
    </div>
  );
};

export default CatStatistics;
