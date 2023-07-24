import React from "react";

import "../styles/Home.css";




function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>  Anna Szumiec</h2>
                <div className="prompt">
                    <p> Designer & software developer with a passion for learning and creating.</p>
                </div>
            </div>

            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            HTML, CSS, SCSS, React Native, NPM,
                            BootStrap, MaterialUI, Git & Version Control, Testing and Web Hosting,
                        </span>
                    </li>
                    <li className="item">
                        <h2>Full-Stack</h2>
                        <span>
                            NodeJS, ExpressJS, Authentication & Authorization,
                            MySQL, MongoDB, AWS, ReactJS, Angular, Unit Testing, Integration Testing, User Acceptance & End to End Testing,
                        </span>
                    </li>
                    <li className="item">
                        <h2> Programming Languages</h2>
                        <span>JavaScript, TypeScript </span>
                    </li>
                    <li className="item">
                        <h2>Design</h2>
                        <span> UI, UX, Graphic & Media </span>
                    </li>
                    <li className="item">
                        <h2>  Languages</h2>
                        <span>English, German, Polish </span>
                    </li>

                </ol>
            </div>
        </div>
    );
}

export default Home;