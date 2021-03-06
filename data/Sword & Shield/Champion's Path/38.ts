import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Cutter",
				fr: "Tranch’Obscur",
				es: "Cuchilla Oscura",
				it: "Oscurotaglio",
				pt: "Cortador de Escuridão",
				de: "Dunkler Zerschneider"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
