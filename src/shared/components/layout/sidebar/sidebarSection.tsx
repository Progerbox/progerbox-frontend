import styles from "./sidebarSection.module.scss";

export interface ISidebarSection {
  section: string;
  subSections: Array<{
    id: number;
    title: string;
  }>;
}

export const SidebarSection: React.FC<ISidebarSection> = ({
  section,
  subSections,
}) => {
  return (
    <div className={styles.sidebarSection}>
      <h3>{section}</h3>
      <div className={styles.line} />
      {subSections.map((item) => (
        <a href="" key={item.id}>
          {item.title}
        </a>
      ))}
    </div>
  );
};
