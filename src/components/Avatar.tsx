import styles from './Avatar.module.css';

type Props ={
  imageURL:string;
  post?:boolean
}

export function Avatar ({imageURL, post}:Props){

  return(
    <div>
      <img className={post? styles.avatarPost: styles.avatar} src={imageURL} alt="imagem do usuário" />
    </div>
  )

}