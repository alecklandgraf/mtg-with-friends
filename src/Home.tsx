import React, { useState } from "react";
import debounce from "lodash/debounce";
import Card, { card } from "./Card";
import allCards from "./cardsMap.json";
import "./App.css";
import "./Home.css";

/**

  Deck lists looks like this:

  1 Hinterland Harbor
  1 Invisible Stalker
  12 Island
  1 Jhessian Infiltrator
  1 Kaseto, Orochi Archmage
  1 Kodama's Reach

 */
const reDeckList = /\d+\s+(.+)/;

function Home() {
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [cards, setCards] = useState<card[]>([]);

  function process(value: string) {
    const temp = value
      .split("\n")
      .map(v => v.trim())
      .filter(Boolean);
    // @ts-ignore
    setCards(
      temp
        .map(line => {
          const match = line.match(reDeckList);
          if (match && match[1]) {
            // @ts-ignore
            return allCards[match[1].toLowerCase()];
          }

          return false;
        })
        .filter(Boolean)
    );
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(event.target.value);
    debounce(process, 250)(event.target.value);
  }

  return (
    <div className="App">
      <div>Paste in your deck list</div>
      <div>
        <textarea
          rows={20}
          value={textareaValue}
          onChange={handleChange}
          style={{ minWidth: 200 }}
        />
      </div>
      <div className="deck">
        {cards.map(card => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
