import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'de-de': "Samurzel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		273,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nap",
				'fr-fr': "Tit'sieste",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Seedot.",
				'fr-fr': "Retirez à Grainipiot 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Samurzel."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'fr-fr': "Double tour",
				'de-de': "Doppeldreher"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277366,
		tcgplayer: 89042
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

