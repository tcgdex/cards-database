import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Houndoom V",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Fire",
	],




	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Searing Flame",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Vengeful Flame",
			},
			effect: {
				en: "If your Benched Fire Pokémon have any damage counters on them, this attack does 100 more damage.",
			},
			damage: "100+",

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
