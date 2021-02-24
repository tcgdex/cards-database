import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Hattrem",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Hatenna",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Calm Mind",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brutal Swing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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



}

export default card
