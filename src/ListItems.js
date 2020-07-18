import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import "./styles.css";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",

    "& > *": {
      // padding:theme.spacing(10),
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(50)
    }
  }
}));

const ListItems = ({ items, increaseCount, decreaseCount, addToCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ textAlign: "center" }}>
      {items.map((item, i) => (
        <div key={item.id} style={{ backgroundColor: " #3e8e41" }}>
          <Paper elevation={6}>
            <H>{item.name}</H>
            <span>Category : {item.category}</span>
            <p>
              <b>Rs {item.price}</b>
              <span> stock : {item.stock}</span>
            </p>
            <div>
              <BTN onClick={() => increaseCount(i)}>+</BTN>
              <span style={{ padding: "5px" }}>
                <b>{item.quantity}</b>
              </span>
              <BTN onClick={() => decreaseCount(i)}>-</BTN>
            </div>
            <IMG src={item.src} alt={item.name} />
            <button onClick={() => addToCart(i)} className="button">
              Add to Cart
            </button>
            <div>.</div>
          </Paper>
        </div>
      ))}
    </div>
  );
};

const IMG = styled.img`
  padding: 10px;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const H = styled.h3`
  padding: 10px 0px 0px 0px;
`;

const BTN = styled.button`
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

export default ListItems;
