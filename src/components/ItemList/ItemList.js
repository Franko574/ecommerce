import './ItemList.css'
/* import Item from '../Item/Item' */ 
import { getFirestore, collection , getDocs } from 'firebase/firestore'
import { useEffect , useState} from 'react';
import {Link} from "react-router-dom"

const Productos = () => {
    const [productos , setProductos] = useState([]);
    
    useEffect (()=> {
        const db = getFirestore();
        const itemsCollection = collection (db,"productos");
        getDocs(itemsCollection).then(snapshot=> {
            setProductos(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})));
        });
    }, []);
    
    return (
        <div clasName="container">
            <div clasName="row">
                {productos.map(prod=> (
                    <div key={prod.id} className='col'>
                        <div className='card'>
                            <Link to= {"/producto/" + prod.id}><img src={prod.imagen} className='card-img' alt={prod.titulo} /></Link>
                            <div className='card-body'>
                                <p className='card-text'>{prod.titulo}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )

}

export default Productos;


/* const ItemList = ({products}) => {
    return (
        <div className='ListGroup'>
            {products.map(prod=><Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList */