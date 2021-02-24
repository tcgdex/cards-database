import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Salandit",
		fr: "Tritox",
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		757,
	],
	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Dig Claws",
				fr: "Creusogriffes",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
