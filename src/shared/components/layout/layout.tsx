import { sidebarData, topicData } from "../constants/dataPlaceholders";
import { Header } from "../header";
import { Sidebar } from "./sidebar/sidebar";
import { Topic } from "./topic/topic";
import styles from "./layout.module.scss";
import { Articles } from './articles/articles';

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles.layoutContainer}>
        <Sidebar {...sidebarData} />
        <Topic {...topicData} />
        <Articles />
      </div>
    </div>
  );
};
