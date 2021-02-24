import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Terrakion",
		fr: "Terrakium",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		639,
	],
	hp: 140,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cavern Counter",
				fr: "Marqueur des Grottes",
			},
			effect: {
				en: "If all of your Benched Pokémon have at least 1 damage counter on them, this attack does 150 more damage.",
				fr: "Si tous vos Pokémon de Banc ont au moins un marqueur de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boulder Crush",
				fr: "Rocher Écrasant",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
