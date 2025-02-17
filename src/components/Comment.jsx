import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/Iagoliveira05.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Iago Oliveira</strong>
                            <time title="16 de Fevereiro às 23:42" dateTime="2025-02-16">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash />
                        </button>
                    </header>

                    <p>Muito bom Davi, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

