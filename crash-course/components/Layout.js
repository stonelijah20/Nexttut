import styles from '../styles/Home.module.css'
import Nav from './Nav'

function Layout({children}) {
  return (
    <>
        <div className={styles.main}>
            <Nav/>
            {children}
        </div>
    </>
  )
}

export default Layout