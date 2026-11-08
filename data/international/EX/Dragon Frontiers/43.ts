import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Bagon δ",
		'fr-fr': "Draby δ",
		'de-de': "Kindwurm"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		371,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Granite Head",
				'fr-fr': "Tête de granit",
				'de-de': "Granitkopf"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Bagon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Draby par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Im nächsten Zug deines Gegners wird Schaden, der Kindwurm durch gegnerische Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 10,

		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277248
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
