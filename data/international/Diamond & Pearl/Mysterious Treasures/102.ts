import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'de-de': "Seemops"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
	],

	hp: 50,

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
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Hustle",
				'fr-fr': "Précipitation",
				'de-de': "Übereifer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your next turn, Spheal's Rollout attack's base damage is 40.",
				'fr-fr': "Lancez une pièce. Si c'est face, les dégâts de base de l'attaque Roulade d'Obalie sont de 40 lors de votre prochain tour.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" beträgt in deinem nächsten Zug der Grundschaden von Seemops' Angriff Walzer 40 Schadenspunkte."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It rolls across ice floes to reach shore because its body is poorly shaped for swimming.",
		'fr-fr': "Il gagne la côte en roulant sur les blocs de glace car sa morphologie n'est pas adaptée à la nage."
	},

	thirdParty: {
		cardmarket: 277731,
		tcgplayer: 89448
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
