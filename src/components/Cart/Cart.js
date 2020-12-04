import React from "react";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cartLists = useSelector((state) => state);

  return (
    <div className="cart">
      <div className="cart__header">YOUR ORDER</div>
      <div className="cart__body">
        {cartLists.items.map((item) => {
          return (
            <li key={Math.random()}>
              <AddBoxOutlinedIcon />
              {item.itemCount} <IndeterminateCheckBoxIcon />
              {item.itemName}
            </li>
          );
        })}
      </div>
      <div className="cart__footer">Total : {cartLists.totalAmount} Zl</div>
    </div>
  );
};

export default Cart;
