import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Shiftry",
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nuzleaf",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shifty Substitution",
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, each Supporter card in your opponent’s hand has the effect \"Draw 3 cards.\" (This happens instead of the card’s usual effect.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fan Tornado",
			},
			effect: {
				en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
