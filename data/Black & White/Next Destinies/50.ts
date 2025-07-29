import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Zekrom",
		fr: "Zekrom",
		es: "Zekrom",
		it: "Zekrom",
		pt: "Zekrom",
		de: "Zekrom"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		644,
	],

	hp: 130,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Outrage",
				fr: "Colère",
			},
			effect: {
				en: "Does 10 more damage for each damage counter on this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Bolt Strike",
				fr: "ChargeFoudre",
			},
			effect: {
				en: "This Pokémon does 40 damage to itself.",
				fr: "Ce Pokémon s'inflige 40 dégâts.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280275
	}
}

export default card
