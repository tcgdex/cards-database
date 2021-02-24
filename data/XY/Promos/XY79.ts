import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Latios",
		fr: "Latios",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 100,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Glide",
				fr: "Glissement",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Blade",
			},
			effect: {
				en: "If Latias is on your Bench, this attack does 50 more damage.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
