import React from "react";
import Nav from "../nav/nav";
import layoutStyles from "./layout.module.css";

const Layout = ({ children }) => {
    return (
        <main className={layoutStyles.outerWrapper}>
            <Nav />
            { children }
        </main>
    )
}

export default Layout