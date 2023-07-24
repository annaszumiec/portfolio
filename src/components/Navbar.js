import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import Icons from "../components/Icons"


function Navbar() {
    const [expendNavbar, setExpendbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpendbar(false)
    },
        [location]);

    return (
        <div className='navbar' id={expendNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => { setExpendbar((prev) => !prev) }}>
                    <ReorderIcon

                    ></ReorderIcon>
                </button>
            </div>

            <div className='links'>

                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About me</Link>
                <Link to="/experience">Experience</Link>
                <Icons />

            </div>


        </div>
    )
};



export default Navbar

