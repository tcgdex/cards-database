import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'de-de': "Nockchan"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [107],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Fighting",
			],
			name: {
				'en-us': "Rush",
				'fr-fr': "Précipitation",
				'de-de': "Hatz"
			},
			effect: {
				'en-us': "Flip 5 coins. This attack does 10 damage times the number of heads. Hitmonchan can't attack during your next turn.",
				'fr-fr': "Lancez 5 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces. Tygnon ne peut pas attaquer pendant votre prochain tour.",
				'de-de': "Wirf 5 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu. Nockchan kann während deines nächsten Zuges nicht angreifen."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Smash Punch",
				'fr-fr': "Ruade",
				'de-de': "Schmetterschlag"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86091,
				cardmarket: 275155
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86091,
				cardmarket: 275155
			}
		},
	]
}

export default card
