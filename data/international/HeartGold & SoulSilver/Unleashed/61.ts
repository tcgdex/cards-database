import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [315],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Petal Dance",
				'fr-fr': "Danse-fleur",
				'de-de': "Blättertanz"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads. Roselia is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face. Roselia est maintenant Confus.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. Roselia ist jetzt verwirrt."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Roselia that drink nutritionally rich springwater are said to reveal rare coloration when they bloom."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88823,
				cardmarket: 279217
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88823,
				cardmarket: 279217
			}
		},
	],

}

export default card
