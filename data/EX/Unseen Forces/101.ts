import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Blissey ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		242,
	],
	hp: 160,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Chansey ex",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Blissful Support",
			},
			effect: {
				en: "Once during your turn, when you play Blissey ex from your hand to evolve 1 of your Pokémon, you may discard all Energy cards attached to any number of your Pokémon and remove all damage counters from those Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Absorption",
			},
			effect: {
				en: "Attach up to 3 Energy cards from your discard pile to Blissey ex.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Roll Out",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
