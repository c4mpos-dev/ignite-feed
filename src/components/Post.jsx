import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/G4rutti.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Davi Garutti</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="16 de Fevereiro às 23:42" dateTime="2025-02-16">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="https://c4mpos-dev.github.io/">c4mpos-dev.github.io/</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Comentário</button>
                </footer>
            </form>

        </article>
    );
}