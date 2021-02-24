import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Gulpin",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		316,
	],

	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Endure",
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, if Gulpin would be Knocked Out by damage from an attack, Gulpin is not Knocked Out and its remaining HP becomes 10 instead.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pound",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,



}

export default card
