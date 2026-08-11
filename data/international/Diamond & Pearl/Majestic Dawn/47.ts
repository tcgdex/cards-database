import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
		'de-de': "Staravia"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		397,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drill Peck",
				'fr-fr': "Bec vrille",
				'de-de': "Bohrschnabel"
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "It lives in forests and fields. Squabbles over territory occur when flocks collide.",
	},

	thirdParty: {
		cardmarket: 278096,
		tcgplayer: 89515
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
