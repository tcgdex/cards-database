import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'pt-br': "Weedle",
		'de-de': "Hornliu"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
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
			],
			name: {
				'en-us': "Triple Stab",
				'fr-fr': "Aiguillon Triple",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It eats its weight in leaves every day. It fends off attackers with the needle on its head.",
	},

	thirdParty: {
		cardmarket: 280879,
		tcgplayer: 90547
	}
}

export default card
