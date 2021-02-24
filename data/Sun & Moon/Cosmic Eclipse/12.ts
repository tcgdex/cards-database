import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		357,
	],
	hp: 120,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synthesis",
				fr: "Synthèse",
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Grass dans votre deck et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Drain",
				fr: "Feuille Sangsue",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
