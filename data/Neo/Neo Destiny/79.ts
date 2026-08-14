import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

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
				en: "Flipper Splash",
				fr: "Koud'palme",
				de: "Flossenplatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Migraine",
				fr: "Maud'krâne",
				de: "Migräne"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Psyduck is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, Psykokwak est maintenant Confus.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt verwirrt. Bei „Zahl“ ist Enton jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Although possessed of great mental powers, it doesn't know how to use them.",
		fr: "Bien que possédant d'immenses pouvoirs mentaux, il ne sait pas les utiliser.",
		de: "Obwohl es starke mentale Kräfte besitzt, weiß es nicht, wie es sie anwenden soll."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274731,
				tcgplayer: 88433
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274731,
				tcgplayer: 88433
			}
		}
	]
}

export default card
