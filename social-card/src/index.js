import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SocialCard from './SocialCard';
import * as serviceWorker from './serviceWorker';
const cards = document.querySelectorAll("[data-card='social-card']");

for(let i = 0; i < cards.length; i++) {
  ReactDOM.render(
    <SocialCard
      imagePath={cards[i].getAttribute('data-image')}
      title={cards[i].getAttribute('data-title')}
    />,
    cards[i]);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
