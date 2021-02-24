import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Lunatone",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Future Sight",
			},
			effect: {
				en: "Look at the top 4 cards of either player’s deck and put them back in any order.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic",
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.",
			},
			damage: "20+",

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
