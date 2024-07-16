import React from "react";
import styles from "./Header.module.scss"
import HeaderNav from "../Header-Nav/HeaderNav"

const Header = ({slideIn}) => {
    return(
        <div className={`${styles.headerContainer}`}>
            <div className={ `${styles.header}` }>
                <div className={styles.headerTitle}>
                    <h1>AARON BLACK</h1>
                    <h3>Software Developer</h3>
                </div>
                <HeaderNav slideIn={slideIn}></HeaderNav>
            </div>
        </div>
    )
}

export default Header;