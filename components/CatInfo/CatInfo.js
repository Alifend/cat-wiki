import CatPicture from "../Breed/CatPicture/CatPicture";
import CatStatistics from "../Breed/CatStatistics/CatStatistics";
import OtherPhotos from "../Breed/OtherPhotos/OtherPhotos";
import styles from "./CatInfo.module.css";
const CatInfo = () => {
  return (
    <div className={styles.container}>
      <CatPicture />
      <CatStatistics />
      <OtherPhotos />
    </div>
  );
};

export default CatInfo;
