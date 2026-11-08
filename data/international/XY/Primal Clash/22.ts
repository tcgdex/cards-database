import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Grass Fire",
				'fr-fr': "Feu de Brousse",
				'es-es': "Quemaplantas",
				'it-it': "Fuoco d'Erba",
				'pt-br': "Fogo de Grama",
				'de-de': "Pflanzenbrand"
			},
			effect: {
				'en-us': "Discard a Grass Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie Grass attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Grass unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia Grass assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia Grass ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Grass-Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its body is made of magma. If it doesn't keep moving, its body will cool and harden.",
	},

	thirdParty: {
		cardmarket: 273553,
		tcgplayer: 95906
	}
}

export default card
