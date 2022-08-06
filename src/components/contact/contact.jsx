import './contact.css';
import {AiOutlineYoutbue} from 'react-icons-ai';
import {AiOutlineInstagram} from 'react-icons-ai';
import {AiOutlineLinkedin} from 'react-icons-ai';
import {AiOutlineGithub} from 'react-icons-ai';

function Contact(){
    return (
        <div id='contact' className="container contact-container">
            <h1 className='contact-txt'>Contact Me</h1>
            <div className="contact-links">


                <a href=" " className='contact youtube'> 
                
                <AiOutlineGithub className='icon'/>
                <h2>youtube <span> proximamente</span></h2>
                </a>

                <a href=" " className='contact instagram'> 
                
                <AiOutlineGithub className='icon'/>
                <h2>youtube <span> proximamente</span></h2>
                </a>

                <a href=" " className='contact Linkedin'> 
                
                <AiOutlineLinkedin className='icon'/>
                <h2>youtube <span> proximamente</span></h2>
                </a>

                <a href=" " className='contact github'> 
                
                <AiOutlineGithub className='icon'/>
                <h2>youtube <span> proximamente</span></h2>
                </a>
            </div>
        </div>
    )
}
export default Contact;