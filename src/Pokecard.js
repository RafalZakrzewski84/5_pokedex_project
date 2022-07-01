/** @format */

import React from 'react';
import './Pokecard.css';

const POKE_API =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
	console.log(props);
	let imgSrc = `${POKE_API}${props.p.id}.png`;
	return (
		<div className="Pokecard">
			<h1>{props.p.name}</h1>
			<img src={imgSrc} alt={props.p.name} />
			<div>Type: {props.p.type}</div>
			<div>EXP: {props.p.base_experience}</div>
		</div>
	);
}

export default Pokecard;
