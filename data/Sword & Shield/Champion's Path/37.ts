import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Galarian Obstagoon",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Galarian Linoone",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wicked Ruler",
			},
			effect: {
				en: "Once during your turn, you may have your opponent discard cards from their hand until they have 4 cards in their hand.",
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
				en: "Knuckle Impact",
			},
			effect: {
				en: "During your next turn, this Pokémon can’t attack.",
			},
			damage: 180,

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
