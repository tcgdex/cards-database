import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Flareon",
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Incandescent Awakening",
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Grass Pokémon in play (both yours and your opponent’s) have no Abilities.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Mane",
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
