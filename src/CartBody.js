import React from "react";
import styled from "styled-components";
import "./styles.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const CartBody = ({
  cart,
  increaseQ,
  decreaseQ,
  cartCountTotal,
  removeFromCart,
  open,
  onClose
}) => {
  const cartPriceTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      {
        token,
        cart
      }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return (
    <div>
      {open ? (
        <div className="cartbody">
          <Btn onClick={onClose}>
            <b>X</b>
          </Btn>
          <div className="wrapper">
            {!cart.length && <p>Cart is empty</p>}
            {!!cart.length && (
              <div>
                <H2>
                  Items: {cartCountTotal} <hr /> Total Price: Rs
                  {cartPriceTotal}
                </H2>
                {cart.map((item, i) => (
                  <DetailColumn key={item.name}>
                    <p>
                      {item.name} {item.quantity} x Rs{item.price} ===> total :{" "}
                      {item.price * item.quantity}
                    </p>
                    <span>
                      {" "}
                      <BTN onClick={() => increaseQ(i)}>+ </BTN>
                      <BTN onClick={() => decreaseQ(i)}>-</BTN>
                      <BTN onClick={() => removeFromCart(i)}>Remove </BTN>
                    </span>
                  </DetailColumn>
                ))}
                {/* <BTN>Checkout</BTN> */}
                <StripeCheckout
                  stripeKey="pk_test_51H6HlPCq6jkIU0R3ulEyfUueweYkmcfowS65lO7ivEBHC6KXlNqE599qfVA6CBr0JofMF1Sk942SecL8HegBzcT300wfoPbQkZ"
                  token={handleToken}
                  amount={cartPriceTotal}
                  name="Tesla Roadster"
                  billingAddress
                  shippingAddress
                />
                <div>.</div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
const Btn = styled.button`
  margin: 10px;
  font-weight: 900;
  font-size: 20px;
  padding: 2px 8px;
  border-radius: 10px;
  border: none;
  font-size: 25px;
  box-shadow: 0px 2px 1px -1px;
  padding: 5px 15px;
  color: red;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  transition: opacity 0.3s;
`;

const DetailColumn = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 5px 5px;
  border-radius: 20px;
  background-color: lightcyan;
  margin: 8px;
`;

const BTN = styled.button`
  margin: 15px;
  font-weight: 900;
  font-size: 18px;
  padding: 2px 8px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  box-shadow: 0px 2px 1px -1px;
  padding: 5px 15px;
  color: green;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  transition: opacity 0.3s;
`;

const H2 = styled.h2`
  padding: 4px 0;
  font-size: 18px;
  border-bottom: 1px dashed black;
`;

export default CartBody;
