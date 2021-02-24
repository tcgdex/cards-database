import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Incineroar V",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 220,
	types: [
		"Fire",
	],




	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Grand Flame",
			},
			effect: {
				en: "Attach up to 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
			},
			damage: 90,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Blitzer",
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
			},
			damage: 220,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
