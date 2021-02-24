import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Regigigas-EX",
		fr: "Regigigas-EX",
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
				en: "Giga Power",
				fr: "Giga Pouvoir",
			},
			effect: {
				en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
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
				en: "Raging Hammer",
				fr: "Marteau Rageur",
			},
			effect: {
				en: "Does 10 more damage for each damage counter on this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
