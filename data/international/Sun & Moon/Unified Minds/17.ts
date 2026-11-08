import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		761,
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
				'en-us': "Splash",
				'fr-fr': "Trempette",
				'es-es': "Salpicadura",
				'it-it': "Splash",
				'pt-br': "Borrifada",
				'de-de': "Platscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
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
		'en-us': "Because of its sweet, delicious aroma, bird Pokémon are always after it, but it's not intelligent enough to care.",
	},

	thirdParty: {
		cardmarket: 387917,
		tcgplayer: 194933
	}
}

export default card
