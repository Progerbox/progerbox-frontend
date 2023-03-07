import { ISidebarSection, SidebarSection } from "./sidebarSection";
import styles from "./sidebar.module.scss";

interface ISidebar {
  data: ISidebarSection[];
}

export const Sidebar: React.FC<ISidebar> = ({ data }) => {
  return (
    <div className={styles.sidebar}>
      {data.map((data, index) => (
        <SidebarSection
          key={index}
          section={data.section}
          topics={data.topics}
        />
      ))}
    </div>
  );
};
