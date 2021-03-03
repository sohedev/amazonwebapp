import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useHistory } from "react-router-dom";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  return (
    <div className="chechout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OOC_AMAZON1._CB423492668_.jpg"
          alt=""
        />
        {basket.length === 0 ? (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2>Your Basket Is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add To Basket" next to the item
            </p>
            <button className="checkout__button" onClick={() => history.push("/")}>Back To Home</button>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
