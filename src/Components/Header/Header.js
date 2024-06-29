import React from "react";
import styles from "./Header.module.scss"
import HeaderNav from "../Header-Nav/HeaderNav"

const Header = () => {
    return(
        <div className={`${styles.headerContainer}`}>
            <div className={ `${styles.header}` }>
                <div>
                    <h1>AARON BLACK</h1>
                    <h3>Software Developer</h3>
                </div>
                <HeaderNav></HeaderNav>
            </div>
        </div>
    )
}

export default Header;