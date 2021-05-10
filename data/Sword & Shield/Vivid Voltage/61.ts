import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zeraora",
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Fighting Lightning",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 80 more damage.",
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	regulationMark: "D"
}

export default card
