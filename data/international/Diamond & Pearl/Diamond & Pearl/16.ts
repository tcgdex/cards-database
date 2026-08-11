import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Staraptor",
		'fr-fr': "Etouraptor",
		'de-de': "Staraptor"
	},

	illustrator: "Masahiko Ishii",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		398,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Staravia",
		'fr-fr': "Etourvol",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Accelerative Dive",
				'fr-fr': "Plongeon accélérant",
				'de-de': "Beschleunigter Sturzflug"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, prevent all damage done to Staraptor by attacks (both yours and your opponent's) until the end of your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les dégâts infligés à Etouraptor par des attaques (les vôtres et celles de votre adversaire) jusqu'à la fin de votre prochain tour.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" verhindere alle Schadenspunkte, die Staraptor durch Angriffe von Pokémon (deine und die deines Gegners) bis zum Ende deines nächsten Zuges zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brave Heart",
				'fr-fr': "Bravoure",
				'de-de': "Tapferes Herz"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Staraptor does 100 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Etouraptor s'inflige 100 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich Staraptor selbst 100 Schadenspunkte zu."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "It has a savage nature. It will courageously challenge foes that are much larger.",
		'fr-fr': "Un Pokémon sauvage qui a le courage de défier des ennemis beaucoup plus grands que lui."
	},

	thirdParty: {
		cardmarket: 277515,
		tcgplayer: 89508
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		}
	]
}

export default card
