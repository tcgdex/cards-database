import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		'en-us': "Pikachu",
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [25],
	hp: 60,
	types: [
		"Lightning",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
			},
			damage: 10,
		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			},
			damage: "20+",
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
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279103,
				tcgplayer: 88100,
			},
		},
	],

}

export default card
