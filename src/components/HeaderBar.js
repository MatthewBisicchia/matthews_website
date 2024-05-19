import React from 'react';
import styles from './styles/HeaderBar.module.css';

const HeaderBar = () => {
    return(
        <>
            <header id={styles.header}>
                <div style={{color:'gold'}}><a href="https://matthewbisicchia.github.io/matthews_website/#home" id={styles.siteName}>Matthew Bisicchia</a></div>
            </header>
        </>
    );
}

export default HeaderBar;
