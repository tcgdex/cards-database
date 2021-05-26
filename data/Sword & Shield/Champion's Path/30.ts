import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Lycanroc",
	},
	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rockruff",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rock Throw",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Slashing Strike.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
