import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

export default function Home() {
    return (
        <>
            <>
                <Header />
                <div className='d-flex p-3 m-3'>
                    <CardPizza
                        nombre="Napolitana"
                        precio={5950}
                        ingredientes={["mozzarella", "tomate", "jamón", "orégano"]}
                        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"/>

                    <CardPizza
                        nombre="Española"
                        precio={6950}
                        ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
                    />
                    <CardPizza
                        nombre="Pepperoni"
                        precio={6950}
                        ingredientes={["mozzarella", "pepperoni", "orégano"]}
                        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
                    />
                </div>
            </>
        </>
    )
}
