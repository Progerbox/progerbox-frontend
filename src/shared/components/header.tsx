import Image from 'next/image';
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Image className={styles.logoIcon} src="/icons/logo.svg" alt="Progerbox logotype" />
          <div>Progerbox</div>
        </div>
        <div className={styles.headerRight}>
          <Image src="/icons/logout.svg" alt="Logout button" />
        </div>
      </div>
    </div>
  );
};
