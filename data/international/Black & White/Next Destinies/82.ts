import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Regigigas-EX",
		'fr-fr': "Regigigas-EX",
		'es-es': "Regigigas-EX",
		'it-it': "Regigigas-EX",
		'pt-br': "Regigigas-EX",
		'de-de': "Regigigas-EX"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 180,
	types: [
		"Colorless",
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
				'en-us': "Giga Power",
				'fr-fr': "Giga Pouvoir",
			},
			effect: {
				'en-us': "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Hammer",
				'fr-fr': "Marteau Rageur",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
