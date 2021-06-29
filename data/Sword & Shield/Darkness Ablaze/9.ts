import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Shelmet",
		fr: "Escargaume",
		es: "Shelmet",
		it: "Shelmet",
		pt: "Shelmet",
		de: "Schnuthelm"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spray Fluid",
				fr: "Fluide Éclaboussant",
				es: "Fluido Rociado",
				it: "Fluidospray",
				pt: "Fluido Spray",
				de: "Sprühwasser"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
