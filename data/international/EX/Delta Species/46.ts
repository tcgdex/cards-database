import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'de-de': "Kokuna"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Fast Evolution",
				'fr-fr': "Évolution fulgurante",
				'de-de': "Fast Evolution"
			},
			effect: {
				'en-us': "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Rollout"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276809,
		tcgplayer: 86412
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

