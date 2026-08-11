import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'es-es': "Crawdaunt",
		'it-it': "Crawdaunt",
		'pt-br': "Crawdaunt",
		'de-de': "Krebutack"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		342,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Double Claws",
				'fr-fr': "Doubles Griffes",
				'es-es': "Dos Pinzas",
				'it-it': "Doppie Chele",
				'pt-br': "Garras Duplas",
				'de-de': "Doppelschere"
			},
			effect: {
				'en-us': "Discard 2 Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez 2 Énergies du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 2 Energías del Pokémon Activo de tu rival.",
				'it-it': "Scarta due Energie assegnate al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 2 Energias do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 2 Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is a ruffian that uses its pincers to pick up and toss out other Pokémon from its pond.",
	},

	thirdParty: {
		cardmarket: 311875,
		tcgplayer: 149046
	}
}

export default card
