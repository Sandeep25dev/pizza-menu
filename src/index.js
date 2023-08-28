import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  // FOR REFERENCE

  // const style = { color: "red", fontSize: "38px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>DeliTrea Pizzeria</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Conditional rendering to check where are there any pizza data available
      or not in order to render them on the UI */}

      {numPizzas > 0 && (
        // React.Fragment is used to create multiple JSX root elements wrapped under a React Fragment,  we can also declare a react fragment by using only <> to open and </> to close

        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from stone oven, all organic, all DELICIOUS.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      /> */}
    </main>
  );
}

//  Destructuring the Props👇🏻
function Pizza({ pizzaObj }) {
  // console.log(props);

  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `${pizzaObj.price}$`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = String(new Date().getHours());
  const minutes = String(new Date().getMinutes()).padStart(2, 0);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently OPEN!");
  // else alert("Sorry we're currently CLOSED!");

  // My Own Made Funtionalities
  // const amPm = `${hour < 12 ? "AM" : "PM"}`;
  // console.log(hour);
  // const time = `${hour}:${minutes} ${amPm}`;
  // console.log(time);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          Sorry we're closed! We're happy to welcome you between 12:00 PM to
          22:00 PM
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

// Extracted the part of JSX 👇🏻

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open from {props.openHours}:00 PM to {props.closeHours}:00 PM.
        Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
// React v-18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
