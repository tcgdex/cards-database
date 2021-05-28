import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Barboach",
		fr: "Barloche"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-Rasoir"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 70,
	types: ["Fighting"],
	regulationMark: "D"
}

export default card
