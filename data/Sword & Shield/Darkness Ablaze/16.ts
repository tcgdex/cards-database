import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Tsareena",
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Steenee",
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Whip",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent’s Pokémon for each Energy attached to this Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Time Out Kick",
			},
			effect: {
				en: "You may put an Energy attached to your opponent’s Active Pokémon into their hand.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
