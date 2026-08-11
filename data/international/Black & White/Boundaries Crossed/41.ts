import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Samurott",
		'fr-fr': "Clamiral",
		'es-es': "Samurott",
		'it-it': "Samurott",
		'pt-br': "Samurott",
		'de-de': "Admurai"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		503,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Destructive Whirlpool",
				'fr-fr': "Siphon Destructeur",
			},
			effect: {
				'en-us': "Discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.",
	},

	thirdParty: {
		cardmarket: 280628,
		tcgplayer: 88910
	}
}

export default card
