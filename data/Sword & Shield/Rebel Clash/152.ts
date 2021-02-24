import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Greedent",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Skwovet",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Greedy Tail",
			},
			effect: {
				en: "Once during your turn, you may search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Smack",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
