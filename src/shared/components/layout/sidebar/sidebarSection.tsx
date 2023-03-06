import styles from "./sidebarSection.module.scss";

export interface ISidebarSection {
  id?: number;
  section: string;
  topics: {
    id: number;
    title: string;
    description: string;
  }[];
}

export const SidebarSection: React.FC<ISidebarSection> = ({
  section,
  topics,
}) => {
  return (
    <div className={styles.sidebarSection}>
      <h3>{section}</h3>
      <div className={styles.line} />
      {topics.map((item) => (
        <a href="" key={item.id}>
          {item.title}
        </a>
      ))}
    </div>
  );
};
