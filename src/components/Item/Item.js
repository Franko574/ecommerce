import "./Item.css";
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {

    return (
        <article>
            {/* Imagen grande */}
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                      <img src={img} alt={name} className="ItemImg" />
                    </figure>
                </div>

              {/* Imagen Chica */}
              <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://ams3.digitaloceanspaces.com/graffica/2022/12/unnamed-512x375.png" className="ItemImg" />
                      </figure>
                    </div>
                    
                    {/* Titulos */}
                    <div class="media-content">
                      <h2 className="ItemHeader">
                        {name}
                      </h2>
                    </div>
                  </div>
                  
                {/* Contenido Imagen */}
                <div class="content">
                  <section>
                      <p className="Info">
                          Precio: $ {price}
                      </p>
                      <p className="Info">
                          Stock disponible: {stock}
                      </p>
                  </section>
                  <footer className="ItemFooter card-footer">
                      <Link to={`/item/${id}`} className='Cart'>
                        <button className="button is-primary">Ver detalles</button>
                      </Link>
                  </footer>
                </div>
              </div>
            </div>

        </article>
    )
}

export default Item


            {/* Card Vieja */}
/*             <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture className="card-image">
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <div className="CardItem">
                <section>
                    <p className="Info">
                        Precio: $ {price}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter card-footer">
                    <Link to={`/item/${id}`} className="button is-small detalle">Ver detalles</Link>
                </footer>
            </div> */