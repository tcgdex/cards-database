import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Tandemaus",
		'fr-fr': "Compagnol",
		'es-es': "Tandemaus",
		'it-it': "Tandemaus",
		'pt-br': "Tandemaus",
		'de-de': "Zwieps"
	},

	illustrator: "yuu",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [924],

	hp: 40,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Double Hit",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			},
			damage: "30x"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725430,
				tcgplayer: 516524
			}
		}
	]
}

export default card

