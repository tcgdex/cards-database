import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		193,
	],

	hp: 70,

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
				'en-us': "U-turn",
				'fr-fr': "Demi-Tour",
				'de-de': "Kehrtwende"
			},
			effect: {
				'en-us': "Switch Yanma with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Yanma avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Yanma gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Yanma during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Yanma lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Yanma zugefügt würden."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its eyes can see 360 degrees without moving its head. It won't miss prey—even those behind it.",
	},

	thirdParty: {
		cardmarket: 278277,
		tcgplayer: 90685
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
