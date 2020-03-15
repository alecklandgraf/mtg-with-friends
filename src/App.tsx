import React, { useState } from "react";
import shuffle from "lodash/shuffle";
import Card, { CardBack } from "./Card";
import ezuri from "./ezuri.json";
import "./App.css";

// TODO: add missing lands

const commander = ezuri.find(card => card.name === "Ezuri, Claw of Progress");
const commanderDeck = ezuri.filter(
  card => card.name !== "Ezuri, Claw of Progress"
);

function App() {
  const [deck, setDeck] = useState(shuffle(commanderDeck));
  const [handSize, setHandSize] = useState(7);

  const cards = [];
  for (let i = 0; i < handSize; i++) {
    cards.push(deck[i]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Command">
        {commander && (
            <Card card={commander} />
        )}
        </div>
        <div className="Library">
          <div>
            <CardBack />
          </div>
        </div>
        <div className="Hand">
          {cards.map(card => (
            <Card key={card.name} card={card} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
