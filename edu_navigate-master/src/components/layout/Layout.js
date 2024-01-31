import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.svg'
import signup from './signup.svg'
import './Layout.css';

const Layout = () => {
    return(
        <>        
            <header className='layout-header'>
                <div className='logo-container'>
                    <img src={logo} className='logo-img'/>
                    <p className='website-title'>EduNavigate</p>
                </div>
                <div className='menu-bar'>
                    <Link>tools</Link>
                    <Link>materails</Link>
                    <Link>FAQ</Link>
                    <Link>contacts</Link>
                </div>
                <div className='log-buttons'>
                    <button className='login-button'>Log in</button>
                    <img src={signup} className='signup-img'/>
                </div>
            </header>
            <Outlet></Outlet>
            <footer>
                <div className='footer-part'>
                    <img></img>
                </div>
                <div className='footer-part'>
                    <p className='footer-title'>Pages</p>
                    <Link className='footer-link'>Tools</Link>
                    <Link className='footer-link'>Materails</Link>
                    <Link className='footer-link'>FAQ</Link>
                    <Link className='footer-link'>Profile</Link>
                </div>
                <div className='footer-part'>

                </div>
            </footer>
        </>
    )
}

export default Layout;