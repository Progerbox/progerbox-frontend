import styles from './topic.module.scss';
import React from 'react';

interface Props {
  id: number;
  title: string;
  description: string;
}

export const Topic: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.line} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
