import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu δ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 40,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Thunder Wave",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Tail",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88109
			}
		},
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 88109
			}
		}
	]
}

export default card
