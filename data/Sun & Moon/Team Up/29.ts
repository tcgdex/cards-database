import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		129,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Enter the Dragon",
				fr: "Porte du Dragon",
			},
			effect: {
				en: "Flip a coin. If heads, put a card that evolves from this Pokémon from your discard pile onto this Pokémon to evolve it.",
				fr: "Lancez une pièce. Si c’est face, placez une carte Évolution de ce Pokémon de votre pile de défausse sur ce Pokémon pour le faire évoluer.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
