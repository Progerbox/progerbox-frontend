import styles from "./articles.module.scss";

export const Articles = ({ }) => { // Thats likely incorrect naming, will need to decide it with team

  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.bottom} />
    </div>
  );
};
