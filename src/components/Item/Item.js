import "./Item.css";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const Producto = () => {
  const [producto, setProducto] = useState({});
  const {id}= useParams();

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, "productos",id);
    getDoc(product).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({id:snapshot.id, ...snapshot.data()});
      }
    });
  });
 

  return (
    <div clasName="Container">
      <div className="row">
        <div>
          <img src={producto.imagen} alt={producto.titulo} />
        </div>
        <div>
          <h1>{producto.titulo}</h1>
          <h5>{producto.calorias}</h5>
          <p>{producto.descripcion}</p>
          <p><b>{producto.precio}</b></p>
        </div>

      </div>
      
    </div>
  )
};

/* const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 clasName="ItemHeader">{producto.titulo}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: $ {price}</p>
        <p className="Info">Stock disponible: $ {stock}</p>
      </section>
      <footer class="ItemFooter">
        <Link to={`/item/${id}`} className="option">
          ver detalle
        </Link>
      </footer>
    </article>
  );
}; */

export default Producto;