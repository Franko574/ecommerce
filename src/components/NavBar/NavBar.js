import '../NavBar/NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import {NavLink , Link} from 'react-router-dom'

const NavBar = () => {
    return  (
        
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://ams3.digitaloceanspaces.com/graffica/2022/12/unnamed-512x375.png" width="60" height="60"></img>
                </a>

                    <div class="Categories navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary" href='/category/Hamburguesa'>
                                     <strong>Hamburguesa</strong>
                                </a>
                                <a class="button is-primary" href='/category/Helados'>
                                    <strong>Helados</strong>
                                </a>
                                <a class="button is-primary" href='/category/Ensaladas'>
                                <strong>Ensaladas</strong> 
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </nav>
        
    /*    <nav className='Navbar'>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={"/category/Hamburguesa"} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Hamburguesa</NavLink>
                <NavLink to={`/category/Helados`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Helados</NavLink>
                <NavLink to={`/category/Ensaladas`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Ensaladas</NavLink>
            </div>
            <CartWidget />
        </nav> 
         */
    )
}

export default NavBar
