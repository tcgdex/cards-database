import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
		es: "Cofagrigus",
		it: "Cofagrigus",
		pt: "Cofagrigus",
		de: "Echnatoll"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Yamask",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chuck",
			},
			effect: {
				en: "Discard as many Pokémon Tool cards as you like from your hand. This attack does 40 damage times the number of cards you discarded.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Lock Up",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2
}

export default card
