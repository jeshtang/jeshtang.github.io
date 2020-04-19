import React from "react";
import navStyles from "./nav.module.css";
import {Link} from "gatsby";

const Nav = () => {
    return (
        <nav className={navStyles.navbar}>
            <div className={navStyles.logo}>
                <h1>JT</h1>
            </div>

            <div className={navStyles.spacer} />

            <ul className={navStyles.navList}>
                <li className={navStyles.navListItem}>
                    <Link className={navStyles.navListLink} activeClassName={navStyles.active} to="/">Home</Link>
                </li>
                <li className={navStyles.navListItem}>
                    <Link className={navStyles.navListLink} activeClassName={navStyles.active} to="/about">About</Link>
                </li>
                <li className={navStyles.navListItem}>
                    <Link className={navStyles.navListLink} activeClassName={navStyles.active} to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav