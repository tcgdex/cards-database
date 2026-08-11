import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
		'es-es': "Rattata",
		'it-it': "Rattata",
		'pt-br': "Rattata",
		'de-de': "Rattfratz"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dangerous Suspicion",
				'fr-fr': "Soupçon Dangereux",
				'es-es': "Sospecha Peligrosa",
				'it-it': "Sospetti Pericolosi",
				'pt-br': "Suspeita Perigosa",
				'de-de': "Gefährlicher Verdacht"
			},
			effect: {
				'en-us': "Draw a card. Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Piochez une carte. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Roba 1 carta. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Pesca una carta. Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Compre um card. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Ziehe 1 Karte. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its fangs are long and very sharp. They grow continuously, so it gnaws on hard things to whittle them down.",
	},

	thirdParty: {
		cardmarket: 288262,
		tcgplayer: 111622
	}
}

export default card
