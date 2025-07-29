import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Roggenrola",
		fr: "Nodulithe",
		es: "Roggenrola",
		it: "Roggenrola",
		pt: "Roggenrola",
		de: "Kiesling"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		524,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque Imprudente",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280014
	}
}

export default card
