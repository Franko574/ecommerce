import '../NavBar/NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import {NavLink , Link} from 'react-router-dom'

const NavBar = () => {
    return  (
       /*  <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                            <a class="navbar-item">
                                Home
                            </a>
                            <a class="navbar-item">
                                Documentation
                            </a>
                    </div>
                </div> 
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                     <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </nav>
        */
       <nav className='Navbar'>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/celular`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Tablet</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Notebooks</NavLink>
            </div>
            <CartWidget />
        </nav> 
        
    )
}

export default NavBar
