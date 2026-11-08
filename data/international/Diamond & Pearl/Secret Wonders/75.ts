import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe",
		'de-de': "Schillok"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Giant Wave",
				'fr-fr': "Vague géante",
				'de-de': "Riesenwelle"
			},
			effect: {
				'en-us': "Wartortle can't use Giant Wave during your next turn.",
				'fr-fr': "Carabaffe ne peut pas utiliser Vague géante lors de votre prochain tour.",
				'de-de': "Schillok kann Riesenwelle in deinem nächsten Zug nicht einsetzen."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shell Attack",
				'fr-fr': "Coquill-attaque",
				'de-de': "Muschelangriff"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.",
	},

	thirdParty: {
		cardmarket: 277828,
		tcgplayer: 90489
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
