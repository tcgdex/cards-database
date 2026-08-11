import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "M Gardevoir EX",
		'fr-fr': "M-Gardevoir-EX",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 210,
	types: [
		"Fairy",
	],
	evolveFrom: {
		'en-us': "Gardevoir-EX",
		'fr-fr': "Gardevoir-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brilliant Arrow",
				'fr-fr': "Flèche Éclatante",
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of Fairy Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Fairy attachées à tous vos Pokémon.",
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
