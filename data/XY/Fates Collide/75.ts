import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		es: "Kangaskhan",
		it: "Kangaskhan",
		pt: "Kangaskhan",
		de: "Kangama"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tiny Punch",
				fr: "P'tit Coup d'Poing",
				es: "Minipuño",
				it: "Micropugno",
				pt: "Soco Bebê",
				de: "Mickriger Hieb"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
				es: "Megapuño",
				it: "Megapugno",
				pt: "Mega Soco",
				de: "Megahieb"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289896
	}
}

export default card
