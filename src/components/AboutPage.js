import React from 'react';
import styles from './styles/AboutPage.module.css';
import resumePDF from '../assets/Matthew_Bisicchia_Resume.pdf';
import BackBar from './BackBar.js';

const AboutPage = () => {
  
    return(
        <React.Fragment>

            <BackBar />
            <div id={styles.about}>
               About
            </div>

            {/* <img src={matthew} id={styles.picture} /> */}

            <div style={{ fontSize: '15px', fontFamily: 'Arial', margin: '20px', fontWeight: 'bold', textAlign: 'center' }}> Click <a className={styles.link} href={resumePDF} without rel="noopener noreferrer" target="_blank"> here </a> to view my Resume.</div>

            <div className={styles.writing}>

                <p>
                    Hello & thanks for stopping by. My name is Matthew Bisicchia. I am an engineer & tech enthusiast. In May of 2022, I graduated from Rowan University in Glassboro, NJ, with a major
                    in Electrical and Computer Engineering and a minor in Computer Science. Feel free to check out my resume linked above for my work experience.
                </p> 

                <p>
                    Currently, I work as a Software Engineer at <a href='https://impulse-dynamics.com/'>Impulse Dynamics</a>, a medical device startup. Daily, I do computer programming, as well DevOps work in building software applications on a team with other engineers.
                    I actively plan on working more in the hardware side; my focus right now is in software.
                </p>
                    
                <p>
                    For software engineering, I have experience with tools/services such as
                    AWS, Docker, Node.js, React.js, Redux, Javascript and Typescript, Python, Java, C++, and HTML/CSS. I am open to continue learning more languages and tools. 
                </p>
                
                <p>
                    I programmed this website with React.js, and hosting it statically with GitHub pages (hence the slower loading time).
                </p>

                {/* <p>
                    In my free time, I like being outside, walking, exercising/going to the gym, biking, playing piano, and spending time with family and friends. I love to cook (feel free to check out the <a href='https://www.matthew-bisicchia.com/cooking'>Cooking</a> page of this site).
                    
                    And I have a love/hate (these days, mostly hate) relationship with yardwork/yard maintenance. 
                </p> */}

                <p>
                    I like to cook (check out the <a href='https://matthewbisicchia.github.io/site/#cooking'>Cooking</a> page of this site).
                </p>
                {/* <p>
                    I also enjoy DIY projects. In 2017, my grandfather and I installed hardwood floors in our house, and we also installed 
                    trim/millwork throughout. I am so grateful for everything he has taught me.
                </p> */}
                {/* <p>
                    I listen to pretty much all genres of music, and enjoy discovering new artists when I let Spotify just play randomly.
                </p> */}

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </React.Fragment>
    );
}

export default AboutPage;