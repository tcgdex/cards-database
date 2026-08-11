import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'de-de': "Stollrak"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Granite Head",
				'fr-fr': "Tête de granit",
				'de-de': "Granitkopf"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Lairon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Galegon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Im nächsten Zug deines Gegners wird Schaden, der Stollrak durch Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'fr-fr': "Écrasement",
				'de-de': "Stampfer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277338,
		tcgplayer: 86579
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

