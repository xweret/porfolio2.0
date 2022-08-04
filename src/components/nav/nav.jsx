import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBriefcase} from 'react-icons/bs';
import {BiMessageRoundedDots} from 'react-icons/bi';
import {BsArrowDownCircle} from 'react-icons/bs';

function Navbar(){

    return(
        <div className="navigation">
            <a href='#home' >
                <AiOutlineHome className="icon active-nav"/>
            </a>
            <a href='#about' >
                <AiOutlineUser className="icon"/>
            </a>
            <a href='#projects' >
                <BsBriefcase className="icon"/>
            </a>
            <a href='#contact' >
                <BiMessageRoundedDots className="icon"/>
            </a>
            <a href='#footer' >
                <BsArrowDownCircle className="icon"/>
            </a>
        </div>
    )

}

let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach(icon => {
    icon.addEventListener('click', () => {
        changeActive();
        icon.classList.add('active-nav');
    });
});

function changeActive(){
    Icons.forEach(icon => {
        icon.classList.remove('active-nav');
    });
}

export default Navbar;