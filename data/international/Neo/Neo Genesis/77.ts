import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre",
		'de-de': "Mogelbaum"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
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
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fleau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Sudowoodo.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Simularbre.",
				'de-de': "Fügt 10 Schadenspunkte mal der Anzahl der Schadensmarken auf Mogelbaum zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-pierres",
				'de-de': "Steinwurf"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Although it always pretends to be a tree, its composition appears to be closer to a rock than a plant.",
		'fr-fr': "Bien qu'il prétende être un arbre, il ressemble plus à un rock qu'à une plante."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274477,
				tcgplayer: 89592
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274477,
				tcgplayer: 89592
			}
		}
	]
}

export default card
