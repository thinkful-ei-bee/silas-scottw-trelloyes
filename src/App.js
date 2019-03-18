import React from 'react';
import store from './store.js'
import './App.css';

function App(store) {
  return (
    <main class="App">
    <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">{store.lists}</div>
    </main>
  );
}

export default App;