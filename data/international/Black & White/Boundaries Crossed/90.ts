import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		509,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Captivate",
				'fr-fr': "Séduction",
			},
			effect: {
				'en-us': "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Their cute act is a ruse. They trick people and steal their valuables just to see the looks on their faces.",
	},

	thirdParty: {
		cardmarket: 280677,
		tcgplayer: 88459
	}
}

export default card
