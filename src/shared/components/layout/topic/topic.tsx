import styles from "./topic.module.scss";

interface ITopic {
  id: number;
  title: string;
  description: string;
}

export const Topic: React.FC<ITopic[]> = ({ ...topicData }) => {
  const { title, description } = topicData[0];

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.line} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
