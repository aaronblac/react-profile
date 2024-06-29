import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    return(
        <div id='contact' className={`${styles.sect} ${styles.contactMe}`}>
            <h2 className='text-center mb-3'>Let's Work Together!</h2>
            <div className={styles.container}>
            <form id='form' name='contact-form' method='POST' action='mail.php'>

                <div><input type='text' id='name' name='name' className={`form-control mt-2 ${styles.formControl}`} placeholder='Name' /></div>

                <div><input type='tel' id='phone' name='phone' className={`form-control mt-2 ${styles.formControl}`} placeholder='Phone Number' /></div>

                <div><input type='email' id='email' name='email' className={`form-control mt-2 ${styles.formControl}`} placeholder='Email' /></div>

                <p className={`${styles.antispam}`}>Leave this empty: <input type='text' name='url' /></p>
                <div><textarea cols='40' rows='3' id='message' name='message' className={`form-control mt-2 ${styles.formControl}`} placeholder='Message'></textarea></div>
                <div className={`mt-2 ${styles.button}`}>
                <button className={`${styles.btn}`} name='submit' id='submit'>Send</button>
                </div>
                <label id='info'></label>
            </form>
            </div>
        </div>
    )
};
export default Contact;
