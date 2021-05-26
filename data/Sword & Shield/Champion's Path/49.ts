import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Altaria",
	},
	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Swablu",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Miraculous Charm",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon V and Pokémon-GX.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
