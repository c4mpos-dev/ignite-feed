import "./global.css"
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Cauã Campos"
            content="Teakfnmjawio nam wagfjkolawngawipklg a,.g awgioawgljkawgiawjgfa gawmgnawgikolpawmngawk,g aw."
          />
          <Post 
            author="Cauã Ambrozio"
            content="Teakfnmjawio nam wagfjkolawngawipklg a,.g awgioawgljkawgiawjgfa gawmgnawgikolpawmngawk,g aw."
          />
        </main>
      </div>
    </div>
  )
}

export default App