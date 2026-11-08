import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Loathe",
				'fr-fr': "Dégoût",
				'es-es': "Desdén",
				'it-it': "Avversione",
				'pt-br': "Abominar",
				'de-de': "Abscheu"
			},
			effect: {
				'en-us': "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Lanza 1 moneda. Si sale cara, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Lancia una moneta. Se esce testa, scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Jogue uma moeda. Se sair cara, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Wirf 1 Münze. Tausche bei \"Kopf\" dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Even though it appears to be eggs of some sort, it was discovered to be a life-form more like plant seeds.",
	},

	thirdParty: {
		cardmarket: 282669,
		tcgplayer: 98037
	}
}

export default card
