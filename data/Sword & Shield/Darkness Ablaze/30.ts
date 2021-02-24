import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Volcarona",
	},
	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Larvesta",
	},



	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Cauterize",
			},
			effect: {
				en: "If your opponent’s Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
			},
			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Wing",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
