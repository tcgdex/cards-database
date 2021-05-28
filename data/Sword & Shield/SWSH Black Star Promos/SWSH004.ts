import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Miaouss V",
		en: "Meowth V"
	},
	illustrator: "aky CG Works",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 180,
	types: [
		"Colorless",
	],

	stage: "Basic",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Jackpot",
				en: "Pay Day"
			},
			effect: {
				fr: "Piochez une carte.",
				en: "Draw a card."
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
				fr: "Griffe Taillante",
				en: "Slashing Claw"
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
