import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Golduck",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Psyduck",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Flipper Stroke",
			},
			effect: {
				en: "Your opponent looks at the top 3 cards of his or her deck. If any of them are basic Energy cards, he or she may show any number of them to you and put them into his or her hand. You do the same. Either way, each player shuffles his or her deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Blast",
			},
			effect: {
				en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
