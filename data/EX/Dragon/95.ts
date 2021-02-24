import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Magcargo ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Melting Mountain",
			},
			effect: {
				en: "Discard the top card from your deck. If that card is a basic Energy card, attach it to Magcargo ex.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Lava Flow",
			},
			effect: {
				en: "You may discard any number of basic Energy cards attached to Magcargo ex when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each basic Energy card you discarded.",
			},
			damage: 40,

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
