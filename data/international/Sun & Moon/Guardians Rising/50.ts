import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
	],

	hp: 70,

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
				'en-us': "Stomp Off",
				'fr-fr': "Tohu-Bohu",
				'es-es': "Pisotear",
				'it-it': "Pestatura",
				'pt-br': "Sair Irritado",
				'de-de': "Davonstapfen"
			},
			effect: {
				'en-us': "Discard the top card of your opponent’s deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte a primeira carta do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drool",
				'fr-fr': "Gluant",
				'es-es': "Babeo",
				'it-it': "Sbavare",
				'pt-br': "Babar",
				'de-de': "Sabbern"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Unsanitary places are what they like best. They can be spotted in Alola, often with Grimer in hot pursuit.",
	},

	thirdParty: {
		cardmarket: 297512,
		tcgplayer: 130956
	}
}

export default card
