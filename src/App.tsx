import "./global.css"
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/G4rutti.png",
      name: "Davi Garutti",
      role: "CEO @ GaruttiSites"
    },
    content:[
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 c4mpos-dev.github.io/" }
    ],
    publishedAt: new Date("2025-02-19 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/Iagoliveira05.png",
      name: "Iago Oliveira",
      role: "CEO @ AndradeApps"
    },
    content:[
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 c4mpos-dev.github.io/" }
    ],
    publishedAt: new Date("2025-02-10 13:00:00"),
  }
]

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App