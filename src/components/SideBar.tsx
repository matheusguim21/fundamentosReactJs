import { PencilLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import styles from "./Sidebar.module.css"

export function SideBar (){

  const coverImageURL = 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const profileImageURL = 'https://github.com/matheusguim21.png'
 

  return(


    <aside className={styles.sidebar}>
      <img className={styles.coverImage} src={coverImageURL} alt="image" />

      <div className={styles.profile}>
       <Avatar imageURL={profileImageURL} />
        <strong>Matheus Cirino</strong>
        <span>Desenvolvedor  Web</span>
      </div>

      <footer>
        
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        
      </footer>
    </aside>
  )
}