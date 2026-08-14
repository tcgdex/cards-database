import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [309],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge",
				fr: "Recharge",
				de: "Laden"
			},
			effect: {
				en: "Attach a Lightning Energy card from your discard pile to Electrike.",
				fr: "Attachez une carte Énergie  de votre pile de défausse à Dynavolt.",
				de: "Nimm eine {L}-Energiekarte von deinem Ablagestapel und lege sie an Frizelbliz an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse tonnerre",
				de: "Donnerrüttler"
			},
			effect: {
				en: "Flip a coin. If tails, Electrike does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Dynavolt s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei „Zahl“ fügt sich Frizelbliz selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275678,
				tcgplayer: 85128
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275678,
				tcgplayer: 85128
			}
		},
	],

}

export default card
