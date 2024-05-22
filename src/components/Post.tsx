import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
type Props = {
  author:string;
  content:string

}

const profileImageURL = 'https://github.com/matheusguim21.png'
export function Post({author, content }:Props){
  return(
    
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar imageURL={profileImageURL} post/>
          <div className={styles.authorInfo}>
            <strong>
              Matheus Cirino
            </strong>
            <span>
              Desenvolvedor Web
            </span>

          </div>

        </div>
        <time  title="08 de maio às 9h" dateTime={"2024-05-08 09:00:00"} >Publicado há 1 hora</time>
      </header>
      <div>
        <p>Fala Pessoal</p>
        <p>Sou o matheus e tenho algo pra falar pra vocês </p>
        <p>Me formei em Ciências da Computação</p>
      </div>
    </article>

  )
}