import './home.css';
// import img from './props/img2.jpg';
import {BsMouse} from 'react-icons/bs'

function Home (){
    return (
        <div id='home' className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span><div className="circle"></div></span>
                    <span><div className="circle"></div></span>
                    <span><div className="circle"></div></span>
                    <span><div className="circle"></div></span>
                    <span><div className="circle"></div></span>
                    <span><div className="circle"></div></span>
                    <span><div className="circle"></div></span>
                    <span><div className="circle"></div></span>
                </div>
                    <img src='{img}' alt='...'/>
                </div>
                <a href='#footer' className="scroll-down">
                    <hr/>
                    <h5>scroll down</h5>
                    <BsMouse className="scroll"/>
                    <hr/>
                </a>
                <h2> <span>About Me </span> <br/>
                <p>
                    I am a Front-End Web Developer with a passion for creating beautiful and functional websites. I like to create websites that are user friendly and easy to use. I have a strong background in HTML, CSS, JavaScript, and React. I am also familiar with the following technologies: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti repellat officia architecto dicta, eum voluptates voluptatibus, fuga iusto autem consectetur temporibus neque repellendus recusandae voluptatem aliquam, esse nostrum sint.
                </p>
                </h2>
        
        </div>
    )
}


// const toggle = document.querySelector('.main-img');
// toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active');
// });

export default Home;