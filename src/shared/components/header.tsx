import styles from "./header.module.scss";

interface IProp {
  name: string;
}

export const Header: React.FC<IProp> = ({ name }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img className={styles.logoIcon} src="/icons/Logo.svg" />
          {name}
        </div>
        <div className={styles.headerRight}>
          <img src="/icons/Logout.svg" />
        </div>
      </div>
    </div>
  );
};
