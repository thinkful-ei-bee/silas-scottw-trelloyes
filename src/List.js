import React from 'react';
import './List.css';

function List(props) {
  return (
    <section class="List">
      <header class="List-header">
        <h2>{props.header}</h2>
      </header>
      <div class="List-cards">{props.cards}</div>
    </section>
  );
}

export default List;