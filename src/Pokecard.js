/** @format */

import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

function Pokecard(props) {
	//one liner
	const changeId = (id) => (id <= 999 ? `00${id}`.slice(-3) : id);

	//my solution - preparing id for matching to url
	let id = props.p.id;
	if (id < 10) {
		id = `00${id}`;
	} else if (id < 100) {
		id = `0${id}`;
	}

	let imgSrc = `${POKE_API}${changeId(props.p.id)}.png`;
	return (
		<div className="Pokecard">
			<h1 className="Pokecard-header">{props.p.name}</h1>
			<img className="Pokecard-img" src={imgSrc} alt={props.p.name} />
			<div className="Pokecard-data">Type: {props.p.type}</div>
			<div className="Pokecard-data">EXP: {props.p.base_experience}</div>
		</div>
	);
}

export default Pokecard;
