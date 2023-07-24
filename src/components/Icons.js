
import ImgEmail from "../assets/email1.svg";
import ImgGithub from "../assets/github1.svg";
import { Link } from 'react-router-dom';
import "../styles/Icons.css";


import React from "react";

import "../styles/Home.css";


function Icons() {

    return (
        <div className="icons">
            <Link className="imggit" to="https://github.com/annaszumiec" target="_blank"> <img src={ImgGithub} alt="" /></Link>
            <Link className="imgemail" to="mailto:szumiecam@gmail.com" target="_blank"> <img src={ImgEmail} alt="" />
            </Link>
        </div>
    );
}

export default Icons;
