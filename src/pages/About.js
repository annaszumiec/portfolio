import React from 'react';
import img from '../assets/anna.png';
import img2 from '../assets/anna2.svg';
import "../styles/About.css";



function About() {
    return (


        <div className='aboutMe'>
            <picture>
                <source media='(max-width: 768px)' srcSet={img2} />
                <source media='(min-width: 768px)' srcSet={img} />
                <img id='profilepic' src={img} alt='' />
            </picture>


            <h1 > Cześć, Hello, Hallöchen!   </h1>
            <br />
            <p>I am <span className='annaS'>Anna Szumiec,</span></p>
            <p>a junior full stack developer and designer with a passion for creating innovative and user-centric digital experiences. With a background in design and a growing expertise in development, I bring a unique blend of creativity and technical skills to every project I undertake. As a junior full stack developer, I am enthusiastic about exploring and learning various technologies across the development stack. I have a solid foundation in front-end development, including HTML, CSS, and JavaScript, which allows me to design and implement captivating user interfaces that seamlessly integrate form and function. I'm committed to writing clean and efficient code, embracing best practices and industry standards to deliver high-quality solutions. Drawing from my design background, I have a keen eye for aesthetics and user experience. I believe that good design goes beyond visual appeal and focuses on creating intuitive and delightful interactions. By blending my design sensibilities with my technical expertise, I strive to create seamless and immersive experiences that leave a lasting impression on users. As a junior professional developer, I am continuously seeking opportunities to learn and grow. In addition to my professional side , I enjoy sport, arts, cooking and discovering new places . Squash , swimming and jogging are just examples of activities that i practice regularly. I lived in three countries what gave me the opportunity to learn new languages getting to know amazing people and their culture. With every language I acquired, I gained a new lens through which to understand and connect with the world. I embrace challenges and value collaboration. I believe in the power of continuous learning and actively seek out new resources to expand my knowledge and keep pace with the rapidly evolving field of technology. I am excited to embark on this journey as a junior full stack developer and designer, and I look forward to contributing my skills and creativity to projects that make a meaningful impact. Let's collaborate and create something remarkable together!</p>

        </div>
    )
}


export default About;