import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre"
	},

	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 2,

	description: {
		en: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538778,
				tcgplayer: 232316
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538783,
				tcgplayer: 232316
			}
		}
	]
}

export default card

