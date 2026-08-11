import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'de-de': "Camaub"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Collect"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Draw a card."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup rapide",
				'de-de': "Lunge"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 87810,
		cardmarket: 276568
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87810,
				cardmarket: 276568
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87810,
				cardmarket: 276568
			},
		}
	],
}

export default card
