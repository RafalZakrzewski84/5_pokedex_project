/** @format */

/** @format */

import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
	console.log(props);
	return (
		<div
			className={`Pokedex ${props.isWinner ? 'Pokedex-win' : 'Pokedex-loose'}`}>
			<h1>Pokedex!</h1>
			<h3>
				Total EXP: <span className="Pokedex-span">{props.exp}</span>
			</h3>
			<div className="Pokedex-cards">
				{props.pokemons.map((p, idx) => (
					<Pokecard key={idx} p={p} />
				))}
			</div>
		</div>
	);
}

export default Pokedex;
