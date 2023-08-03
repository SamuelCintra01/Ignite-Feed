import { Post, PostProps } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./app.module.css";

import "./global.css";

interface IPost extends PostProps {
  id: number;
}

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/SamuelCintra01.png",
      name: "Samuel Cintra",
      role: "Desenvolvedor Web",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-01 18:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/alexleandr.png",
      name: "Alex Leandro",
      role: "Frontend Developer | Javascript | React",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-07-25 17:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            console.log("Teste", post.content);
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
