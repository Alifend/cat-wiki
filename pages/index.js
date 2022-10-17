import Head from "next/head";
import About from "./../components/Home/About";
import Layout from "/components/Layout/Layout";
import Why from "./../components/Home/Why/Why";
import MostSearchedBreeds from "./../components/Home/MostSearchedBreeds/MostSearchedBreeds";
import styles from "../styles/Home.module.css";
import { getBreeds, getMostSearchedBreeds } from "../services/CatServices";

export default function Home({ breeds }) {
  return (
    <div className={styles.container}>
      <About breeds={breeds} />
      <MostSearchedBreeds breeds={breeds} />
      <Why />
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await getBreeds();
  const data = response.data.map((breed) => ({
    id: breed.id,
    name: breed.name,
    url: breed.image.url,
  }));

  return {
    props: { breeds: data }, // will be passed to the page component as props
  };
}

Home.Layout = Layout;
