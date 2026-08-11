import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		572,
	],

	hp: 60,

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
				'en-us': "Cleaning Up",
				'fr-fr': "Nettoyage",
				'es-es': "Purgar",
				'it-it': "Pulizie",
				'pt-br': "Limpar",
				'de-de': "Putzen"
			},
			effect: {
				'en-us': "Discard a Pokémon Tool card attached to 1 of your opponent's Pokémon.",
				'fr-fr': "Défaussez une carte Outil Pokémon attachée à l'un des Pokémon de votre adversaire.",
				'es-es': "Descarta 1 carta de Herramienta Pokémon unida a 1 de los Pokémon de tu rival.",
				'it-it': "Scarta una carta Oggetto Pokémon assegnata a uno dei Pokémon del tuo avversario.",
				'pt-br': "Descarte um card de Ferramenta Pokémon ligado a 1 Pokémon do seu oponente.",
				'de-de': "Lege 1 an ein gegnerisches Pokémon angelegte Pokémon-Ausrüstung auf den Ablagestapel deines Gegners."
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
		'en-us': "These Pokémon prefer a tidy habitat. They are always sweeping and dusting, using their tails as brooms.",
	},

	thirdParty: {
		cardmarket: 289907,
		tcgplayer: 117859
	}
}

export default card
