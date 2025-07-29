import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubble Drain",
				fr: "Vide Bulle",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 396607
	}
}

export default card
