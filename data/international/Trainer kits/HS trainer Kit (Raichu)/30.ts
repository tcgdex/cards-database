import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		'en-us': "Raichu",
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [26],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Pikachu",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Iron Tail",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			},
			damage: "30×",
		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt",
			},
			effect: {
				'en-us': "Discard all Energy attached to Raichu.",
			},
			damage: 100,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279118,
				tcgplayer: 88521,
			},
		},
	],

}

export default card
