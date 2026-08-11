import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Remoraid",
		'fr-fr': "Remoraid",
		'de-de': "Remoraid"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [223],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Splash",
				'fr-fr': "Trempette",
				'de-de': "Splash"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trickle",
				'fr-fr': "Goutte à goutte",
				'de-de': "Trickle"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It forcefully squirts water. The water jet never misses prey even if the REMORAID is deep in the sea."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88698,
				cardmarket: 278511
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278511,
				tcgplayer: 88698
			}
		}
	],

}

export default card
