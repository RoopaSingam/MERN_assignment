import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Cart from "./Cart";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 10
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const NavBar = ({ onOpen, cartItems }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Button color="inherit">Fruits</Button>
          </Typography>
          <Typography variant="h6">
            <Button color="inherit">Beverages</Button>
          </Typography>
          <Cart onOpen={onOpen} cartItems={cartItems} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
