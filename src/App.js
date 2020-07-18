import React, { useState } from "react";
import "./styles.css";
import api from "./apiData";
import ListItems from "./ListItems";
import CartBody from "./CartBody";
import NavBar from "./Navbar";
export function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(api);
  const [cartOpen, isCartOpen] = useState(false);

  const addToCart = i => {
    setItems(state =>
      state.map((item, p) => {
        if (i === p) {
          setCart([
            ...cart,
            {
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              category: item.category,
              stock: item.stock
            }
          ]);
          return { ...item, inCart: true };
        }
        return item;
      })
    );
  };

  const increaseQuantity = {
    inCart: i => {
      setCart(state =>
        state.map((item, o) => {
          if (i === o && item.stock > 0) {
            return {
              ...item,
              quantity: item.quantity + 1,
              stock: item.stock - 1
            };
          }
          return item;
        })
      );
    },
    inItems: i => {
      setItems(state =>
        state.map((item, o) => {
          if (o === i && item.stock > 0) {
            return {
              ...item,
              quantity: item.quantity + 1,
              stock: item.stock - 1
            };
          }
          return item;
        })
      );
    }
  };

  const decreaseQuantity = {
    inCart: i => {
      setCart(prevCart =>
        prevCart.map((item, o) => {
          if (i === o && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
              stock: item.stock + 1
            };
          }
          return item;
        })
      );
    },
    inItems: i => {
      setItems(state =>
        state.map((item, o) => {
          if (i === o && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
              stock: item.stock + 1
            };
          }
          return item;
        })
      );
    }
  };

  const removeFromCart = i => {
    let chosenItem;
    cart.forEach((element, n) => {
      if (i === n) {
        chosenItem = element.name;
      }
    });
    setCart(state => state.filter(item => chosenItem !== item.name));
    setItems(state =>
      state.map(item => {
        if (item.name === chosenItem) {
          return { ...item, inCart: false, quantity: 1 };
        }
        return item;
      })
    );
  };

  const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);
  // console.log(cartCountTotal);
  return (
    <div className="App">
      <CartBody
        open={cartOpen}
        onClose={() => isCartOpen(false)}
        cart={cart}
        increaseQ={increaseQuantity.inCart}
        decreaseQ={decreaseQuantity.inCart}
        cartCountTotal={cartCountTotal}
        removeFromCart={removeFromCart}
      />
      <NavBar
        onOpen={() => isCartOpen(true)}
        cartItems={cartCountTotal}
        open={cartOpen}
      />
      {/* <Overlay onClick={() => isCartOpen(false)} open={cartOpen} /> */}
      <h1 style={{ color: "blue", textAlign: "center" }}>
        <i>Online Shopping</i>
      </h1>
      <ListItems
        items={items}
        increaseCount={increaseQuantity.inItems}
        decreaseCount={decreaseQuantity.inItems}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
