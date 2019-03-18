import React from 'react';
import './List.css';
import Card from './Card.js'

// thing = props.cards.map(card => {

//})

function List(props) {
  console.log(props);
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">{props.cards.map(card => {
       return <Card key={card.title} title={card.title} content={card.content} />
      })}</div>
    </section>
  );
}

export default List;