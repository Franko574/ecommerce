import './Cartwidget.css'
import cart from './Assets/Carto.svg';
import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import {Link} from 'react-router-dom'

const CartWidget = ()=> {
    const {totalQuantity}= useContext (CartContext)

    return (
      <Link to = '/cart' className='CartWidget' style = {{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className='CartImg' src = {cart} alt='cart-widget'/>
        {totalQuantity}
      </Link>
    )
}

export default CartWidget;