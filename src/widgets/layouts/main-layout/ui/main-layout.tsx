import { categoriesStub } from '@/shared';
import { Header } from '@/widgets';
import { Sidebar } from './sidebar/sidebar';
import styles from './main-layout.module.scss';
import { Column } from './column/column';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.layoutContainer}>
        <Sidebar categoriesData={categoriesStub.data} />
        {children ?? null}
        <Column>
          <div className={styles.columnBlockTop} />
          <div className={styles.columnBLockBottom} />
        </Column>
      </div>
    </div>
  );
};
