import Link from "next/link";
import React from "react";
import { updateTimesSearched } from "../../../services/CatServices";
import styles from "./SelectBox.module.css";
const SelectBox = ({ id, name }) => {
  return (
    <Link href={"/breed/" + id}>
      <a>
        <li onClick={() => updateTimesSearched(id)} className={styles.box}>
          {name}
        </li>
      </a>
    </Link>
  );
};

export default SelectBox;
