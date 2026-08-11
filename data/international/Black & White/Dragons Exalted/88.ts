import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
		'es-es': "Gabite",
		'it-it': "Gabite",
		'pt-br': "Gabite",
		'de-de': "Knarksel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves sparkly things. It seeks treasures in caves and hoards the loot in its nest.",
	},

	thirdParty: {
		cardmarket: 280527,
		tcgplayer: 85600
	}
}

export default card
