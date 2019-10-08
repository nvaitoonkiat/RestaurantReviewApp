import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <img
        src="https://i.ibb.co/DCKKtRg/logo-transparent.png"
        alt="logo"
        className="logo"
      />
      <a className="menu-item" href="/Trending/">
        Trending
        <br />
      </a>

      <a className="menu-item" href="/burgers">
        Our Picks
        <br />
      </a>

      <a className="menu-item" href="/pizzas">
        Vegetarian
        <br />
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
        <br />
      </a>
    </Menu>
  );
};
