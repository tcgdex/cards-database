import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'de-de': "Rihorn"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
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
				'en-us': "Horn Attack",
				'fr-fr': "Koud'korne",
				'de-de': "Hornattacke"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Rhyhorn does 10 damage to itself.",
				'fr-fr': "Rhinocorne s'inflige 10 dégâts.",
				'de-de': "Rihorn fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its body is clad in a thick hide, and its tackles topple buildings. Unfortunately, it is not smart.",
		'fr-fr': "Sa peau est très épaisse et sa charge peut détruire un immeuble. Dommage qu'il soit stupide."
	},

	thirdParty: {
		cardmarket: 277594,
		tcgplayer: 88742
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
