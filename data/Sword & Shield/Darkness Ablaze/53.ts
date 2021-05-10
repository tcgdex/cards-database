import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dracovish",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Rare Fossil",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Primal Law",
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent can’t play any Pokémon from their hand to evolve their Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
