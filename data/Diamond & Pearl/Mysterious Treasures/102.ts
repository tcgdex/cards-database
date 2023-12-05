import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Spheal",
		fr: "Obalie",
		de: "Seemops"
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
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Hustle",
				fr: "Précipitation",
				de: "Übereifer"
			},
			effect: {
				en: "Flip a coin. If heads, during your next turn, Spheal's Rollout attack's base damage is 40.",
				fr: "Lancez une pièce. Si c'est face, les dégâts de base de l'attaque Roulade d'Obalie sont de 40 lors de votre prochain tour.",
				de: "Wirf 1 Münze. Bei \"Kopf\" beträgt in deinem nächsten Zug der Grundschaden von Seemops' Angriff Walzer 40 Schadenspunkte."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	description: {
		fr: "Il gagne la côte en roulant sur les blocs de glace car sa morphologie n'est pas adaptée à la nage."
	}
}

export default card
