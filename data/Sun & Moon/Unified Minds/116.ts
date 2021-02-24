import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Riolu",
		fr: "Riolu",
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		447,
	],
	hp: 60,
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
				fr: "Koud’Pied",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
