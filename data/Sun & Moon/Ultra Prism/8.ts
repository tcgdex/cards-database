import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Grotle",
		fr: "Boskara",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		388,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mega Drain",
				fr: "Méga-Sangsue",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch’Herbe",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
