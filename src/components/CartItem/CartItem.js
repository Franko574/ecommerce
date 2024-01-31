import { CartContext } from "../Context/CartContext"
import React from "react"
import { useContext } from "react"
import "./CardItem.css"

const CartItem = ( {product} ) => {
    
    const { removeItem } = useContext(CartContext)
    
  
    return (
        <div>
            <picture>
                <img src={product.img} alt={product.name} className="card-image" />
            </picture>
            <div className="productsCategorie">
                <h2>
                    {product.name}
                </h2>

                <p>
                    Cantidad: {product.quantity}
                </p>
                <p>
                    Subtotal: {product.quantity * product.price}
                </p>
                <button className="button is-small" onClick={()=> removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem