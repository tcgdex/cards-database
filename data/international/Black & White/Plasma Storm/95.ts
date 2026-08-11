import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Black Kyurem-EX",
		fr: "Kyurem Noir-EX",
		es: "Kyurem Negro-EX",
		it: "Kyurem Nero-EX",
		pt: "Kyurem Preto-EX",
		de: "Schwarzes Kyurem-EX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Black Ballista",
				fr: "Baliste Noire",
			},
			effect: {
				en: "Discard 3 Energy attached to this Pokémon.",
				fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
