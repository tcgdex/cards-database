import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		it: "Exeggcute",
		pt: "Exeggcute",
		de: "Owei"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
				es: "Bomba Germen",
				it: "Semebomba",
				pt: "Bomba de Sementes",
				de: "Samenbomben"
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

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
