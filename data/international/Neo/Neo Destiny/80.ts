import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'de-de': "Remoraid"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Fury Strikes",
				'fr-fr': "Attaques furieuses",
				'de-de': "Fury Strikes"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		'en-us': "It can shoot a burst of water from its mouth to propel itself backward at high speeds, allowing it to flee from surprised enemies.",
		'fr-fr': "Il peut lancer de l'eau avec sa gueule pour se propulser en arrière à grande vitesse, ce qui lui permet d'échapper à ses ennemis."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274732,
				tcgplayer: 88693
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274732,
				tcgplayer: 88693
			}
		}
	]
}

export default card
