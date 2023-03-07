import styles from './column.module.scss';
import React, { ReactNode } from 'react';
import { uniteClasses } from '@/shared';

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Column: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={uniteClasses(styles.container, className)}>
      {children ?? null}
    </div>
  );
};
