import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'de-de': "Wablu"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Feathery",
				'fr-fr': "Doux comme une plume",
				'de-de': "Feathery"
			},
			effect: {
				'en-us': "As long as Swablu is on your Bench, prevent all damage done to Swablu by opponent's attacks.",
				'fr-fr': "Tant que Tylton est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques de votre adversaire.",
				'de-de': "As long as Swablu is on your Bench, prevent all damage done to Swablu by opponent's attacks."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Razor Wind",
				'fr-fr': "Coupe-vent",
				'de-de': "Razor Wind"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276578,
		tcgplayer: 89655
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89655,
				cardmarket: 276578
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89655,
				cardmarket: 276578
			},
		}
	],
}

export default card
