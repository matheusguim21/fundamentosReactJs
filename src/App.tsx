
import "./global.css"
import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css';
import './global.css'

function App() {
 

  return (
    <>
     <Header/>
    

     <div className={styles.wrapper}>
       <aside></aside>
       <main></main>
     </div>
     
    </>
  )
}

export default App
