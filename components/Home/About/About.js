import Image from "next/image";
import React, { useEffect, useState } from "react";
import SelectBox from "../SelectBox/SelectBox";
import CatWikiLogo from "/public/static/CatWikiLogo.svg";
import styles from "./About.module.css";
const About = ({ breeds }) => {
  const [filteredBreeds, setFilteredBreeds] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const handler = () => setToggle(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  useEffect(() => {
    const filteredData = breeds?.filter((breed) =>
      breed.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBreeds(filteredData);
  }, [searchText, breeds]);

  return (
    <section className={styles.about}>
      <Image
        src={"/static/HeroImagelg.png"}
        layout="fill"
        objectFit="cover"
        className={styles.background}
        alt=""
        priority={true}
      />
      <div className={styles.textContainer}>
        <img
          className={styles.img}
          src="/static/CatwikiLogo.svg"
          alt="Cat Wiki logo"
          width={150}
          height={35}
        />
        <p className={styles.text}>Get to know more about your cat breed</p>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setToggle(true);
          }}
          className={styles.inputBox}
        >
          <input
            placeholder="Enter your breed"
            className={styles.input}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          {toggle && (
            <ul className={styles.breedList}>
              {breeds &&
                filteredBreeds?.map((breed) => (
                  <SelectBox key={breed.id} id={breed.id} name={breed.name} />
                ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
