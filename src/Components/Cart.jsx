import React from "react";

const Cart = ({ pizzasInCart }) => {
  return (
    <div className="cart-container"> 
      <h2>Carrito de Compras</h2>
      <ul className="cart-list"> 
        {pizzasInCart.map((pizza) => (
          <li key={pizza.id} className="cart-item"> 
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={pizza.img} 
                    className="img-fluid rounded-start"
                    alt={pizza.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">{pizza.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

