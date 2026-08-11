import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Braviary",
		'fr-fr': "Gueriaigle",
		'es-es': "Braviary",
		'it-it': "Braviary",
		'pt-br': "Braviary",
		'de-de': "Washakwil"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		628,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "They fight for their friends without any thought about danger to themselves. One can carry a car while flying.",
	},

	thirdParty: {
		cardmarket: 280551,
		tcgplayer: 83951
	}
}

export default card
