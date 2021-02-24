import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Charizard-GX",
	},
	illustrator: "Framestore",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 250,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Raging Destruction",
			},
			effect: {
				en: "Discard the top 8 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steam Artillery",
			},

			damage: 200,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dreadful Flames-GX",
			},
			effect: {
				en: "Discard an Energy from each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 250,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
