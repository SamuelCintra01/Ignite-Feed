import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./index.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://github.com/SamuelCintra01.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Samuel Cintra</strong>
              <time
                title="15 de Julho ás 10:28h"
                dateTime="2023-07-15 10:28:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! </p>
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
