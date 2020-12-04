import React, { useState } from "react";
import Data from "./menuData.json";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions";
import "./Menu.css";

function Menu() {
  const dispatch = useDispatch();
  const MenuData = Data[0].menu;
  const cartLists = useSelector((state) => state);

  const addItemHandler = (itemName, itemPrice) => {
    dispatch(
      addItem({
        itemName: itemName,
        price: itemPrice,
        itemCount: 1,
      })
    );
  };

  return (
    <div className="menu">
      <h1 className="menu__heading">Hotel Menu</h1>
      {MenuData.map((category) => (
        <div className="menu__category" key={category.id}>
          <h1>{category.name}</h1>
          {category.items.map((item) => (
            <li className="menu__items" key={Math.random()}>
              <span className="menu__items__left">
                {item.name}
                <p className="menu__items__left__description">
                  {item.description}
                </p>
              </span>
              <span className="menu__items__right">
                {item.likes}
                <FavoriteBorderOutlinedIcon style={{ fill: "#A9A9A9" }} />
                <Button
                  style={{ backgroundColor: "rgb(228 78 4)", color: "white" }}
                  onClick={() => addItemHandler(item.name, item.price)}
                >
                  {item.price} Zl
                  <AddCircleOutlineIcon
                    style={{ fill: "#ffffff", marginLeft: "4px" }}
                  />
                </Button>
              </span>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
