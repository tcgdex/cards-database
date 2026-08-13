import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		de: "Kicklee"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		106,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "One-Two Kick",
				fr: "Double mawashi geri",
				de: "Tritt-Kombination"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],

			name: {
				en: "Heel Drop",
				fr: "Koud'talon",
				de: "Hackentrick"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},

			damage: 60
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It has a perfect sense of balance and can lash out with powerful kicks from any position.",
		fr: "Il a un sens parfait de l'équilibre et peut donner des coups puissants dans n'importe quelle position.",
		de: "Es hat eine perfekte Balance und kann aus jeder Position kräftige Tritte austeilen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274694,
				tcgplayer: 86103
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274694,
				tcgplayer: 86103
			}
		}
	]
}

export default card
