import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Porygon",
	},
	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Conversion 1",
			},
			effect: {
				en: "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Conversion 2",
			},
			effect: {
				en: "Change Porygon's Resistance to a type of your choice other than Colorless.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
