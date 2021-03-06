import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Mew-EX",
	},
	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 120,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Versatile",
			},
			effect: {
				en: "This Pokémon can use the attacks of any Pokémon in play (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Replace",
			},
			effect: {
				en: "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
