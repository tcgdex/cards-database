import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 40,

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
				'en-us': "Crushing Step",
				'fr-fr': "Trépignement",
				'de-de': "Crushing Step"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It hits people with its nose as a sign of affection but doesn't know its own strength and so sometimes knocks people off their feet.",
		'fr-fr': "Il frappe les gens avec sa trompe en signe d'affection mais il ne connaît pas sa force ; et parfois, il frappe un peu trop fort..."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274728,
				tcgplayer: 87997
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274728,
				tcgplayer: 87997
			}
		}
	]
}

export default card
