import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Black Kyurem-EX",
		'fr-fr': "Kyurem Noir-EX",
		'es-es': "Kyurem Negro-EX",
		'it-it': "Kyurem Nero-EX",
		'pt-br': "Kyurem Preto-EX",
		'de-de': "Schwarzes Kyurem-EX"
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
				'en-us': "Slash",
				'fr-fr': "Tranche",
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
				'en-us': "Black Ballista",
				'fr-fr': "Baliste Noire",
			},
			effect: {
				'en-us': "Discard 3 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies attachées à ce Pokémon.",
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
