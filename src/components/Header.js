
import {Link} from 'react-router-dom';
function Header  ()  {
    return (
        <header>
        <h1>
            <Link to="/">
            {/* <img src={logo} alt="logo" /> */}
            <h3>logo</h3>
            </Link>
        </h1>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    }

export default Header