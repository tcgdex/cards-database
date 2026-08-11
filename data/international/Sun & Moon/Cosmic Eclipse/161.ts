import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Jangmo-o",
		'fr-fr': "Bébécaille",
		'es-es': "Jangmo-o",
		'it-it': "Jangmo-o",
		'pt-br': "Jangmo-o",
		'de-de': "Miniras"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		782,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Headbutt",
				'fr-fr': "Dracoud’Boule",
				'es-es': "Cabezazo Dragón",
				'it-it': "Dragozuccata",
				'pt-br': "Cabeçada do Dragão",
				'de-de': "Drachen-Kopfnuss"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It smacks the scales on its head against rocks or against the ground to frighten its opponents. It can also contact its friends with these noises.",
	},

	thirdParty: {
		cardmarket: 408434,
		tcgplayer: 201282
	}
}

export default card
