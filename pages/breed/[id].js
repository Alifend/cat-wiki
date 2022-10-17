import React, { useEffect } from "react";
import CatProfile from "../../components/Breed/CatProfile/CatProfile";
import OtherPhotos from "../../components/Breed/OtherPhotos/OtherPhotos";
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/SEO";
import { getBreeds } from "../../services/CatServices";

const Breed = ({ breed }) => {
  return (
    <>
      <SEO
        title={breed.name}
        description={breed.description}
        openGraph={{
          type: "website",
          title: breed.name,
          description: breed.description,
          images: [
            {
              url: breed.image.url,
              width: breed.image.width,
              height: breed.image.height,
              alt: breed.name,
            },
          ],
        }}
      />
      <CatProfile breed={breed} />
      <OtherPhotos photos={breed.photos} />
    </>
  );
};

export async function getStaticPaths() {
  const response = await getBreeds();
  const data = response.data;
  const paths = data.map((breed) => ({
    params: { id: breed.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await getBreeds();
  const data = response.data;
  const breed = data.find((breed) => breed.id == params.id);
  return {
    props: { breed },
  };
}

Breed.Layout = Layout;

export default Breed;
