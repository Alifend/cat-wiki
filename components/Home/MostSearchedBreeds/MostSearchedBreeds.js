import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Most.module.css";
const MostSearchedBreeds = ({ breeds }) => {
  const [counter, setCounter] = useState(4);

  const handleMore = () => {
    if (counter == 4) {
      setCounter(12);
    } else {
      setCounter(4);
    }
  };
  const router = useRouter();
  return (
    <section className={styles.container}>
      <Link href="most-searched">
        <a>
          <p className={styles.tab}>Most Searched Breeds</p>
        </a>
      </Link>
      <div className={styles.boxTitle}>
        <h5 className={styles.title}>+66 Breeds For you to discover</h5>
        <button onClick={() => handleMore()} className={styles.seeMoreButton}>
          SEE MORE{" "}
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {breeds.slice(0, counter).map((breed) => (
          <div
            key={breed.id}
            className={styles.card}
            onClick={() => router.push("/breed/" + breed.id)}
          >
            <Image
              className={styles.image}
              src={breed.url}
              width={220}
              height={220}
              alt={"Picture of a cat"}
              layout="responsive"
              sizes="(max-width: 2000px) 400px"
              objectFit="cover"
            />
            <p>{breed.name}</p>
          </div>
        ))}

        {/* <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div> */}
      </div>
    </section>
  );
};

export default MostSearchedBreeds;
