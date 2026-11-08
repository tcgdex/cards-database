import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'de-de': "Sterndu"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque surprise",
				'de-de': "Surprise Attack"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Recover"
			},
			effect: {
				'en-us': "Discard a Water Energy card attached to Staryu and remove 4 damage counters from Staryu (all if there are less than 4).",
				'fr-fr': "Défaussez une carte Énergie  attachée à Stari et retirez-lui 4 marqueurs de dégât (retirez-les lui tous s'il en a moins de 4).",
				'de-de': "Discard a  Energy attached to Staryu and remove 4 damage counters from Staryu (all if there als less than 4)."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276848,
		tcgplayer: 89549
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

