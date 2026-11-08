import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'de-de': "Vibrava"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [329],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Dive",
				'fr-fr': "Plongée",
				'de-de': "Taucher"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Turn",
				'fr-fr': "Vif retournement",
				'de-de': "Schnelldrehung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "40×",

		},
	],


	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90334,
				cardmarket: 275924
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90334,
				cardmarket: 275924
			},
		},
	],

}

export default card
