import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Lucario V",
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Fighting",
	],




	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Aura Sphere",
			},
			effect: {
				en: "This attack also does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Beatdown Smash",
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Beatdown Smash.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
