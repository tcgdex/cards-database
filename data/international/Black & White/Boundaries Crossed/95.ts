import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 80,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Claw",
				'fr-fr': "Ergots",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drill Peck",
				'fr-fr': "Bec Vrille",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Despite being clad entirely in iron-hard armor, it flies at speed of over 180 mph.",
	},

	thirdParty: {
		cardmarket: 280682,
		tcgplayer: 89244
	}
}

export default card
