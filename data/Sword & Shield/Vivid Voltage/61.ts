import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zeraora",
		fr: "Zeraora"
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
				fr: "Foudre Hostile"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 80 dégâts supplémentaires."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	regulationMark: "D"
}

export default card
