/** @format */

import React, { Component } from 'react';
import Pokedex from './Pokedex';

import './App.css';

function App() {
	return (
		<div className="App">
			<Pokedex />
			{/* <Pokecard id={4} name="Charmander" type="fire" base_experience={62} /> */}
		</div>
	);
}

export default App;
