import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Surfing Pikachu",
		fr: "Pikachu surfeur Niv. 13",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Surf",
				fr: "Surf",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
