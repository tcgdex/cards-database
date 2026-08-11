import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'de-de': "Remoraid"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
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
				'en-us': "Ion Pool",
				'fr-fr': "Bassin Ionique",
				'es-es': "Piscina Iónica",
				'it-it': "Vasca Ionizzata",
				'pt-br': "Piscina de Íons",
				'de-de': "Ionenbecken"
			},
			effect: {
				'en-us': "Discard any Stadium card in play.",
				'fr-fr': "Défaussez toute carte Stade en jeu.",
				'es-es': "Descarta cualquier carta de Estadio en juego.",
				'it-it': "Scarta una carta Stadio in gioco.",
				'pt-br': "Descarte qualquer card de Estádio em jogo.",
				'de-de': "Lege eine beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d'Água",
				'de-de': "Aquaknarre"
			},

			damage: 20,

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
		'en-us': "Using its dorsal fin as a suction pad, it clings to a Mantine's underside to scavenge for leftovers.",
	},

	thirdParty: {
		cardmarket: 286277,
		tcgplayer: 107151
	}
}

export default card
