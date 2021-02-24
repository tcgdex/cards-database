import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Filch",
				fr: "Maraudage",
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Copycat",
				fr: "Photocopie",
			},
			effect: {
				en: "If your opponent's Pokémon used an attack that isn't a GX attack during their last turn, use it as this attack.",
				fr: "Si le Pokémon de votre adversaire a utilisé une attaque autre qu’une attaque GX pendant son dernier tour, utilisez-la en tant que cette attaque.",
			},

		},
	],


	retreat: 1,



}

export default card
