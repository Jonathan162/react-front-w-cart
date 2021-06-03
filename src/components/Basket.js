
import React from "react";


export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const bookingFee = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + bookingFee;
  return (
    <aside className="block-basket col-1">
      <h2 className="cart-title">Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
             <button onClick={() => onAdd(item)} className="add">
                +
              </button>{' '}
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x €{item.price.toFixed(2)}
            </div>
          </div>
        ))}
        </div>
        {cartItems.length !== 0 && (
            <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">€{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">€{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Booking Fee</div>
              <div className="col-1 text-right">
                €{bookingFee.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>€{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
                <button className="checkout" onClick={() => alert("Thanks for buying!")}>Checkout</button>
            </div>
            </>
        )}
        </aside>
    )
};
