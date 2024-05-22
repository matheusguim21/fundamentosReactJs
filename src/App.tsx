
import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';
import "./global.css";

function App() {
 

  return (
    <>
     <Header/>
    

     <div className={styles.wrapper}>
       <SideBar/>
       <main>
        <Post
        author='Matheus'
        content='Olá sou Matheus e sou desenvolvedor' 
        
         />
       </main>
     </div>
     
    </>
  )
}

export default App
