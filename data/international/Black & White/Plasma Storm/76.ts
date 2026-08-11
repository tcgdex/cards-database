import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		447,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud'Pied",
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Feint",
				'fr-fr': "Ruse",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They communicate with one another using their auras made tangible by their emotions.",
	},

	thirdParty: {
		cardmarket: 280815,
		tcgplayer: 88762
	}
}

export default card
