import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Kick",
				fr: "Koud'Pied",
			},

			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Cross",
				fr: "Passage Éclair",
			},

			damage: 70,

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
