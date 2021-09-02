import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Last-Chance Chop",
				fr: "Dernière Chance",
			},
			effect: {
				en: "If this Pokémon's remaining HP is 10, this attack does 70 more damage.",
				fr: "S'il reste 10 PV à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seismic Toss",
				fr: "Frappe Atlas",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
