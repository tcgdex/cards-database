import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Orbeetle VMAX",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 310,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Orbeetle V",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Eerie Beam",
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may put 1 damage counter on each of your opponent’s Pokémon.",
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
				en: "G-Max Wave",
			},
			effect: {
				en: "This attack does 50 more damage for each Energy attached to your opponent’s Active Pokémon.",
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
