import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Light Punch",
				fr: "Poing Léger",
				es: "Puño Ligero",
				it: "Pugnetto",
				pt: "Soco de Luz",
				de: "Leichter Hieb"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing Magnum",
				es: "Puño Magnum",
				it: "Superpugno",
				pt: "Soco Magnum",
				de: "Magnum-Schlag"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 408249
	}
}

export default card
