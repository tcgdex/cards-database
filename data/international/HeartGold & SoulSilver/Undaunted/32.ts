import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'de-de': "Pinsir"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [127],

	hp: 70,

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
				'en-us': "Charging Horn",
				'fr-fr': "Corne d’attaque",
				'de-de': "Rempelhorn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Guillotine",
				'fr-fr': "Guillotine",
				'de-de': "Guillotine"
			},

			damage: 60,

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
		'en-us': "With its pincer horns, it digs burrows to sleep in at night. In the morning, damp soil clings to its body."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279285,
				tcgplayer: 88139
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279285,
				tcgplayer: 88139
			}
		}
	],

}

export default card
