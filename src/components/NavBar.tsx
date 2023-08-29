import styles from '../css/navBar.module.css';
function NavBar() {
    return <nav className={styles.navBar}>
        <ul className={styles.navBarWrapper}>
            <li className={styles.navBarItem}>
                <p>Home</p>
            </li>
            <li className={styles.navBarItem}>
                <p>About</p>
            </li>
            <li className={styles.navBarItem}>
                <p>Skills</p>
            </li>
            <li className={styles.navBarItem}>
                <p>Portfolio</p>
            </li>
            <li className={styles.navBarItem}>
                <p>
                    <a href='https://github.com/Gianluca-w/'>GitHub</a> 
                </p>
            </li>
            <li className={styles.navBarItem}>
                <p>Contact</p>
            </li>
        </ul>
    </nav>
}
export default NavBar;