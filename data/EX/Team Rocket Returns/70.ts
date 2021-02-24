import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Psyduck",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Headache",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play a Trainer card from his or her hand until the end of your opponent's next turn.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
