import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Samuel Cintra"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores cum quia minima a repudiandae blanditiis."
          />
        </main>
      </div>
    </div>
  );
}
