import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		106,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Kick",
				fr: "Koud'pied",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied voltige",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
