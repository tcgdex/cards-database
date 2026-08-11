import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Passimian",
		'fr-fr': "Quartermac",
		'es-es': "Passimian",
		'it-it': "Passimian",
		'pt-br': "Passimian",
		'de-de': "Quartermak"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		766,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Spike Draw",
				'fr-fr': "Pique-Pioche",
				'es-es': "Robo Pico",
				'it-it': "Battipesca",
				'pt-br': "Comprada Espinhosa",
				'de-de': "Stachelzug"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seismic Toss",
				'fr-fr': "Frappe Atlas",
				'es-es': "Movimiento Sísmico",
				'it-it': "Movimento Sismico",
				'pt-br': "Arremesso Sísmico",
				'de-de': "Geowurf"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They use their saliva to stick leaves to their shoulders. You can tell what troop they belong to from the position of the leaves.",
	},

	thirdParty: {
		cardmarket: 408274,
		tcgplayer: 201165
	}
}

export default card
