import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'de-de': "Menki"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mischief",
				'fr-fr': "Éspièglerie",
				'de-de': "Schabernack"
			},
			effect: {
				'en-us': "Shuffle your opponent's deck.",
				'fr-fr': "Mélangez le deck de votre adversaire.",
				'de-de': "Mische das Deck deines gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Fighting",
			],
			name: {
				'en-us': "Anger",
				'fr-fr': "Colère",
				'de-de': "Zorn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 20 dégâts.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei 'Zahl' fügt dieser Angriff 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		'en-us': "Normally friendly, it quickly becomes angry if it doesn't get what it wants.",
		'fr-fr': "De nature amicale, il se met très vite en colère s'il n'obtient pas ce qu'il veut."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274114,
				tcgplayer: 87170
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274114,
				tcgplayer: 87170
			}
		}
	]
}

export default card
