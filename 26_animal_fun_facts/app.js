import { animals } from './animals';
import React from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');

const root = createRoot(container);

const title = "";
const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>;

let images = [];
for (const animal in animals) {
  images.push(<img key={animal} className="animal" alt={animal} src={animals[animal].image} aria-label={animal} role='button' onClick={displayFact}/>);
}

function displayFact(e) {
  const animalName = e.target.alt;
  const animalFacts = animals[animalName].facts;
  const randomIndex = Math.floor(Math.random() * animalFacts.length);
  const animalFact = animalFacts[randomIndex];
  const factElement = document.getElementById('fact');
    factElement.textContent = animalFact;
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>
      {!title? 'Click an animal for a fun fact' : title}
    </h1>
      {!animalFacts && background}
      <div className="animals">
      {images}
      </div>
      <p id="fact">{displayFact}</p>
  </div>
);

root.render(animalFacts);
