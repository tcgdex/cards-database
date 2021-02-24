import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Spiritomb",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Splitting Spite",
			},
			effect: {
				en: "Discard the top card of each player’s deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dripping Grudge",
			},
			effect: {
				en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
