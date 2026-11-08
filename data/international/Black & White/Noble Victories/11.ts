import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'es-es': "Shelmet",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'de-de': "Schnuthelm"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		616,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mysterious Evolution",
				'fr-fr': "Évolution Mystérieuse",
			},
			effect: {
				'en-us': "If Karrablast is in play, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				'fr-fr': "Si Carabing est en jeu, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It evolves when bathed in an electric-like energy along with Karrablast. The reason is still unknown.",
	},

	thirdParty: {
		cardmarket: 280134,
		tcgplayer: 89146
	}
}

export default card
