import './Item.css'

const Item = ({id,name,img,price,stock}) => {
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 clasName='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                   Precio: $ {price}
                </p>
                <p className='Info'>
                   Stock disponible: $ {stock}
                </p>
            </section>
            <footer class='ItemFooter'>
               <Link to= {`/item/${id}`} className='option'>ver detalle</Link>
            </footer>
        </article>
    )

}

export default Item 