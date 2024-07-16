import React from "react";
import styles from "./HeaderNav.module.scss";

const HeaderNav = ({slideIn}) => {
    return(
        <div className='row gap-3'>
      {/* About Me  */}
        <div className={ `${styles.drop} ${styles.abt} col-2` }>
          <a href="#about">
            <img src="images/user1.png" className={ `${styles.abtImg}` } alt="About Me"/>
            <h6 className={`${styles.labels}`}>About Me</h6>
          </a>
        </div>
        {/* Projects   */}
        <div className={` ${styles.drop} ${styles.projct} col-2 `}>
          <a href="#projects">
            <img src="images/projects.png" alt="My Projects"/>
            <h6 className={`${styles.labels}`}>Projects</h6>
          </a>
        </div> 
        {/* Skills  */}
        <div className={` ${styles.drop} ${styles.sklz} col-2 `}>
          <a href="#skills">
            <img src="images/skills.png" alt="My Skills"/>
            <h6 className={`${styles.labels}`}>Skills</h6>
          </a>
        </div>
         {/* CV  */}
        <div className={` ${styles.drop} ${styles.cv} col-2`}>
          <span onClick={slideIn}>
            <img src="images/cv-nav-link.png" className="" alt="Resume/CV"/>
            <h6 className={`${styles.labels}`}>Resume/CV</h6>
          </span>
        </div>
        {/* Contact  */}
        <div className={` ${styles.drop} ${styles.ctc} col-2 `}>
          <a href="#contact">
            <img src="images/contact.png" alt="Contact Me"/>
            <h6 className={`${styles.labels}`}>Contact</h6>
          </a>
        </div>
      </div>
    )
}

export default HeaderNav;