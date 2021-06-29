import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Joltik",
		fr: "Statitik",
		es: "Joltik",
		it: "Joltik",
		pt: "Joltik",
		de: "Wattzapf"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 40,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
				es: "Picadura",
				it: "Coleomorso",
				pt: "Picada",
				de: "Käferbiss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
