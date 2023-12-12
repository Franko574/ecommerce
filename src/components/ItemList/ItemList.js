import './ItemList.css'
import item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className='ListGroup'>
            {products.map(prod=><Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList