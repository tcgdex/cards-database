import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Kyurem-EX",
		'fr-fr': "Kyurem EX",
		'es-es': "Kyurem-EX",
		'it-it': "Kyurem-EX",
		'pt-br': "Kyurem-EX",
		'de-de': "Kyurem-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Outrage",
				'fr-fr': "Colère",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Frost",
				'fr-fr': "Giga Givre",
			},
			effect: {
				'en-us': "Discard 2 Water Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Water attachées à ce Pokémon.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
