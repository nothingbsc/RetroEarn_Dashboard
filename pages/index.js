import { render } from 'react-dom'; 
import styles from '../styles/Home.module.css'
import MyApp from './_app';

export default function Home() {
  return (
    <div className={styles.container}>
      <MyApp />
    </div>
  )
}
