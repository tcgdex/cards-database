import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Beedrill",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],

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
				en: "Raid",
			},
			effect: {
				en: "If you played Beedrill from your hand during this turn, this attack's base damage is 40 instead of 10.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			},
			damage: "30x",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
