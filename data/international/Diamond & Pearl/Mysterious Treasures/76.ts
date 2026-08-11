import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'de-de': "Chaneira"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scrunch",
				'fr-fr': "Compresse",
				'de-de': "Zähneknirschen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Chansey by attacks during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous dégâts infligés à Leveinard par des attaques lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere alle Schadenspunkte, die Chaneira während des nächsten Zuges deines Gegners durch Angriffe zugefügt werden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "Chansey does 60 damage to itself.",
				'fr-fr': "Leveinard s'inflige 60 dégâts.",
				'de-de': "Chaneira fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It is said to deliver happiness. Being compassionate, it shares its eggs with injured people.",
		'fr-fr': "Il est censé apporter la joie. Ce Pokémon charitable offre ses œufs aux blessés."
	},

	thirdParty: {
		cardmarket: 277705,
		tcgplayer: 84175
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"],
		}
	]
}

export default card
