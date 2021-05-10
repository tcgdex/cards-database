import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Fletchinder",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Fletchling",
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Searing Flame",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
