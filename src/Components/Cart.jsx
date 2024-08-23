import { useState } from 'react'
import { pizzas } from '../Pizzas'
import CardPizza from './CardPizza'

const Cart = () => {

    const [cart, setCart] = useState([])

    const addToCart = (pizza) => {
        console.log(pizza)
    }

    return (
        <>
            <div className='d-flex flex-wrap justify-content-center gap-2 mt-3'>
                {pizzas.map((pizza) => (
                    <div className="row mt-3" key={pizza.id}>
                        <CardPizza nombre={pizza.name} precio={pizza.price} ingredientes={pizza.ingredients} imagen={pizza.img} />
                    </div>
                ))}
            </div>

            <h1 className='text-light'>Elementos del Carrito </h1>
            
        </>
    )
}

export default Cart

