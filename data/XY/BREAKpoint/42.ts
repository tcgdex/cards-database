import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Élektek",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Knuckle Punch",
				fr: "Coud'Phalange",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
