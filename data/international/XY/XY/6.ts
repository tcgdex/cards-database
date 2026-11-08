import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy",
		'es-es': "Ledyba",
		'it-it': "Ledyba",
		'pt-br': "Ledyba",
		'de-de': "Ledyba"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		165,
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
				"Grass",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque Tournante",
				'es-es': "Ataque Giratorio",
				'it-it': "Attacco Rotante",
				'pt-br': "Ataque Giratório",
				'de-de': "Rundumangriff"
			},

			damage: 30,

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
		'en-us': "When the weather turns cold, lots of Ledyba gather from everywhere to cluster and keep each other warm.",
	},

	thirdParty: {
		cardmarket: 281343,
		tcgplayer: 86706
	}
}

export default card
