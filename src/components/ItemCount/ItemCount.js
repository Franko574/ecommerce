import './ItemCount.css';
import {useState} from 'react'; 
import {Link} from 'react-router-dom'

const ItemCount = ({stock,initial,onAdd})=> {
    const [quantity,setQuantity]= useState(initial)
    
    const increment= ()=> {
        if(quantity < stock){
            setQuantity (quantity + 1)
        }
    }

    const decrement= ()=> {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="button is-primary" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="button is-primary" onClick={increment}>+</button>
            </div>
            <div>
                <Link to='/cart' className='Cart'>
                    <button className="button is-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                        Agregar al carrito
                    </button>
                </Link>

            </div>

        </div>
    )
    
}

export default ItemCount 
