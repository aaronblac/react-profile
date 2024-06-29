import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
    <div className={styles.bottomContainer}>
      <a className={styles.footerLink} href="https://www.linkedin.com/in/aaron-black246"  target="_blank" rel="noreferrer">LinkedIn</a>
      <a className={styles.footerLink} href="resume.html" target="_blank">Resumé</a>
      <p className={styles.copy}>© 2024 Aaron Black</p>
   </div>
);

export default Footer;
