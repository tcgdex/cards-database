import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		de: "Porygon"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
				de: "Sharpen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Ce Pokémon est le résultat de recherches informatiques. Son programme n'est capable que d'actions et de réactions simples."
	},

	thirdParty: {
		cardmarket: 274730
	}
}

export default card
