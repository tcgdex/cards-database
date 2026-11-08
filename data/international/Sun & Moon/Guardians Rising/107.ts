import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'es-es': "Patrat",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'de-de': "Nagelotz"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
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
				'en-us': "Glance",
				'fr-fr': "Coup d’Œil",
				'es-es': "Ojeada",
				'it-it': "Occhiatina",
				'pt-br': "Olhada de Relance",
				'de-de': "Kurzer Blick"
			},
			effect: {
				'en-us': "Look at the top card of your opponent’s deck.",
				'fr-fr': "Regardez la carte du dessus du deck de votre adversaire.",
				'es-es': "Mira la primera carta de la baraja de tu rival.",
				'it-it': "Guarda la prima carta del mazzo del tuo avversario.",
				'pt-br': "Olhe a primeira carta do baralho do seu oponente.",
				'de-de': "Schau dir die oberste Karte des Decks deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

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
		'en-us': "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others.",
	},

	thirdParty: {
		cardmarket: 297559,
		tcgplayer: 131025
	}
}

export default card
