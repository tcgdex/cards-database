import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
		'es-es': "Frillish",
		'it-it': "Frillish",
		'pt-br': "Frillish",
		'de-de': "Quabbel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		592,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If its veil-like arms stun and wrap a foe, that foe will be dragged miles below the surface, never to return.",
	},

	thirdParty: {
		cardmarket: 280631,
		tcgplayer: 85565
	}
}

export default card
