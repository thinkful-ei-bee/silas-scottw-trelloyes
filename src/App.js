import React from 'react';
import './App.css';
import List from './List.js';

 // {store: store}
function App(props) {
  console.log(props.store.allCards);
  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">{props.store.lists.map(list => {
      return <List key={list.id} header={list.header} cards={list.cardIds.map(id => props.store.allCards[id])} />
    })}</div>
    </main>
  );
}

export default App;