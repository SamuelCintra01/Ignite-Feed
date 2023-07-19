import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./app.module.css";

import "./global.css";

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
          <Post
            author="Samuel Cintra"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores cum quia minima a repudiandae blanditiis."
          />
        </main>
      </div>
    </div>
  );
}
