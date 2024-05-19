import React from 'react';
import styles from './styles/BackBar.module.css';
// import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";

const BackBar = () => {
    return(
        <>
            <header id={styles.header}>
                <div style={{color:'gold'}}>    
                    {/* <a id={styles.text} href='https://www.matthew-bisicchia.com/' ><ArrowBackIcon  id={styles.arrowBack} /> Back to Home Page</a>        */}
                    <a id={styles.text} href='https://www.matthewbisicchia.github.io/matthews_website/#home' > Back to Home Page</a>       
                </div>
            </header>     
        </>
    );
}

export default BackBar;
