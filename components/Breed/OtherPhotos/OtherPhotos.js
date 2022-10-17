import Image from "next/image";
import styles from "./OtherPhotos.module.css";
const OtherPhotos = ({ photos }) => {
  return (
    <section>
      <p className={styles.title}>Other Photos</p>
      <div className={styles.imagesContainer}>
        {photos.map((photoUrl, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              display: "block",
              width: "278px",
              height: "auto",
            }}
          >
            <Image
              className={styles.image}
              src={photoUrl}
              width={278}
              height={278}
              alt={"Picture of a cat"}
              objectFit="cover"
              layout="responsive"
              sizes="(max-width: 2000px) 450px"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherPhotos;
