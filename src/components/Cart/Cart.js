import './Cart.css'
import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import CartItem from '../Item/Item'
import {Link} from 'react-router-dom'

const Cart = () => { 
    const {cart, clearCart , totalQuantity , total } = useContext (CartContext)

    if ( totalQuantity === 0) { 
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to= '/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='Ca'>
            <div className='C1'>
                {cart.map (p=> <CartItem key={p.id} {...p}/>)}
            </div>
            <div className='C2'>
                <h3>Total:$ {total} </h3>
                <button className="button is-primary" onClick={() =>clearCart()} >Limpiar carrito</button>
                <div>
                    <Link to='/checkout'>
                            <button className="button is-primary"> 
                                Finalizar Compra
                            </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;