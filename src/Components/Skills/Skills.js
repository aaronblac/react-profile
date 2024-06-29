import React from 'react';
import { skills} from '../../skillsData';
import styles from './Skills.module.scss';

const Skills = () => (
 <div className={styles.skillContainer}>
   <div className='d-flex align-items-center flex-column'>
      <h2 className='d-flex justify-content-center mb-3'>Skills</h2>
      <div className={styles.skillGroup}>
         <ul className='row text-center'>
            {skills.map((skill, index)=>(
               <li className='col-6 col-md-4 col-lg-3 col-xl-2 my-1' key={index}>{skill}</li>
            ))}
         </ul>
      </div>
   </div>
 </div>
);
export default Skills;
