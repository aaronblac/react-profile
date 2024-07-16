import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone:'',
        email: '',
        message:'',
        url:''//for antispam
    })
    const [info, setInfo] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setInfo('Please fill out all required fields.');
            return;
          }
      
          const response = await fetch('mail.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
          });
      
          const result = await response.json();
          if (result.status === 'success') {
            setInfo('Email Sent!');
            setFormData({
                name: '',
                phone:'',
                email: '',
                message:'',
                url:''
            })
          } else {
            setInfo('Email Failed, please try again later.');
          }
    }

    return(
        <div id='contact' className={`${styles.sect} ${styles.contactMe}`}>
            <h2 className='text-center mb-3'>Let's Work Together!</h2>
            <div className={styles.contactContainer}>
            <form id='form' name='contact-form' onSubmit={handleSubmit}>

                <div>
                    <input type='text' id='name' name='name' className={`form-control mt-2 ${styles.formControl}`} placeholder='Name'  value={formData.name} required onChange={handleChange}/>
                </div>
                <div>
                    <input type='tel' id='phone' name='phone' className={`form-control mt-2 ${styles.formControl}`} placeholder='Phone Number'  value={formData.phone} onChange={handleChange}/>
                </div>
                <div>
                    <input type='email' id='email' name='email' className={`form-control mt-2 ${styles.formControl}`} placeholder='Email'  value={formData.email} required onChange={handleChange}/>
                </div>
                <p className={styles.antispam}>Leave this empty: <input type='text' name='url'  value={formData.url} onChange={handleChange}/></p>
                <div>
                    <textarea cols='40' rows='3' id='message' name='message' className={`form-control mt-2 ${styles.formControl}`} placeholder='Message' value={formData.message} required onChange={handleChange}></textarea>
                </div>
                <div className={`mt-2 ${styles.button}`}>
                <button className={styles.btn} name='submit' id='submit'>Send</button>
                </div>
                <label id='info'>{info}</label>
            </form>
            </div>
        </div>
    )
};
export default Contact;
