import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const Cart = ({ cartItems, onOpen }) => {
  const classes = useStyles();

  return (
    <FixedDiv onClick={onOpen}>
      <CartBox>
        <div className={classes.root}>
          <Badge color="secondary" badgeContent={`${cartItems}`}>
            <ShoppingCartIcon style={{ fontSize: 40, color: "blue" }} />
          </Badge>
        </div>
      </CartBox>
    </FixedDiv>
  );
};
const FixedDiv = styled.div`
  cursor: pointer;
  position: fixed;
  text-align: center;
  z-index: 25;
  top: 4;
  right: 0;
  background-color: yellow;
  border-radius: 20px;
`;

const CartBox = styled.div`
  position: relative;
`;

export default Cart;
