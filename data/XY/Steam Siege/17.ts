import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Rapidash",
		fr: "Galopa",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		78,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rear Kick",
				fr: "Ruade",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
			},
			effect: {
				en: "Discard a Fire Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
