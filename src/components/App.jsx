import React from "react";
import Card from "./Card";
import Header from "./Header";
import contacts from "../contacts";

function App() {
  console.log(contacts);
  return (
    <div>
      <Header />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        L
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        L
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;