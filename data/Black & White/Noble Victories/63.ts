import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		533,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Strength",
				fr: "Force",
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
				en: "Pummel",
				fr: "Martelage",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
