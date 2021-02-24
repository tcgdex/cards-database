import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Vaporeon",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Torrential Awakening",
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Fire Pokémon in play (both yours and your opponent’s) have no Abilities.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
