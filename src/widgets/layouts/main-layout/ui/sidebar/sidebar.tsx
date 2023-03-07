import { ISidebarSection, SidebarSection } from './sidebar-section';
import styles from './sidebar.module.scss';
import React from 'react';
import { uniteClasses } from '@/shared';

interface ISidebar {
  categoriesData: ISidebarSection[];
  className?: string;
}

// TODO in future - move out to shared layer and reuse there (to make different layouts with sidebar)
export const Sidebar: React.FC<ISidebar> = ({ categoriesData, className }) => {
  return (
    <div className={uniteClasses(styles.sidebar, className)}>
      {categoriesData.map((data, index) => (
        <SidebarSection
          key={index}
          section={data.section}
          topics={data.topics}
        />
      ))}
    </div>
  );
};
