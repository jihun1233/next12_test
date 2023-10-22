import styles from '/styles/Header.module.css'

function Header({}) {
    return ( <header className={styles.header}>
        <p>
            header left
            </p>
            <p>right</p>
    </header> );
}

export default Header;