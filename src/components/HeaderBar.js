import React from 'react';
import styles from './styles/HeaderBar.module.css';

const HeaderBar = () => {
    return(
        <>
            <header id={styles.header}>
                <div style={{color:'gold'}}><a href="https://www.matthew-bisicchia.com/" id={styles.siteName}>matthew-bisicchia.com</a></div>
            </header>
        </>
    );
}

export default HeaderBar;
