import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Slice",
				'fr-fr': "Tranche feuille"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 84145
			}
		},
	]

}

export default card
