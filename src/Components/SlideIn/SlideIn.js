import React, { useEffect, useState } from "react";
import styles from "./SlideIn.module.scss";

const SlideIn = ({ show, onClose, pdfLink }) =>{
    const [buttonText, setButtonText] = useState('Click To Download');
    const [buttonDisable, setButtonDisable] = useState(false);

    useEffect(() => {
        if(show){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [show]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfLink;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setButtonText('Downloaded');
        setButtonDisable(true);
    }

    return(
        <div className={`${styles.slideIn} ${show ? styles.show : ''}`}>
            <button className={styles.closeButton} onClick={onClose}>×</button>
            <h2>My Resume</h2>
            <object data={pdfLink} type="application/pdf" width="100%" height="80%">
                <p>Your browser does not support PDFs. <a href={pdfLink}>Download the PDF</a>.</p>
            </object>
            <div className={styles.downloadContainer}>
                <button className={styles.btn} onClick={handleDownload} disable={buttonDisable}>{buttonText}</button>
            </div>
        </div>
    );
}

export default SlideIn;