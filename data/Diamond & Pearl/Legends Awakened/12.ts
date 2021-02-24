import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Politoed",
		fr: "Tarpaud",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		186,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
		fr: "Quaputzi",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Enthusiasm",
				fr: "Enthousiasme",
			},
			effect: {
				en: "If you have Poliwag, Poliwhirl, and Poliwrath in play, each of these Pokémon's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Si vous possédez Ptitard, Tetarte et Tartard en jeu, chacune des attaques de ces Pokémon inflige 60 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Frog Hop",
				fr: "Bond de grenouille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 1,



}

export default card
