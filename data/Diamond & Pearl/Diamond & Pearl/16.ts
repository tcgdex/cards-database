import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Staraptor",
		fr: "Etouraptor",
		de: "Staraptor"
	},

	illustrator: "Masahiko Ishii",
	rarity: "Rare",
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
		en: "Staravia",
		fr: "Etourvol",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Accelerative Dive",
				fr: "Plongeon accélérant",
				de: "Beschleunigter Sturzflug"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all damage done to Staraptor by attacks (both yours and your opponent's) until the end of your next turn.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les dégâts infligés à Etouraptor par des attaques (les vôtres et celles de votre adversaire) jusqu'à la fin de votre prochain tour.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" verhindere alle Schadenspunkte, die Staraptor durch Angriffe von Pokémon (deine und die deines Gegners) bis zum Ende deines nächsten Zuges zugefügt werden."
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
				en: "Brave Heart",
				fr: "Bravoure",
				de: "Tapferes Herz"
			},
			effect: {
				en: "Flip a coin. If tails, Staraptor does 100 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Etouraptor s'inflige 100 dégâts.",
				de: "Wirf 1 Münze. Bei \"Zahl\" fügt sich Staraptor selbst 100 Schadenspunkte zu."
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
		fr: "Un Pokémon sauvage qui a le courage de défier des ennemis beaucoup plus grands que lui."
	}
}

export default card
