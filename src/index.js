import React from "react";

import ReactDom from "react-dom/client";

import("./index.css");
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizzas = pizzas.length > 0;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p> We are still working on the menu. Please try later</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  const { name, photoName, price, ingredients, soldOut } = pizzaObject;
  if (soldOut) return null;
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(hour);
  const message = isOpen ? "we are currently open" : "we are currently closed";
  //   alert(message);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are currently open till {closeHour}:00. Come visit us or Order
            online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>
            {" "}
            We are happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        </div>
      )}
      {/* {new Date().toLocaleTimeString()}: {message} */}
    </footer>
  );
}

// React 18
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
