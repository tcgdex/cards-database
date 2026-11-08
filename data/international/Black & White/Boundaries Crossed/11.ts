import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Snivy",
		'fr-fr': "Vipélierre",
		'es-es': "Snivy",
		'it-it': "Snivy",
		'pt-br': "Snivy",
		'de-de': "Serpifeu"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		495,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Vine Whip",
				'fr-fr': "Fouet Lianes",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Cut",
				'fr-fr': "Coupe",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is very intelligent and calm. Being exposed to lots of sunlight makes its movements swifter.",
	},

	thirdParty: {
		cardmarket: 280598,
		tcgplayer: 89380
	}
}

export default card
