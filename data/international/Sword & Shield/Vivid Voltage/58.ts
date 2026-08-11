import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [603],

	name: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Shocking Smash",
				'fr-fr': "Frappe Choquante",
				'es-es': "Golpe Electrizante",
				'it-it': "Colpo Shock",
				'pt-br': "Bordoada Eletrizante",
				'de-de': "Schockstoß"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie de l'un des Pokémon de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía de 1 de los Pokémon de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia da uno dei Pokémon del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia de 1 dos Pokémon do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Head Bolt",
				'fr-fr': "Éclair Frontal",
				'es-es': "Rayo de Cabeza",
				'it-it': "Zuccalampo",
				'pt-br': "Raio de Cabeça",
				'de-de': "Kopf-Blitz"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511710,
				tcgplayer: 226456
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511710,
				tcgplayer: 226456
			}
		},
	],
}

export default card
