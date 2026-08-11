import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		353,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Bleh",
				'fr-fr': "Nananère",
				'es-es': "Chincha Rabiña",
				'it-it': "Linguaccia",
				'pt-br': "Desconforto",
				'de-de': "Bäh"
			},
			effect: {
				'en-us': "Discard a Special Energy attached to 1 of your opponent's Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale attachée à l'un des Pokémon de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial unida a 1 de los Pokémon de tu rival.",
				'it-it': "Scarta un'Energia speciale assegnata a uno dei Pokémon del tuo avversario.",
				'pt-br': "Descarte uma Energia Especial ligada a 1 dos Pokémon do seu oponente.",
				'de-de': "Lege 1 an ein gegnerisches Pokémon angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves vengeful emotions and hangs in rows under the eaves of houses where vengeful people live.",
	},

	thirdParty: {
		cardmarket: 282698,
		tcgplayer: 98066
	}
}

export default card
