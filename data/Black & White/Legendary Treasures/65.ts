import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Swoobat",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		528,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Woobat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Gift",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for 2 Psychic Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Heart Stamp",
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281216,
		tcgplayer: 89727
	}
}

export default card
