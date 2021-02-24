import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Staravia",
		fr: "Étourvol",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		397,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Starly",
		fr: "Étourmi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec vrille",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
