import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Flygon ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Emerge Charge",
			},
			effect: {
				en: "Once during your turn, when you play Flygon ex from your hand to evolve 1 of your Pokémon, you may search your discard pile for up to 2 Energy cards and attach them to Flygon ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Reactive Blast",
			},
			effect: {
				en: "You may discard any number of React Energy cards attached to Flygon ex. If you do, this attack does 40 damage plus 30 more damage for each React Energy card you discarded.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
