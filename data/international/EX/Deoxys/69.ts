import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing en tire-bouchon",
				'de-de': "Corkscrew Punch"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'fr-fr': "Double tour",
				'de-de': "Double Spin"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87999,
				cardmarket: 276472
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87999,
				cardmarket: 276472
			},
		},
	],

}

export default card
