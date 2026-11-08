import { Card } from 'models/database/card'
import Set from '../Poké Card Creator Pack'

const card: Card = {
	name: {
		'en-us': "Mudkip"
	},

	illustrator: "Rowan Laidlaw",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		258,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Rap"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Splash"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep."
			},
			damage: 30,

		}
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605995,
				tcgplayer: 162271
			},
		}
	]
}

export default card
