import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'de-de': "Reptain"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		253,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Detect",
				'fr-fr': "Détection",
				'de-de': "Scanner"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Grovyle during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Massko lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Reptain zugefügt werden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud'pattes",
				'de-de': "Schmetterkick"
			},

			damage: 30,

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
			type: "Water",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277113,
		tcgplayer: 85939
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
