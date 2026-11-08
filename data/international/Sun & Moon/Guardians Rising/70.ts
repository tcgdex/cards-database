import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
		'es-es': "Barboach",
		'it-it': "Barboach",
		'pt-br': "Barboach",
		'de-de': "Schmerbe"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		339,
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
				'en-us': "Hook",
				'fr-fr': "Crochet",
				'es-es': "Garfio",
				'it-it': "Uncino",
				'pt-br': "Gancho",
				'de-de': "Haken"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mud-Slap",
				'fr-fr': "Coud’Boue",
				'es-es': "Bofetón Lodo",
				'it-it': "Fangosberla",
				'pt-br': "Tiro de Lama",
				'de-de': "Lehmschelle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its two whiskers provide a sensitive radar. Even in muddy waters, it can detect its prey's location.",
	},

	thirdParty: {
		cardmarket: 297531,
		tcgplayer: 130980
	}
}

export default card
