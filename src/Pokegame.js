/** @format */

import React from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

function Pokegame() {
	const pokemons = [
		{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
		{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
		{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
		{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
		{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
		{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
		{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
		{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
	];

	//initialize 2 groups of pokemons
	let dex1 = [];
	let dex2 = [...pokemons];

	//sorting pokemons to 2 groups 2 x 4pokemon
	while (dex1.length < dex2.length) {
		let randomIdx = Math.floor(Math.random() * dex2.length);
		let randomPokemon = dex2.splice(randomIdx, 1)[0];
		dex1.push(randomPokemon);
	}

	//calculating total pokemons exp in dek
	let exp1 = dex1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
	let exp2 = dex2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
	console.log(exp1, exp2);

	return (
		<div className="Pokegame">
			<Pokedex pokemons={dex1} exp={exp1} isWinner={exp1 > exp2} />
			<Pokedex pokemons={dex2} exp={exp2} isWinner={exp2 > exp1} />
		</div>
	);
}

export default Pokegame;
