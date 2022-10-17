import styles from "./Bar.module.css";
const Bar = ({ number }) => {
  return (
    <div className={styles.container}>
      {Array(5)
        .fill(0)
        .map((element, index) => (
          <div
            key={index}
            className={`${styles.bar} ${index < number ? styles.colored : ""}`}
          ></div>
        ))}
    </div>
  );
};

export default Bar;
