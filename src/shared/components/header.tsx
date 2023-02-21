import styles from "./header.module.scss";

interface IProps {
  name: string;
}

export const Header: React.FC<IProps> = ({ name }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img className={styles.logoIcon} src="/icons/logo.svg" />
          {name}
        </div>
        <div className={styles.headerRight}>
          <img src="/icons/logout.svg" />
        </div>
      </div>
    </div>
  );
};
