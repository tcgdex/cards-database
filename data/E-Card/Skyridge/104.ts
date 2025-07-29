import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Staryu",
		de: "Sterndu"
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slap",
				de: "Slap"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				de: "Confuse Ray"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275361
	}
}

export default card
