import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Anorith",
		'fr-fr': "Anorith",
		'de-de': "Anorith"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [347],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Claw Fossil",
		'fr-fr': "Fossile griffe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double écorchure",
				'de-de': "Doppelkratzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275805,
				tcgplayer: 83558
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275805,
				tcgplayer: 83558
			}
		},
	],

}

export default card
