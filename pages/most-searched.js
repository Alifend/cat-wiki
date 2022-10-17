import Layout from "/components/Layout/Layout";
import styles from "../styles/MostSearched.module.css";
import { getMostSearchedBreeds } from "../services/CatServices";
import CatResume from "../components/MostSearched/CatResume";
export default function MostSearchedBreeds({ mostSearchedBreeds }) {
  return (
    <div className={styles.container}>
      <h1>Top 10 most searched breeds</h1>
      {mostSearchedBreeds.map((breed, index) => (
        <CatResume key={breed.id} breed={breed} index={index + 1} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const mostSearchedBreeds = await getMostSearchedBreeds();

  return {
    props: { mostSearchedBreeds, revalidate: 60 * 60 }, // will be passed to the page component as props
  };
}

MostSearchedBreeds.Layout = Layout;
