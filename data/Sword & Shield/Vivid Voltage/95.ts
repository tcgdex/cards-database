import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
				es: "Lanzarrocas",
				it: "Sassata",
				pt: "Lançamento de Rocha",
				de: "Steinwurf"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sharp Mane",
				fr: "Crinière Aiguisée",
				es: "Melena Afilada",
				it: "Criniera Affilata",
				pt: "Juba Afiada",
				de: "Scharfe Mähne"
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

	retreat: 2,
	regulationMark: "D"
}

export default card
