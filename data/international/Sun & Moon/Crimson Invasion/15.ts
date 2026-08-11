import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'pt-br': "Staryu",
		'de-de': "Sterndu"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque Tournante",
				'es-es': "Ataque Giratorio",
				'it-it': "Attacco Rotante",
				'pt-br': "Ataque Giratório",
				'de-de': "Rundumangriff"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Large numbers of these Pokémon make their home at the seaside. At night, a strange red glow radiates from the center of their bodies.",
	},

	thirdParty: {
		cardmarket: 311865,
		tcgplayer: 149036
	}
}

export default card
