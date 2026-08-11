import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik",
		'de-de': "Tannza"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [204],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, Pineco's Surprise Attack attack's base damage is 80.",
				'fr-fr': "Pendant votre prochain tour, l’Attaque surprise de Pomdepik inflige 80 dégâts de base.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden von Tannzas Überraschungsangriff 80 Schadenspunkte."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque surprise",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn’t bother it."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279316,
				tcgplayer: 88130
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279316,
				tcgplayer: 88130
			}
		}
	],

}

export default card
