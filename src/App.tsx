import  React, {useState} from 'react';
import shuffle from 'lodash/shuffle';
import logo from './logo.svg';
import ezuri from './ezuri.json'
import './App.css';

// TODO: add missing lands

const commander = ezuri.find(card => card.name === 'Ezuri, Claw of Progress')
const commanderDeck = ezuri.filter(card => card.name !== 'Ezuri, Claw of Progress')

function App() {
  const [deck, setDeck] = useState(shuffle(commanderDeck));
  const [handSize, setHandSize] = useState(7);
  
  const cards = []
  for (let i=0; i< handSize; i++) {
    cards.push(deck[i])
  }

  return (
    <div className="App">
      <header className="App-header">
        {commander && <div>
          <img src={commander.normal_image_uri} alt={commander.oracle_text} height="200" />
        </div>}
        <p>
          Let's play some magic
        </p>
        <div>
          {cards.map(card => <img key={card.name} src={card.normal_image_uri} alt={card.oracle_text} height="200" />
          )}
          
        </div>
      </header>
    </div>
  );
}

export default App;
