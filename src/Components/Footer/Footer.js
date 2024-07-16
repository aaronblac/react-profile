import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({slideIn}) => (
    <div className={styles.bottomContainer}>
      <a className={styles.footerLink} href="https://www.linkedin.com/in/aaron-black246"  target="_blank" rel="noreferrer">LinkedIn</a>
      <span className={styles.footerLink} onClick={slideIn} >Resumé</span>
      <p className={styles.copy}>© 2024 Aaron Black</p>
   </div>
);

export default Footer;
