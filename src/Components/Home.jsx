import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas }  from '../Pizzas.js'

export default function Home() {
    return (
        <>
            <Header />
            <div className='d-flex flex-wrap justify-content-center gap-2 mt-3'>
                {pizzas.map((pizza) => (
                    <div className="row mt-3" key={pizza.id}>
                        <CardPizza nombre={pizza.name} precio={pizza.price} ingredientes={pizza.ingredients} imagen={pizza.img} />
                    </div>
                ))}
            </div>
        </>
    )
}
