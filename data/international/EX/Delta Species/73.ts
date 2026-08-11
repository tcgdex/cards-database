import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Larvitar δ",
		'fr-fr': "Embrylex δ",
		'de-de': "Larvitar"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		246,
	],

	hp: 50,

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
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Bite"
			},

			damage: 10,

		},
		{
			name: {
				'en-us': "Rising Lunge",
				'fr-fr': "Botte secrète",
				'de-de': "Rising Lunge"
			},

			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},

			damage: "20+",
			cost: ["Fire", "Colorless"]
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276836
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
