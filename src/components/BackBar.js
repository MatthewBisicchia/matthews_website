import React from 'react';
import styles from './styles/BackBar.module.css';
// import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackBar = () => {
    return(
        <>
            <header id={styles.header}>
                <div style={{color:'gold'}}>    
                    <a id={styles.text} href='https://matthewbisicchia.github.io/site/#home' ><ArrowBackIcon  id={styles.arrowBack} /> Back to Home Page</a>       
                    {/* <a id={styles.text} href='https://matthewbisicchia.github.io/site/#home' > Back to Home Page</a>        */}
                </div>
            </header>     
        </>
    );
}

export default BackBar;
